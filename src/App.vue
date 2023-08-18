<template>
  <div class="container-fluid">
    <div v-if="currentUser">{{ currentUser.username }}</div>
    <div class="row">
      <div class="col-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link
              :to="{ name: 'main' }"
              activeClass="active"
              class="nav-link"
            >
              Главная
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'users' }"
              activeClass="active"
              class="nav-link"
            >
              Пользователи
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'sites' }"
              activeClass="active"
              class="nav-link"
            >
              Сайты
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCurrentUserStore } from "./stores/currentUser.ts";
import { computed, onMounted } from "vue";

const currentUserStore = useCurrentUserStore();

onMounted(async () => {
  await currentUserStore.initUser();
});

const currentUser = computed(() => currentUserStore.user);
</script>
