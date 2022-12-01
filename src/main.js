import { createApp } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

createApp(App)
	.use(store)
	.use(router)
	.use(useVuelidate)
	.mount('#app')

