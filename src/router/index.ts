import {type RouteRecordRaw, createRouter} from "vue-router";

export const constantRoutes: RouteRecordRaw[] = [
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
