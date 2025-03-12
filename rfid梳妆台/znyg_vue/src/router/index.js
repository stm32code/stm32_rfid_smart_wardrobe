import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'


/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/my/DataTable'),
        meta: { title: '首页', icon: 'el-icon-s-home' }
      }]
  },

  // {
  //   path: '/ck',
  //   component: Layout,
  //   redirect: '/ck/company_style',
  //   name: '',
  //   meta: { title: '管理系统', icon: 'el-icon-user-solid' ,roles: ['pan'] },
  //   children: [
  //     {
  //       path: 'company_style',
  //       name: 'company_style',
  //       component: () => import('@/views/CompanyStyle/index'),
  //       meta: { title: '参数管理', icon: 'table'}
  //     },
  //   ]
  // },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

export const asyncRoutes = [
  {
    path: '/my',
    component: Layout,
    redirect: '/my/user_info',
    name: '',
    meta: { title: '系统', icon: 'el-icon-s-grid' ,roles: ['man'] },
    children: [
      {
        path: 'WardrobeCategoryTable',
        name: 'WardrobeCategoryTable',
        component: () => import('@/views/my/WardrobeCategoryTable'),
        meta: { title: '化妆品盒分类管理', icon: 'el-icon-s-custom', roles: ['man'] }
      },{
        path: 'WardrobeTable',
        name: 'WardrobeTable',
        component: () => import('@/views/my/WardrobeTable'),
        meta: { title: '化妆品盒管理', icon: 'el-icon-headset', roles: ['man'] }
      },{
        path: 'AttributeTable',
        name: 'AttributeTable',
        component: () => import('@/views/my/AttributeTable'),
        meta: { title: '属性管理', icon: 'el-icon-s-platform', roles: ['man'] }
      },{
        path: 'ClothingCategoryTable',
        name: 'ClothingCategoryTable',
        component: () => import('@/views/my/ClothingCategoryTable'),
        meta: { title: '化妆品分类管理', icon: 'el-icon-s-ticket', roles: ['man'] }
      },{
        path: 'ClothingTable',
        name: 'ClothingTable',
        component: () => import('@/views/my/ClothingTable'),
        meta: { title: '化妆品管理', icon: 'el-icon-s-flag', roles: ['man'] }
      },{
        path: 'DataTable',
        name: 'DataTable',
        component: () => import('@/views/my/DataTable'),
        meta: { title: '数据管理', icon: 'el-icon-s-grid', roles: ['man'] }
      },{
        path: 'ClothingTableA',
        name: 'ClothingTableA',
        component: () => import('@/views/my/ClothingTableA'),
        meta: { title: '出入库', icon: 'el-icon-s-data', roles: ['man'] }
      }
    ]
  },


  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]



const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
