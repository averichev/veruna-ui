<template>
  <div>
    <h1>Добавление пользователя</h1>
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col-12">
          <label class="form-label" for="username">Имя пользователя</label>
          <input
            id="username"
            v-model="formData.username"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div>
        <button class="btn" type="submit">Сохранить</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Default from "../plugins/httpClient.ts";
import { useRouter } from "vue-router";

const httpClient = new Default();
const router = useRouter();

const formData = reactive({
  username: "",
});
const handleSubmit = async () => {
  const payload = { ...formData };
  await httpClient.post("/api/protected/user/create/", payload).then(() => {
    router.push({ name: "users" });
  });
};
</script>
