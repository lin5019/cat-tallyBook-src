import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state: {
    count:0,
  },
  mutations: {
    increase(state,n){
      state.count +=n
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store