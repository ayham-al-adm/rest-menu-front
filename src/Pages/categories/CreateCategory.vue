<template>
  <div class="page-body">
    <h1 class="h3">Create category page</h1>
    <hr />
    <div>
      <form @submit="onSubmit" v-if="show">
        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="form-control"
            />
            <label class="form-label" for="name">Category Name</label>
          </div>
        </div>

        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <!-- TODO: implement select2tree -->
            <select
              type="text"
              id="patent_id"
              v-model="form.parent_id"
              class="form-control"
            >
              <option
                v-for="cat in categories"
                :key="cat.value"
                :value="cat.value"
              >
                {{ cat.text }}
              </option>
            </select>
            <label class="form-label" for="patent_id">Base Category</label>
          </div>
        </div>

        <button type="button" class="btn btn-primary mx-1" @click="onSubmit">
          Submit
        </button>
        <button type="button" class="btn btn-warning mx-1">Reset</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO: use element-plus for forms
import ApiService from "@/services/ApiService";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { AxiosRequestConfig } from "axios";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

const form = ref({
  name: "",
  parent_id: "not-selected",
});

const categories = ref([
  { text: "Select One (Optional)", value: "not-selected" },
]);
const show = ref(true);

onMounted(() => {
  ApiService.get("/categories")
    .then((res) => {
      console.log(res.data.data);
      for (let i = 0; i < res.data.data.length; i++) {
        categories.value.push({
          text: res.data.data[i].name,
          value: res.data.data[i].id,
        });
      }
    })
    .catch((e) => {
      Swal.fire({
        text: "Sorry, error happened while fetching categories",
        icon: "error",
        buttonsStyling: false,
        confirmButtonText: "Ok!",
        customClass: {
          confirmButton: "btn fw-bold btn-light-danger",
        },
      });
    });
});

function onSubmit(event) {
  event.preventDefault();
  // TODO: validate input data
  const name = form.value.name;
  let parentId: String | null = form.value.parent_id;
  if (form.value.parent_id === "not-selected") {
    parentId = null;
  }

  ApiService.post("categories", {
    name: name,
    parent_id: parentId,
  } as AxiosRequestConfig)
    .then((res) => {
      // TODO: abstract alert as a separated component
      Swal.fire({
        text: "Success, your category added!",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Ok!",
        customClass: {
          confirmButton: "btn fw-bold btn-light-primary",
        },
      });
    })
    .catch((e) => {
      console.log("ERR", e);
      Swal.fire({
        text: "Sorry, error happened while adding your category",
        icon: "error",
        buttonsStyling: false,
        confirmButtonText: "Ok!",
        customClass: {
          confirmButton: "btn fw-bold btn-light-danger",
        },
      });
    });
}
</script>

<style></style>
