<template>
  <div class="home">
    <div class="container">
      <div class="card">
       <div class="card-body">
         <div class="row">
           <div class="col">
             <CreateTask/>
           </div>
           <div class="col">
             <h2>The</h2>
           </div>
         </div>
          
       </div>
     </div>
    </div>
     
  </div>
</template>

<script>
// @ is an alias to /src
 
import CreateTask from '../components/CreateTask'
export default {
  components:{CreateTask},
  name: 'Home',
  
}
</script>
