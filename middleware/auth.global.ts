export default defineNuxtRouteMiddleware((to, from) => {
  const auth = false;
  const event = useRequestEvent();
  if (to.path === "/auth" && !auth) {
    // return abortNavigation("Message");
    setResponseStatus(event, 404, "Page Not Found");
    return navigateTo("/");
  }
});
