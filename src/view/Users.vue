<template>
  <h1>Пользователи</h1>
</template>

<script setup lang="ts">
import Default from "../plugins/httpClient.ts";

const httpClient = new Default();

await httpClient
  .post("/api/protected/user/list/")
  .then((response) => {
    console.log(response.data);
  })
  .catch((axiosError) => {
    console.log(axiosError);
  });
</script>
