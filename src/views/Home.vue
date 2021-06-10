<template>
  <div class="home">
    <div class="container">
      <div class="row mb-4">
        <div class="col">
          <Statistics/>
        </div>
        <div class="col">
          <EmployeeList/>
        </div>
      </div>
        <div class="row">
          <div class="col">
            <TotalTickets/>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import CreateTask from '../components/CreateTask'
import TotalTickets from '../components/TotalTickets'
import Statistics from '../components/Statistics'
import EmployeeList from '../components/EmployeeList'
export default {
  components:{CreateTask, TotalTickets, Statistics, EmployeeList},
  name: 'Home',
  
}
</script>
