import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
export default new Vuex.Store({
  state: {
    users:[],
    tasks:[]
    
  },
  mutations: {
    getUsers(state, payload){
      state.users = payload;
    },
    getTasks(state, payload){
      state.tasks = payload;
    }
  },
  actions: {
    getUsers({commit}){
      axios.get('http://localhost:5000/api/users')
      .then(response=>{
        commit('getUsers', response.data);
      })
    },
    getTasks({commit}){
      axios.get('http://localhost:5000/api/tasks')
      .then(response=>{
        commit('getTasks', response.data);
      })
    }
    
  },
  modules: {
  }
})
