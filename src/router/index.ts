import { createRouter, createWebHashHistory } from "vue-router";
import Registration from "../view/RegistrationView.vue";
import Login from "../view/LoginView.vue";

const routes = [
  { name: "login", path: "/login", component: Login },
  { name: "register", path: "/register", component: Registration },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
