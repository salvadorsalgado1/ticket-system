import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
export default new Vuex.Store({
  state: {
    users:null,
    
  },
  mutations: {
    getUsers(state, payload){
      state.users = payload
    }
  },
  actions: {
    getUsers({commit}){
      axios.get('http://localhost:5000/api/users')
      .then(response=>{
        commit('getUsers', response.data);
      })
    }
    
  },
  modules: {
  }
})
