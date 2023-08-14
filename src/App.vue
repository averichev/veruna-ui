<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link
              :to="{ name: 'register' }"
              activeClass="active"
              class="nav-link"
            >
              Регистрация
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'login' }"
              activeClass="active"
              class="nav-link"
            >
              Вход
            </router-link>
          </li>
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
        </ul>
      </div>
      <div class="col-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
