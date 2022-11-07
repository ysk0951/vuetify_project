import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import ModifyPwd from "@/views/member/ModifyPwd";
import Find from "@/views/member/Find";
import Main from "@/views/Main";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/member/modifyPwd",
    name: "modifyPwd",
    component: ModifyPwd,
  },
  {
    path: "/member/find",
    name: "find",
    component: Find,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  next();
  console.log(to, from, next);
});

//NavigationDuplicated Error ignore
const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originPush.call(this, location).catch((err) => {
    if (err.name !== "NavigationDuplicated") throw err;
  });
};

export default router;
