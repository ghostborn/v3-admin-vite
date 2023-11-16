import router from "@/router";
import {useUserStoreHook} from "@/store/modules/user";









import {getToken} from "@/utils/cache/cookies";


import NProgress from "nprogress"
import "nprogress/nprogress.css"

// router.beforeEach( (to,_from,next) =>{
//   const userStore = useUserStoreHook()
//   const token = getToken()
//   console.log(token,'token')
//
//
// })
//
// router.afterEach((to)=>{
//
// })
