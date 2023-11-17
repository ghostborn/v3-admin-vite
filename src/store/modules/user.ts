import {ref} from "vue";
import store from "@/store";
import {defineStore} from "pinia";

import {getToken,removeToken,setToken} from "@/utils/cache/cookies";
import {loginApi,getUserInfoApi} from "@/api/login";
import {type LoginRequestData} from "@/api/login/types/login";

export const useUserStore = defineStore('user',()=>{
  const token = ref<string>(getToken() || '')
  const roles = ref<string[]>([])
  const username = ref<string>('')

  /**设置角色数组 */
  const setRoles = (value:string[]) =>{
    roles.value = value
  }

  /**登录*/
  const login = async ({username,password,code}:LoginRequestData)=>{
    const { data }= await loginApi({username,password,code})
    setToken(data.token)
    token.value = data.token
  }

  /** 获取用户详情*/
  const getInfo = async ()=>{
    const { data } = await getUserInfoApi()
    username.value = data.username
    roles.value = data.roles
  }

  /** 登出 */
  const logout = ()=>{
    token.value = ''
    roles.value = []
  }

  /** 重置 Token */
  const resetToken = () =>{
    token.value = ''
    roles.value = []
  }


  return {login,roles,setRoles,getInfo,logout,resetToken}
})

/** 在setup外使用*/
export function useUserStoreHook(){
  return useUserStore(store)
}

