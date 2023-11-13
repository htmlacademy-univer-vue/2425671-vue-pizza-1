<template>
  <router-view />
</template>


<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();
console.log(route);

/* Этот код перенаправит пользователя на страницу профиля */
// if ()
//   router.push('/')
</script>
