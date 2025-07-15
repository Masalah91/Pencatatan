import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import DashboardPage from '../views/DashboardPage.vue'
import MainLayout from '../layouts/MainLayout.vue'
import MasterUserPage from '../views/MasterUserPage.vue'
import ReportOrdersPage from '../views/ReportOrdersPage.vue'
// import Dashboard from '../views/Dashboard.vue' // opsional

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: DashboardPage
      },
      {
        path: 'users',
        name: 'MasterUser',
        component: MasterUserPage
      },
      {
        path: 'reports/orders',
        name: 'ReportOrders',
        component: ReportOrdersPage
      }
    ]
  }
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: Dashboard
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
