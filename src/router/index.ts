import { createRouter, createWebHashHistory } from "vue-router";
import Registration from "../view/RegistrationView.vue";
import Login from "../view/LoginView.vue";
import MainView from "../view/MainView.vue";
import UsersView from "../view/UsersView.vue";
import UsersCreateView from "../view/UsersCreateView.vue";
import SitesView from "../view/SitesView.vue";
import PagesView from "../view/PagesView.vue";
import PagesCreateView from "../view/PagesCreateView.vue";
import SitesCreateView from "../view/SitesCreateView.vue";

const routes = [
  { name: "main", path: "/", component: MainView },
  { name: "users", path: "/users", component: UsersView },
  { name: "sites", path: "/sites", component: SitesView },
  { name: "sites_create", path: "/sites/create", component: SitesCreateView },
  { name: "pages", path: "/pages", component: PagesView },
  { name: "pages_create", path: "/pages/create", component: PagesCreateView },
  { name: "users_create", path: "/users/create", component: UsersCreateView },
  { name: "login", path: "/login", component: Login },
  { name: "register", path: "/register", component: Registration },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
