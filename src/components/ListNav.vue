<template>
  <div class="list-group mt-4" >
     
    <p></p>
    <router-link class="list-group-item list-group-item-action" :to="{name:'Home'}">Home</router-link>
    <router-link class="list-group-item list-group-item-action" :to="{name:'About'}">About</router-link>
    <router-link class="list-group-item list-group-item-action" :to="{name:'Employee'}">Create an Employee</router-link>
    <router-link class="list-group-item list-group-item-action" :to="{name:'Tasks'}">Create a Task</router-link>

    
    <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
    <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  </div>
  
</template>

<script>
export default {
 
}
</script>

<style>

</style>