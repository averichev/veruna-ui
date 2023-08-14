<template>
  <div class="container">
    <div class="row">
      <div class="col-4 m-auto">
        <form
          enctype="multipart/form-data"
          method="post"
          action="/login/"
          @submit.prevent="handleSubmit"
        >
          <h1>Регистрация</h1>
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
          <label class="form-label">Повторите пароль</label>
          <div class="input-group mb-3">
            <input
              v-model="formData.password_repeat"
              type="password"
              class="form-control"
            />
          </div>
          <button type="submit" class="btn btn-info">Зарегистрироваться</button>
        </form>
        <div class="small">
          <router-link :to="{ name: 'login' }"> Вход </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import axios from "axios";
import importMeta from "../utils/importMeta.ts";

const formData = reactive({
  username: "",
  password: "",
  password_repeat: "",
});

const handleSubmit = async () => {
  const payload = { ...formData };
  await axios.post("/register/", payload, {
    baseURL: importMeta.VITE_APP_BASE_URL,
  });
};
</script>
