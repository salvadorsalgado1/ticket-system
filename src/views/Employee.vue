<template>
  <div class="employee">
      <h1>Create an Employee</h1>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <CreateEmployee/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import CreateEmployee from '../components/CreateEmployee'
export default {
    name:'Employee',
    components:{CreateEmployee}

}
</script>

<style>

</style>