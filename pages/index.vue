<template>
  <div id="root">
    <div>Page 1</div>
    <NuxtLink to="/home">Home</NuxtLink>
    <button @click="refreshData">Refresh Data</button>
    <button @click="updateRoute">Update route</button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "dashboard",
});
const dataTwice = await $fetch("/api/test");
const router = useRouter();
const appConfig = useAppConfig()

updateAppConfig({
    title: "Tran Huu Tai"
})

console.log(appConfig);


const { data: dataAsync } = await useAsyncData("test", () =>
  $fetch("/api/test")
);
const { data: dataFetch } = await useFetch("/api/test");

console.log(dataTwice);
console.log(dataAsync.value);
console.log(dataFetch.value);

clearNuxtData("test");
console.log(`Clear: `, dataAsync.value);

const refreshData = () => {
  refreshNuxtData("test");
};

onBeforeRouteLeave(() => {
  console.log("route leave");
});

onBeforeRouteUpdate(() => {
  console.log("route update");
});

const updateRoute = () => {
  router.replace({
    path: router.currentRoute.value.path,
    query: {
      ...router.currentRoute.value.query,
      s: "search",
    },
  });
};
</script>

<style scoped>
#root {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
}
</style>
