<template>
  <div class="total-tickets">
      <div class="card">
          <div class="card-header">
              Tasks
          </div>
          <div class="card-body">
              <table class="table table-bordered table-striped">
                  <thead>
                      <tr>
                          <th>Task ID</th>
                          <th>Title</th>
                          <th>Priority</th>
                          <th>Description</th>
                          <th>Primary Responsibilty</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(task, index) in getTasks" :key="index">
                          <td>{{task.task_id}}</td>
                          <td>{{task.task_title}}</td>
                          <td>{{task.priority}}</td>
                          <td>{{task.description}}</td>
                          <td>{{task.user_id}}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
</template>

<script>
 
export default {
data(){
    return{
        tasks:null
    }
},
computed:{
    getTasks(){
        let tasks = this.$store.state.tasks;

        return tasks;
    },
     
},
mounted(){

    this.$store.dispatch('getTasks');
    
    
}
}
</script>

<style>

</style>