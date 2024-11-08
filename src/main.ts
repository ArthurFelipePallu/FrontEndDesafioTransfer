import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const MyGlobalVariable ={
  data(){
    return {
      base_url: "https://8bf5656a-59c7-481c-b829-805269eb65d9.mock.pstmn.io",
      //isModalOpen: false,
    }
  }
}

const app = createApp(App)
app.mixin(MyGlobalVariable)

app.use(createPinia())
app.use(router)

app.mount('#app')
