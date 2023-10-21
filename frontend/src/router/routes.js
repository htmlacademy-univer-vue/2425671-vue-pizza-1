export default [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
    meta: { layout: "AppLayoutHeader" },
    children: [],
  },
  {
    path: "/sign-in",
    name: "LoginView",
    component: () => import("../views/LoginView.vue"),
    meta: { layout: "AppLayoutDefault" },
    children: [],
  },
  {
    path: "/cart",
    name: "CartView",
    component: () => import("../views/CartView.vue"),
    meta: { layout: "AppLayoutHeader" },
    children: [],
  },
  {
    path: "/profile",
    name: "ProfileView",
    component: () => import("../views/ProfileView.vue"),
    meta: { layout: "AppLayoutHeader" },
    children: [],
  },
  {
    path: "/orders",
    name: "OrdersView",
    component: () => import("../views/OrdersView.vue"),
    meta: { layout: "AppLayoutHeader" },
    children: [],
  },
];
