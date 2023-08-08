<template>
  <div>
    <div class="container">
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
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Default from "../plugins/httpClient.ts";

const httpClient = new Default();
const formData = reactive({
  username: "",
  password: "",
});

const registerLink = { name: "register" };

const handleSubmit = async () => {
  const payload = { ...formData };
  await httpClient
    .post("/login/", payload)
    .then(async (r) => {
      console.log(r);
      localStorage.setItem("jwt", r.data["data"]["token"]);
      await httpClient
        .post("/api/protected/get-current-user/")
        .then((response) => {
          console.log(response);
        })
        .catch((axiosError) => {
          console.log(axiosError);
        });
    })
    .catch((axiosError) => {
      console.log(axiosError);
    });
};
</script>
