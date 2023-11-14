import router from "@/router";
import {useUserStoreHook} from "@/store/modules/user";


import {getToken} from "@/utils/cache/cookies";


import NProgress from "nprogress"
import "nprogress/nprogress.css"

router.beforeEach( (to,_from,next) =>{
  const userStore = useUserStoreHook()
  const token = getToken()
  console.log(token,'token')

  if(!token){
    next("/login")
    return
  }else{

  }

  // 如果已经登录，并准备进入 Login页面，则重定向到主页
  // if(to.path === "/login"){
  //   return next({path: "/"})
  // }


  try {
     userStore.getInfo()
  } catch (err:any){

  }

})

router.afterEach((to)=>{

})
