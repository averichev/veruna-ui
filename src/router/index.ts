import { createRouter, createWebHashHistory } from "vue-router";
import Registration from "../view/RegistrationView.vue";
import Login from "../view/LoginView.vue";
import Main from "../view/Main.vue";
import Users from "../view/Users.vue";

const routes = [
  { name: "main", path: "/", component: Main },
  { name: "users", path: "/users", component: Users },
  { name: "login", path: "/login", component: Login },
  { name: "register", path: "/register", component: Registration },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
