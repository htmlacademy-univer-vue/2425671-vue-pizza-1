export default [
	{
		path: '/',
		name: 'HomeView',
		component: () => import('../views/HomeView.vue'),
        meta: {layout: 'AppLayoutHeader'},
		children: []
	},
    {
		path: '/sign-in',
		name: 'LoginView',
		component: () => import('../views/HomeView.vue'),
        meta: {layout: 'AppLayoutHeader'},
		children: []
	},
    {
		path: '/cart',
		name: 'CartView',
		component: () => import('../views/HomeView.vue'),
        meta: {layout: 'AppLayoutHeader'},
		children: []
	},
    {
		path: '/user',
		name: 'UserView',
		component: () => import('../views/HomeView.vue'),
        meta: {layout: 'AppLayoutHeader'},
		children: []
	},
    {
		path: '/profile',
		name: 'ProfileView',
		component: () => import('../views/HomeView.vue'),
        meta: {layout: 'AppLayoutHeader'},
		children: []
	},
    {
		path: '/orders',
		name: 'OrdersView',
		component: () => import('../views/HomeView.vue'),
        meta: {layout: 'AppLayoutDefault'},
		children: []
	},
]
