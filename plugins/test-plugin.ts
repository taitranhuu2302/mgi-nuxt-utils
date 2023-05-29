export default defineNuxtPlugin(() => {
  onNuxtReady(async () => {
    console.log("Nuxt Ready");
  });

  addRouteMiddleware((to, from) => {
    if (to.path === "/home") {
      console.log("welcome to home");
    }
  });
});
