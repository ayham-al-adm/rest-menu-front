<template>
  <AppLayout v-if="showLayout" />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import AppLayout from "@/Layout/AppLayout.vue";
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";

const router = useRouter();
const showLayout = computed(() => {
  return (
    router.currentRoute.value.name != "signup-page" &&
    router.currentRoute.value.name != "login-page"
  );
});

//check if current user is authenticated
// if (!store.getters.isUserAuthenticated) {
//         router.push({ name: "sign-in" });
//       }
</script>

<style>
@import "sweetalert2/dist/sweetalert2.min.css";

.page-body{
  padding: 1rem;
}
</style>
