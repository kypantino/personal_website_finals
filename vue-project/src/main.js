import { createApp } from 'vue'

import App from './App.vue'
import PersonalProfile from './components/PersonalProfile.vue'


const app = createApp(App)
app.component('PersonalProfile', PersonalProfile)
app.mount('#app')