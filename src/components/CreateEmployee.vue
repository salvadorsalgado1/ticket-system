<template>
  <div class="create-employee">
       <div class="card">
      <div class="card-body">
        <form @submit.prevent="createEmployee">
        <div class="form-group">
          <label for="formGroupExampleInput">Employee Name</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First Name" v-model="firstName">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Position</label>
          <select class="form-select" aria-label="Default select example" v-model="position">
            <option selected>Open this select menu</option>
            <option value="Senior">Senior Developer</option>
            <option value="Designer">Designer</option>
            <option value="Developer">Developer</option>
            <option value="Intern">Intern</option>
          </select>
        </div>
        <button class="mt-4 btn-primary btn">Create</button>
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
            firstName:null,
            empNumber:null,
            position:null,
            alphabet:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
    },
    
methods:{
    createEmployee(){
      console.log
      let first = Math.floor(Math.random() * 100)+1;
      let second = Math.floor(Math.random() * 200)+1;
      let letter = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
      console.log(letter);
      let id;
      switch(this.position){
        case 'Senior Developer': id = `A-${first}${second}${letter}`
        break;
        case 'Developer': id = `B-${first}${second}${letter}`
        break;
        case 'Designer': id = `C-${first}${second}${letter}`
        break;
        case 'Intern': id = `D-${first}${second}${letter}`
        break;
      }
      
      console.log(this.firstName, this.position, id);
      let positionImg = this.position.toLowerCase();
      axios.post('http://localhost:5000/api/users/create', {
        user_id:id,
        firstName:this.firstName,
        position:this.position,
        positionImg:positionImg

      })
    },
   
}
}
</script>

<style>

</style>