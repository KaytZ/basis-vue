import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: "/",
      name: "layout",
      redirect: "/home",
      component: () => import("./views/Layout.vue"),
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("./views/Home.vue")
        },
        {
          path: "/about",
          name: "about",
          component: () => import("./views/About.vue")
        },
        {
          path: "/join",
          name: "join",
          component: () => import("./views/Join.vue")
        },
        {
          path: "/product/opinionanalysis",
          component: () => import("./views/product/OpinionAnalysis.vue"),
          name: "iot"
        },
        {
          path: "/product/microservice",
          component: () => import("./views/product/MicroService.vue"),
          name: "iot"
        },
        {
          path: "/product/mes",
          component: () => import("./views/product/Mes.vue"),
          name: "iot"
        },
        {
          path: "/product/restaurant",
          component: () => import("./views/product/Restaurant.vue"),
          name: "iot"
        },
        {
          path: "/product/iot",
          component: () => import("./views/product/Iot.vue"),
          name: "iot"
        },
        {
          path: "/solutions/fashion",
          component: () => import("./views/solutions/Fashion.vue"),
          name: "iot"
        },
        {
          path: "/solutions/phone",
          component: () => import("./views/solutions/Phone.vue"),
          name: "iot"
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/Register.vue")
    },
    {
      path: "*",
      redirect: "/home"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
