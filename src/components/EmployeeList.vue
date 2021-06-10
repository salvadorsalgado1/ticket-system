<template>
  <div class="employee-list">
      <div v-for="(user, id) in this.users" :key="id" class="card mb-1">
          <div class="card-body">
                <div class="row">
                    <div class="col"><img class="rounded img-users" :src='"@/assets/icons/" + user.positionImg + ".jpg"'/>
                    <br/>{{user.user_id}}</div>
                    <div class="col"><p class="name-position">  {{user.firstName}} <br/><em>{{user.position}}</em></p></div>
                </div>
          </div>
      </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            users:null,
            

        }
    },
    mounted(){
        axios.get('http://localhost:5000/api/users/')
        .then(response=>{
        console.log(response.data);
        this.users = response.data;
        
      })
      
    },
    computed:{
         
    }
}
</script>

<style>
.name-position{
    font-size:1.4em;
}
.employee-list{
    overflow-y: scroll;
    height:15em;
    color:gray;
}
.img-users{
    width:35%;
}
 
</style>