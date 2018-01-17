<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="container flex-container">
      <side-bar></side-bar>
      <transition name="page" mode="out-in" appear>  
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue"

export default {
  name: 'app',
  components:{
    "nav-bar":NavBar,
    "side-bar":SideBar
  }
}
</script>

<style>
.page-enter{
  opacity: 0;
  transform: translate(0,-10px);
}
.page-enter-active{
  transition: opacity .5s,transform .5s;
}
.page-leave{
}
.page-leave-active{
  opacity: 0;
  transition: opacity .4s;
}

body{
  margin: 0;
  background-color: #fafafa;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*大屏*/
@media screen and (min-width:480px) {
  .container{
    max-width: 1000px;
    margin: 0 auto;
  } 
  .pageContainer{
    max-width: 760px;
    margin: 0 auto;
    /*background-color: #FF8000;*/
    text-align: left;
  }
  .page{
    flex-grow:1;
    height: 100%;
  }
  .flex-container{
    display: flex;
  }
}

h1{
  font-family: "Helvetica", sans-serif;
  color: #4C4C4C;
}
h2,h3{
  font-weight: 800;
  font-family: "Helvetica", sans-serif;
  color: #4C4C4C;
}

h4{
  font-family: "Helvetica", sans-serif;
  color: #666666;
}

p{
  font-family: "Helvetica", sans-serif;
  color: #666666;
}

a{
  text-decoration: none;
  color:#507eff;
}
a:hover{
  color:#0000FF;
}


</style>
