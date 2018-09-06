import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Taskp from "./views/Taskp.vue";
import Logout from "./views/Logout.vue";
import Inbox from "./views/Inbox.vue";
import fday from "./views/fday.vue";
import Today from "./views/Today.vue";
import List from "./views/List.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/List",
      name: "list",
      component: List
    },

    {
      path: "/Signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/Today",
      name: "today",
      component: Today
    },
    {
      path: "/fday",
      name: "fday",
      component: fday
    },
    {
      path: "/Taskp",
      name: "taskp",
      component: Taskp
    },

    {
      path: "/Login",
      name: "login",
      component: Login
    },
    {
      path: "/Logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/Inbox",
      name: "inbox",
      component: Inbox
    },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
