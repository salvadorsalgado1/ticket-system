<template>
    <div class="employee-list mt-3">
         
        <div class="card">
            <div class="card-header">
                Users
            </div>
            <div class="card-body">
                <table class="table table-bordered  ">
            <thead>
                <tr class="table-secondary">
                    <th>Role</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, id) in getUsers" :key="id">
                    <td><img class="img-users mt-2" :src='"@/assets/icons/" + user.positionImg + ".jpg"' alt=""></td>
                    <td>{{user.firstName}}</td>
                    <td><small class="text-muted">{{user.position}}</small> </td>
                    <td>{{user.user_id}}  </td>
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
            users:null,
        }
    },
    mounted(){
    
    this.$store.dispatch('getUsers');
    },
    computed:{
        getUsers(){
            let users = this.$store.state.users;
            return users;
        }
    }
}
</script>

<style>
.name-position{
    font-size:1.4em;
}
.employee-list{
     
    
    color:gray;
}
  .list-group-users{
     color:red;
 }

.img-users{
   height:5em;
 
  
    
}
 
</style>