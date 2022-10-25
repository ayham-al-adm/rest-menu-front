<template>
  <section class="vh-100 vw-100" style="background-color: #eee">
    <div class="container form-container">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>

                  <form class="mx-1 mx-md-4">
                    <div
                      v-if="!isLoginMode"
                      class="d-flex flex-row align-items-center mb-4"
                    >
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="form3Example1c"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example1c"
                          >Your Name</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="email"
                          id="form3Example3c"
                          class="form-control"
                          v-model="email"
                        />
                        <label class="form-label" for="form3Example3c"
                          >Your Email</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4c"
                          class="form-control"
                          v-model="password"
                        />
                        <label class="form-label" for="form3Example4c"
                          >Password</label
                        >
                      </div>
                    </div>

                    <div
                      v-if="!isLoginMode"
                      class="d-flex flex-row align-items-center mb-4"
                    >
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4cd"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example4cd"
                          >Repeat your password</label
                        >
                      </div>
                    </div>

                    <div
                      v-if="!isLoginMode"
                      class="form-check d-flex justify-content-center mb-5"
                    >
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3c"
                      />
                      <label class="form-check-label" for="form2Example3">
                        I agree all statements in
                        <a href="#!">Terms of service</a>
                      </label>
                    </div>

                    <div
                      class="d-flex flex-column justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <button
                        type="button"
                        class="btn btn-primary btn-lg"
                        @click="submitForm"
                      >
                        {{ isLoginMode ? "Login" : "Register" }}
                      </button>

                      <a v-if="!isLoginMode" href="#" @click="switchToLoginMode"
                        >If you have an account click here to login</a
                      >
                    </div>
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Actions } from "@/store/enums/StoreEnums";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

const isLoginMode = ref(true);
const email = ref("");
const password = ref("");

const store = useStore();
const router = useRouter();

async function submitForm() {
  if (isLoginMode) {
    // TODO: validate data
    // Send login request
    try {
      await store.dispatch(Actions.LOGIN, {
        email: email.value,
        password: password.value,
      });
      const [errorName] = Object.keys(store.getters.getErrors);
      const error = store.getters.getErrors[errorName];

      if (!error) {
        Swal.fire({
          text: "You have successfully logged in!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          customClass: {
            confirmButton: "btn fw-bold btn-light-primary",
          },
        }).then(function () {
          // Go to page after successfully login
          router.push({ name: "home" });
        });
      } else {
        Swal.fire({
          text: "Failed Login, try again!",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          customClass: {
            confirmButton: "btn fw-bold btn-light-danger",
          },
        });
      }
    } catch (e: any) {
      Swal.fire({
        text: e.message,
        icon: "error",
        buttonsStyling: false,
        confirmButtonText: "Try again!",
        customClass: {
          confirmButton: "btn fw-bold btn-light-danger",
        },
      });
    }
  } else {
    // TODO: handle register right over here, after validate the inputs data
  }
}
const switchToLoginMode = () => {
  isLoginMode.value = true;
};
</script>

<style scoped>
.form-container {
  top: 50%;
  transform: translateY(-50%);
}
</style>
