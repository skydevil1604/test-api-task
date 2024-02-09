import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'

const app = createApp(App)

app
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .mount('#app')
