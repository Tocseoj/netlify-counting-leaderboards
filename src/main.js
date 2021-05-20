import { createApp } from 'vue'
import App from './App.vue'

const app =  createApp(App)
// Automatically register components globally

const files = require.context('@/components/', true, /\.vue$/i)
files.keys().map((key) =>
  app.component(
    key
      .split('/')
      .pop()
      .split('.')[0],
    files(key).default
  )
)

app.mount('#app')
