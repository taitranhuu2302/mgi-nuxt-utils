export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`Path dashboard: ${to.fullPath}`);
});
