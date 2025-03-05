import { createApp } from 'vue'

import App from './App.vue'
import PersonalProfile from './components/PersonalProfile.vue'
import Comments from './components/Comments.vue'

const app = createApp(App)
app.component('PersonalProfile', PersonalProfile)
app.component('Comments', Comments)
app.mount('#app')