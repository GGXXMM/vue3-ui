import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import Vue3UI from "@pc-vue3-ui/components"
import "@pc-vue3-ui/theme-chalk/src/index.css"

createApp(App).use(Vue3UI).mount("#app")
