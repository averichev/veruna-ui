<template>
  <div>
    <h1>Пользователи</h1>
    <table class="table">
      <thead>
        <tr>
          <td style="width: 1px"></td>
          <td>Имя пользователя</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in state.users" :key="user.id">
          <UserListItem :user="user" @delete="deleteUser" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import Default from "../plugins/httpClient.ts";
import { onMounted, reactive } from "vue";
import { IUserListItem } from "../models";

const state = reactive<IState>({
  users: [],
});
interface IState {
  users: IUserListItem[];
}

const httpClient = new Default();

onMounted(async () => {
  await getUsers();
});

const getUsers = async () => {
  await httpClient
    .post("/api/protected/user/list/")
    .then((response) => {
      state.users = response.data.items;
    })
    .catch((axiosError) => {
      console.log(axiosError);
    });
};

const deleteUser = async (e: IUserListItem) => {
  await httpClient
    .delete(`/api/protected/user/${e.id}/delete/`)
    .then((r) => {
      console.log(r);
      state.users = state.users.filter((n) => n.id !== e.id);
    })
    .catch((axiosError) => {
      console.log(axiosError);
    });
};
</script>
