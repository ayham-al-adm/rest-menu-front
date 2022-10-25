import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/main.css";
import ApiService from "./services/ApiService";

const app = createApp(App);

app.use(router);
app.use(store);
ApiService.init(app);

app.mount("#app");