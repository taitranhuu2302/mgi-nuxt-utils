<template>
  <div>Error page</div>
</template>

<script setup lang="ts">
throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
// clearError({ redirect: "/" });
</script>

<style lang="scss" scoped></style>
