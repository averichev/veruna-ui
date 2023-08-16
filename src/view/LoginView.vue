<template>
  <div>
    <div class="row">
      <div class="col-4 m-auto">
        <form
          enctype="multipart/form-data"
          method="post"
          action="/login/"
          @submit.prevent="handleSubmit"
        >
          <h1>Вход</h1>
          <label class="form-label">Имя пользователя</label>
          <div class="input-group mb-3">
            <input
              v-model="formData.username"
              type="text"
              class="form-control"
            />
          </div>
          <label class="form-label">Пароль</label>
          <div class="input-group mb-3">
            <input
              v-model="formData.password"
              type="password"
              class="form-control"
            />
          </div>
          <button type="submit" class="btn btn-info">Войти</button>
        </form>
        <div class="small">
          <router-link :to="registerLink"> Регистрация </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import Default from "../plugins/httpClient.ts";
import { useCurrentUserStore } from "../stores/currentUser.ts";
import { useRouter } from "vue-router";

const httpClient = new Default();
const router = useRouter();
const formData = reactive({
  username: "",
  password: "",
});

const registerLink = { name: "register" };
const currentUserStore = useCurrentUserStore();

const handleSubmit = async () => {
  const payload = { ...formData };
  await httpClient
    .post("/login/", payload)
    .then(async (r) => {
      localStorage.removeItem("jwt");
      localStorage.setItem("jwt", r.data["data"]["token"]);
      await currentUserStore.initUser();
    })
    .catch((axiosError) => {
      console.log(axiosError);
    });
};

onMounted(() => {
  if (currentUserStore.isInit) {
    router.push({ name: "main" });
  }
});
</script>
