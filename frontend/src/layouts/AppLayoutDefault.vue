<template>
  <div class="app_layout">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.app_layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
