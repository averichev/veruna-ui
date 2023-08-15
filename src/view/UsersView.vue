<template>
  <div>
    <h1>Пользователи</h1>
    <div>
      <button class="btn btn-sm" type="button" @click="goToCreateUser">
        Добавить пользователя
      </button>
    </div>
    <table v-if="state.users_is_loaded" class="table">
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
import { useRouter } from "vue-router";

const state = reactive<IState>({
  users_is_loaded: false,
  users: [],
});
interface IState {
  users: IUserListItem[];
  users_is_loaded: boolean;
}

const httpClient = new Default();
const router = useRouter();

onMounted(async () => {
  await getUsers();
});

const getUsers = async () => {
  state.users_is_loaded = false;
  await httpClient
    .post("/api/protected/user/list/")
    .then((response) => {
      state.users = response.data.items;
      state.users_is_loaded = true;
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

const goToCreateUser = () => {
  // Now you can access params like:
  router.push({ name: "users_create" });
};
</script>
