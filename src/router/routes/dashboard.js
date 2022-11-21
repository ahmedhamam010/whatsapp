export default [
  {
    path: '/dashboard/analytics',
    name: 'dashboard-analytics',
    component: () => import('@/views/dashboard/analytics/Analytics.vue'),
  },
  {
    path: '/dashboard/home',
    name: 'dashboard-home',
    component: () => import('@/views/apps/dashboard/Home.vue'),
  },
]
