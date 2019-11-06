import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Login from "../components/Login";
import Board from "../components/Board";
import Card from "../components/Card";
import NotFound from "../components/NotFound";
Vue.use(VueRouter);

const Router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/login", component: Login },
    {
      path: "/board/:bid",
      component: Board,
      children: [{ path: "card/:cid", component: Card }]
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
export default Router;
