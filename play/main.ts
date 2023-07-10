import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import Vue3UI from "@vue3-ui/components"
import "@vue3-ui/theme-chalk/src/index.scss"

createApp(App).use(Vue3UI).mount("#app")
