<template>
  <div>
    <h1>Страницы</h1>
    <div>
      <button class="btn btn-sm" type="button" @click="goToCreateUser">
        Добавить страницу
      </button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <td style="width: 1px"></td>
          <td>Код</td>
          <td>Имя</td>
        </tr>
      </thead>
      <tbody>
        <PageListItem v-for="page in state.pages" :key="page.id" :page="page" />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import Default from "../plugins/httpClient.ts";
import { onMounted, reactive } from "vue";
import { IPageListItem } from "../models";
import { useRouter } from "vue-router";
import PageListItem from "../components/PageListItem.vue";

const state = reactive<IState>({
  sites: [],
});
interface IState {
  pages: IPageListItem[];
}

const httpClient = new Default();
const router = useRouter();

onMounted(async () => {
  await httpClient
    .get("/api/protected/page/list/")
    .then((response) => {
      state.pages = response.data.list.items;
    })
    .catch((axiosError) => {
      console.log(axiosError);
    });
});

const goToCreateUser = () => {
  router.push({ name: "pages_create" });
};
</script>
