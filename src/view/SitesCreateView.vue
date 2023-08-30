<template>
  <div>
    <h1>Добавление сайта</h1>
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col-12">
          <label class="form-label" for="username">Название</label>
          <input
            id="username"
            v-model="formData.name"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label class="form-label" for="username">Домен</label>
          <input
            id="code"
            v-model="formData.domain"
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
import Default from "../plugins/httpClient";
import { useRouter } from "vue-router";

const httpClient = new Default();
const router = useRouter();

const formData = reactive({
  name: "",
  domain: "",
  description: "",
});
const handleSubmit = async () => {
  const payload = { ...formData };
  await httpClient.post("/api/protected/site/create/", payload).then(() => {
    router.push({ name: "sites" });
  });
};
</script>
