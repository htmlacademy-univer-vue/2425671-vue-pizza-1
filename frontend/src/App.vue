<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<script setup>
import { AppLayout } from "@/layouts";
import { useDataStore, useAuthStore, useCartStore } from "./stores";

const dataStore = useDataStore();
const authStore = useAuthStore();
// const cartStore = useCartStore();

dataStore.fetchdata();

authStore.whoAmI();

</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
