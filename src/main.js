// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // tambahkan ini

createApp(App)
  .use(router)                // tambahkan ini
  .mount('#app')

