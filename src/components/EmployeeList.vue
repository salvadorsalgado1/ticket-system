<template>
  <div class="employee-list">
    <div class="overlfow-auto  ">
        <div v-for="(user, id) in getUsers" :key="id" class="card mb-3 col-3" style="max-width: 50%;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img class="img-userss mt-2 w-100 p-3 " :src='"@/assets/icons/" + user.positionImg + ".jpg"' alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">             
                        <p class="card-text name-position">{{user.user_id}} </p>
                        <p class="card-text "><small class="text-muted">{{user.position}}</small></p>
                    </div>
                </div>
            </div>
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
.img-users{
   width:50%;
    
}
 
</style>