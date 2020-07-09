import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store'
Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'home',
    component: (resolve) => require(['@/views/home'], resolve)
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: (resolve) => require(['@/views/blogs'], resolve),
    children: [
      {
        path: '',
        component: (resolve) => require(['@/views/blogs/blogFeed'], resolve)
      },
      {
        path: 'post/:id',
        component: (resolve) => require(['@/views/blogs/blogPost'], resolve)
      }
    ]
  },
  {
    path: '/community',
    name: 'community',
    component: (resolve) => require(['@/views/community'], resolve)
  },
  {
    path: '*',
    redirect: '/'
  }

]

const router = new Router({
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return {x: 0, y: 0}
    }
  },
  linkActiveClass: 'active',
  mode: 'history',
  routes: routes
})

// 登录和权限验证
// router.beforeEach(async (to, from, next) => {
//   let loginUserName = store.getters.loginUserName
//   let loginUserRole = store.getters.loginUserRole
//   let goNext = (to, from, next, loginUserRole) => {
//     if (to.meta.role !== undefined && loginUserRole > to.meta.role) {
//       next({path: '/noPermission'})
//     } else {
//       next()
//     }
//   }
//   try {
//     if (!loginUserName) { // 先判断是否已登录
//       await store.dispatch('getUserName')
//       await store.dispatch('getUserRole')
//       let loginUserName = store.getters.loginUserName
//       let loginUserRole = store.getters.loginUserRole
//       if (loginUserName) {
//         goNext(to, from, next, loginUserRole)
//       }
//     } else {
//       goNext(to, from, next, loginUserRole)
//     }
//   } catch (err) {}
// })

// 使用导航守卫发送统计
// router.afterEach((to, from) => {
//   if (window.gtag) {
//     window.gtag('config', config.gtag_id, {
//       'page_path': to.fullPath
//     });
//   }
// });

export default router
