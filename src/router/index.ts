import { createRouter, createWebHashHistory } from "vue-router";
import Registration from "../view/RegistrationView.vue";
import Login from "../view/LoginView.vue";
import MainView from "../view/MainView.vue";
import UsersView from "../view/UsersView.vue";
import UsersCreateView from "../view/UsersCreateView.vue";

const routes = [
  { name: "main", path: "/", component: MainView },
  { name: "users", path: "/users", component: UsersView },
  { name: "users_create", path: "/users/create", component: UsersCreateView },
  { name: "login", path: "/login", component: Login },
  { name: "register", path: "/register", component: Registration },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
