<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  data: () => ({
    message: 'Welcome to home page'
  }),
  head() {
    return {
      title: 'Home Page'
    }
  },
});
</script>

<style lang="scss" scoped></style>
