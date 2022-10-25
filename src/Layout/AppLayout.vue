<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
    style="width: 280px"
  >
    <a href="/" class="text-center">
      <span class="fs-4">REST-MENU</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <RouterLink
          to="/"
          class="nav-link text-white"
          aria-current="page"
          >Home</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          to="/categories/create"
          class="nav-link text-white"
          aria-current="page"
          >Create category</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink to="/about" class="nav-link text-white" aria-current="page"
          >About</RouterLink
        >
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <a
        href="#"
        class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          :src="
            user.image ||
            'http://www.sfu.ca/~cqt/IAT352/a4/img/avatars/test-user.png'
          "
          alt=""
          width="32"
          height="32"
          class="rounded-circle me-2"
        />
        <strong>{{ user.name }}</strong>
      </a>
      <ul
        class="dropdown-menu dropdown-menu-dark text-small shadow"
        aria-labelledby="dropdownUser1"
      >
        <li>
          <RouterLink to="/profile" class="nav-link px-3">Profile</RouterLink>
        </li>
        <li>
          <RouterLink to="/logout" class="nav-link px-3">Logout</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { RouterLink, useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

onMounted(() => {
  console.log("MOUNTED");
  if (!store.getters.isUserAuthenticated) {
    console.log("NOT AUTH");
    router.push({ name: "signup-page" });
  }
});

const user = computed(() => {
  return store.getters.currentUser;
});
</script>

<style scoped></style>
