import Vue from "vue";
import Router from "vue-router";

import HomeComponent from "./components/HomeComponent.vue";
import CreateComponent from "./components/CreateComponent.vue";
import IndexComponent from "./components/IndexComponent.vue";
import EditComponent from "./components/EditComponent.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeComponent,
      meta: { title: "Home" }
    },
    {
      name: "create",
      path: "/create",
      component: CreateComponent,
      meta: { title: "Create" }
    },
    {
      name: "posts",
      path: "/posts",
      component: IndexComponent,
      meta: { title: "Post" }
    },
    {
      name: "edit",
      path: "/edit/:id",
      component: EditComponent,
      meta: { title: "Edit" }
    }
  ]
});
