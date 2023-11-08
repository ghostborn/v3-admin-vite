import {ref} from "vue";
import store from "@/store";
import {defineStore} from "pinia";

import {getToken,removeToken,setToken} from "@/utils/cache/cookies";
import {loginApi,getUserInfoApi} from "@/api/login";
import {type LoginRequestData} from "@/api/login/types/login";

export const useUserStore = defineStore('user',()=>{
  const token = ref<string>(getToken() || '')
})

