<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<script setup>
import { AppLayout } from "@/layouts";
import { useDataStore } from "./stores";
const dataStore = useDataStore();
dataStore.fetchdata();
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
