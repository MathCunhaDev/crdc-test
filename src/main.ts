
import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/reset.scss'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const app = createApp(App)

app.use(Quasar, {
  plugins: { Notify },
  config: {
    notify: {
      position: 'top-right',
      timeout: 2000,
      textColor: 'white',
      actions: [{ icon: 'close', color: 'white' }]
    }
  }
})

app.use(router)
app.use(store)

app.mount('#app')
