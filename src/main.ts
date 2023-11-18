// core
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store";
import "@/router/permission"


// load
import { loadPlugins } from './plugins'

//css
import 'normalize.css'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'

const app = createApp(App)

/** 加载插件 */
loadPlugins(app)

app.use(store).use(router)

router.isReady().then(()=>{
  app.mount("#app")
})
