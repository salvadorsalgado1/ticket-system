<template>
  <div class="tasks">
      <div class="container">
        <h2>Create A Task</h2>
        <div class="row">
          <div class="col-5">

          <CreateTask/>
          </div>
        </div>
          
      </div>
      
  </div>
</template>

<script>
import CreateTask from '../components/CreateTask'
export default {
  components:{CreateTask },
}
</script>

<style>

</style>