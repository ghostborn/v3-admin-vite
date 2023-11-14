// core
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "@/router/permission"
import store from "@/store";

// load
import { loadPlugins } from './plugins'

//css
import 'element-plus/dist/index.css'

const app = createApp(App)

/** 加载插件 */
loadPlugins(app)

app.use(createPinia())
app.use(store).use(router)

router.isReady().then(()=>{
  app.mount("#app")
})
