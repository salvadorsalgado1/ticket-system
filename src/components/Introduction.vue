<template>
    <div class="introduction text-md-start">
        <div class="row  mt-4">
            <h1 class="intro-heading-h1">Welcome<br/>to <span class="intro-heading-h1-color">Ticketz</span></h1>
            <p class="intro-heading-p">We provide solutions so you don't <br/>have to look them up.</p>   
            
        </div>
        <router-link class="btn btn-primary " :to="{name:'Home'}">Get Started</router-link>
        <router-link class="btn btn-primary" :to="{name:'About'}">What Sets Us Apart</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.intro-heading-h1{
    font-size:4.4em;
    color:white;
}
.intro-heading-p{
    font-size:2em;
    color:white;
}
.intro-heading-h1-color{
    color:rgb(142, 193, 252);
}
</style>