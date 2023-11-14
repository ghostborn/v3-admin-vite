import {type RouteRecordRaw, createRouter} from "vue-router";
import {history} from "@/router/helper";

const Layouts = ()=> import("@/layouts/index.vue")
/**
 * 常驻路由
 * 除了 redirect/403/404/login 等隐藏页面，其他页面建议设置 Name 属性
 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layouts,
    meta:{
      hidden: true
    },
    children:[
      {
        path: "/redirect/:path(.*)",
        component: ()=> import("@/views/redirect/index.vue")
      }
    ]
  },
  {
    path: "/login",
    component: ()=> import("@/views/login/index.vue"),
    meta:{
      hidden: true
    }
  },
  {
    path: "/",
    component: Layouts,
    redirect: '/dashboard',
    children:[
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          svgIcon: 'dashboard',
          affix: true
        }
      }
    ]
  }
]

const router = createRouter({
  history,
  routes: constantRoutes
})

export default router



