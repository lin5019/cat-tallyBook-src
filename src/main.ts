import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import tagsListModel from '@/model/tagsListModel';

Vue.config.productionTip = false

Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)

window.tagList =tagsListModel.fetch();
window.createTag=(name)=>{
  const message = tagsListModel.create(name);
    if(message==='repetition'){
      window.alert('不可以添加重复标签')
    }else {
      window.alert('添加成功')
    }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
