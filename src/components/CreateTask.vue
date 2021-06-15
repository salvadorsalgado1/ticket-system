<template>
  <div class="create-task">
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="createTask()">
        <div class="form-group">
          <label for="formGroupExampleInput">Example label</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" v-model="taskTitle">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Priority</label>
          <select class="form-select" aria-label="Default select example" v-model="urgency">
            <option selected>Open this select menu</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Assigned to:</label>
         <select class="form-select" aria-label="Default select example" v-model="assigned">
          <option selected>Open this select menu</option>
            <option v-for="(user, index) in getUsers" 
            :key="index" :value="user.user_id">{{user.firstName}}</option>
             
       <!--   <option value="valerie">Valerie</option>
          <option value="veronica">Veronica</option>-->
        </select>
        </div>
        <div class="form-group mt-3">
          <div class="input-group">
          <span class="input-group-text">Description</span>
          <textarea class="form-control" aria-label="With textarea" v-model="description"></textarea>
          </div>
        </div>
      
        <button class="btn btn-primary mt-4">Create</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      taskTitle:null,
      urgency:null,
      assigned:null,
      description:null,
      alphabet:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
     
    }
  },
  mounted(){
    this.$store.dispatch('getUsers');
  },
  computed:{
    getUsers(){
      let users = this.$store.state.users;
      return users;
    }
  },
methods:{
  createTask(){
      let first = Math.floor(Math.random() * 250)+1;
      let letter = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
      let id;
      switch(this.urgency){
        case 'low': id = `A-${first}${letter}`
        break;
        case 'medium': id = `B-${first}${letter}`
        break;
        case 'high': id = `C-${first}${letter}`
        break;
      }
      

  
      axios.post('http://localhost:5000/api/tasks/create', {
        id:id,
        taskTitle:this.taskTitle,
        urgency:this.urgency,
        assigned:this.assigned,
        description:this.description
      })
      this.taskTitle = null;
      this.urgency = null;
      this.assigned = null;
      this.description = null;

      console.log(this.taskTitle, this.assigned, id, this.description); 

      
    },
}
}
</script>

<style>

</style>