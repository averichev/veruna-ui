<template>
  <div>
    <h1>Сайты</h1>
    <div>
      <button class="btn btn-sm" type="button" @click="goToCreateUser">
        Добавить сайт
      </button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <td style="width: 1px"></td>
          <td>Домен</td>
          <td>Имя</td>
          <td>Описание</td>
        </tr>
      </thead>
      <tbody>
        <SiteListItem v-for="site in state.sites" :key="site" :site="site" />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import Default from "../plugins/httpClient.ts";
import { onMounted, reactive } from "vue";
import { ISiteListItem } from "../models";
import { useRouter } from "vue-router";

const state = reactive<IState>({
  sites: [],
});
interface IState {
  sites: ISiteListItem[];
}

const httpClient = new Default();
const router = useRouter();

onMounted(async () => {
  await getSites();
});

const getSites = async () => {
  await httpClient
    .get("/api/protected/site/list/")
    .then((response) => {
      state.sites = response.data.list.items;
    })
    .catch((axiosError) => {
      console.log(axiosError);
    });
};

const goToCreateUser = () => {
  router.push({ name: "sites_create" });
};
</script>
