import Vue from 'vue'
import VuetifyDialog from 'vuetify-dialog'
import Router from 'vue-router'
import home from '@/components/Home'
import product from '@/components/Product/List'
import blog from '@/components/blog'
import service from '@/components/service'
import contact from '@/components/contact'
import detail from '@/components/Product/Detail'
import edit from '@/components/Product/Edit'
import edit2 from '@/components/Product/Edit2'
import clickme from '@/components/PleaseClickMe'
import alerts from '@/components/Alerts'
import buttons from '@/components/Buttons'
import calendars from '@/components/Calendars'

Vue.use(Router)
Vue.use(VuetifyDialog)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/detail/:Pid',
      name: 'detail',
      component: detail
    },
    {
      path: '/edit/:Pid',
      name: 'edit',
      component: edit
    },
    {
      path: '/edit2',
      name: 'edit2',
      component: edit2
    },
    {
      path: '/ClickMe',
      name: 'clickme',
      component: clickme
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: alerts
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: buttons
    },
    {
      path: '/calendars',
      name: 'calendars',
      component: calendars
    },
    {
      path: '/product',
      name: 'product',
      component: product,
      childrent: [
        
      ]
    }
  ]
})