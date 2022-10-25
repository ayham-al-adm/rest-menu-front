import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupPage from "@/Pages/SignupPage.vue";
import CreateCategory from "@/Pages/categories/CreateCategory.vue";
import CreateItem from "@/Pages/items/CreateItem.vue";
import { Actions } from "@/store/enums/StoreEnums";
import JwtService from "@/services/JwtService";
import store from "@/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "signup-page",
      component: SignupPage,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categories/create",
      name: "create-category",
      component: CreateCategory,
    },
    {
      path: "/items/create",
      name: "create-item",
      component: CreateItem,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

router.beforeEach(() => {
  store.dispatch(Actions.VERIFY_AUTH, { api_token: JwtService.getToken() });

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
