import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";
import App from "./App.vue";
import router from "./router";
import "./assets/index.css";
import './assets/boostrap.scss'
import "@ignt/vue-library/dist/style.css";


/* 核心 */
import { library } from '@fortawesome/fontawesome-svg-core'
/* 引用图标库 FontAwesome Icon*/
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* 引用图标 */
import { faCopy as farCopy } from '@fortawesome/free-regular-svg-icons' //常规
import { faCopy as fasCopy } from '@fortawesome/free-solid-svg-icons' //实体
import { faTwitter, faApple } from '@fortawesome/free-brands-svg-icons' //品牌
/* add icons to the library */
library.add(farCopy, fasCopy, faTwitter, faApple)



const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);
app.mount("#app");
