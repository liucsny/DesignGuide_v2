<template>
  <div id="app">
    <transition name="page" mode="out-in" appear>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
.page-enter{
  opacity: 0;
  transform: translate(0,-5px);
}
.page-enter-active{
  transition: opacity .3s,transform .3s;
}
.page-leave{
}
.page-leave-active{
  opacity: 0;
  transition: opacity .2s;
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
  font-family: "Helvetica", sans-serif;
  font-weight: 600;
  color:#507eff;
}
a:hover{
  color:#0000FF;
}


</style>
