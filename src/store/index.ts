import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import AuthModule from "@/store/modules/AuthModule";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

config.rawError = true;

const store = createStore({
  modules: {
    AuthModule,
  },
});

export default store;
