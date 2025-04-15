// import { createRouter, createWebHistory } from 'vue-router'

// //导入组件
// import LoginVue from '@/Login.vue'
// import LayoutVue from '@/Layout.vue'

// //定义路由关系
// const routers = [
//   { path: '/login', component: LoginVue },
//   { path: '/', component: LayoutVue }
// ]

// //创建路由
// const router = createRouter({
//   history: createWebHistory(),
//   routers: routers
// })


// //导出路由
// export default router


import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import LoginVue from '@/Login.vue'
import LayoutVue from '@/Layout.vue'
import ArticleCategoryVue from '@/views/article/ArticleCategory.vue'
import ArticleManageVue from '@/views/article/ArticleManage.vue'
import UserAvatarVue from '@/views/user/UserAvatar.vue'
import UserInfoVue from '@/views/user/UserInfo.vue'
import UserResetPasswordVue from '@/views/user/UserResetPassword.vue'

// 定义路由关系
const routes = [
  { path: '/login', component: LoginVue },
  {
    path: '/', component: LayoutVue, redirect: '/article/manage', children: [
      { path: '/article/category', component: ArticleCategoryVue },
      { path: '/article/manage', component: ArticleManageVue },
      { path: '/user/info', component: UserInfoVue },
      { path: '/user/avatar', component: UserAvatarVue },
      { path: '/user/resetPassword', component: UserResetPasswordVue }
    ]
  }
]

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  // 将 routers 修改为 routes
  routes: routes
})

// 导出路由
export default router