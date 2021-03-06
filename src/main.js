import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
import about from './components/about.vue'
import home from './components/home.vue'
import news from './components/news.vue'
import message from './components/message.vue'
import messageDetail from './components/messageDetail.vue'
Vue.use(VueRouter)
 const router = new VueRouter({
   linkActiveClass: 'active',  // 配置样式
   mode: 'history', // 去掉#
    routes:[
      {path :'/',component:about},
      {path :'/about',component:about},
      {path :'/home',component:home,
        children:[
          {path : 'news' ,component:news},
          {path : 'message',component:message,
            children:[
              {path : 'mdetail/:id',component:messageDetail}
            ]
          }
        ]
      }
    ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
