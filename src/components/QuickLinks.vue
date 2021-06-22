<template>
  <div class="quick-links mb-4">
      <div class="container">
          <div class="row">
            <h2 class="h2-heading-white">Quick Links</h2>
            <router-link class="btn btn-primary mt-3" :to="{name:'Employee'}">Create an Employee</router-link>
            <router-link class="btn btn-primary mt-3" :to="{name:'Tasks'}">Create a Task</router-link> 
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>