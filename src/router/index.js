import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/home",
    component: () => import("pages/home"),
    children: [
      {
        name: "home-product",
        path: "product/:id",
        component: () => import('pages/product')
      }
    ]
  },
  {
    name: "cart",
    path: "/cart",
    component: () => import("pages/cart")
  },
  {
    name: "personal",
    path: "/personal",
    component: () => import("pages/personal")
  },
  {
    name: "category",
    path: "/category",
    component: () => import("pages/category")
  },
  {
    name: "product",
    path: "/product",
    component: () => import("pages/product")
  },
  {
    name: "search",
    path: "/search",
    component: () => import("pages/search")
  },
  {
    path: "*",
    redirect: "/home"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
