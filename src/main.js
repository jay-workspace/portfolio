import { createApp } from 'vue'
import App from './App.vue'
import {
  NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NLayoutFooter,
  NAvatar, NGradientText, NMenu, NIcon, NTimeline, NTimelineItem,
  NCard
} from 'naive-ui'

const app = createApp(App)

app.component('n-layout', NLayout)
app.component('n-layout-sider', NLayoutSider)
app.component('n-layout-header', NLayoutHeader)
app.component('n-layout-content', NLayoutContent)
app.component('n-layout-footer', NLayoutFooter)
app.component('n-avatar', NAvatar)
app.component('n-gradient-text', NGradientText)
app.component('n-menu', NMenu)
app.component('n-icon', NIcon)
app.component('n-timeline', NTimeline)
app.component('n-timeline-item', NTimelineItem)
app.component('n-card', NCard)

app.mount('#app')
