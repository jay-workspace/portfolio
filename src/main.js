import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

console.log('Starting Vue app...')
try {
  const app = createApp(App)
  console.log('Vue app created successfully')
  app.mount('#app')
  console.log('Vue app mounted successfully')
} catch (error) {
  console.error('Error creating/mounting Vue app:', error)
}
