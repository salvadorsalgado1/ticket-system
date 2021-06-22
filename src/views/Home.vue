<template>
  <div class="home">
    <div class="container">
      <div class="row mb-4">
        <div class="col-xlg-4 col-md-6 col-sm-12">
          <Statistics/>
        </div>
        <div class="col-xlg-4 col-md-6 col-sm-12">
          <QuickLinks/>
        </div>
          <div class="col-xlg-4 col-md-12 col-sm-12 mt-4">
            <TotalTickets/>
          </div>
      </div>
        <div class="row">
          <div class="col">
          <EmployeeList/>
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
import QuickLinks from '../components/QuickLinks'
export default {
  components:{CreateTask, TotalTickets, Statistics, EmployeeList, QuickLinks},
  name: 'Home',
  
}
</script>
