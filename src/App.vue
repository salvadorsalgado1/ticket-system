<template>
  <div id="app" class="mt-3">
    <div class="container-fluid">
      <div class="row">
        <div v-if="this.$route.name !== 'Landing'" class=" col-md-3 col-lg-2 col-sm-5 col-xs-12">
          <h1 class="route-name-heading">{{getRouteName}}</h1>
          <img class="img-fluid img-logo" src="@/assets/logos/logo_transparent.png" alt="" />
          <ListNav/>
          <QuickLinks/>
        </div> 
        
        <div class="col">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ListNav from './components/ListNav'
import QuickLinks from './components/QuickLinks'
export default {
components:{ListNav, QuickLinks},
computed:{
  getRouteName(){
    return this.$route.name;
  }
}
}
</script>
<style>
.img-logo{
  width:70%;
}
.route-name-heading{
  font-size:1.4em;
  color:white;
  font-family: Arial, Helvetica, sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
   background: url('./assets/backgrounds/forest-1.jpg') no-repeat center center fixed; 
 -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.h1-heading{
  font-size:2em;
}

.h2-heading{
  font-size:1.8em;
}

.h1-heading-white, .h2-heading-white{
  color:white;
  
}

 
</style>
