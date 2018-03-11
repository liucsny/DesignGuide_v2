<template>
  <div id="app">
    <nav id="appNav"></nav>
    <div class="main">
      <div class="sideBar">
        <app-side-Item v-for="(item, index) in ContentList" :key="index" :model="item" :layer="1"></app-side-Item>      
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      ContentList:[
        { name:"Home" },
        { name:"VI Design" },
        {
          name:"Color Guide",
          children:[
              { 
                name:"Dialog",
                children:[
                  { name:"Home" },
                  { name:"Home2" },
                  { name:"Home3" },
                  { name:"Home4" },
                  { name:"Home5" },
                  { name:"Home6" },
                  { name:"Home7" },
                  { name:"Home8" },
                  { name:"Home9" },
                  { name:"Home10" },
                  { name:"Home" },
                  { name:"Home2" },
                  { name:"Home3" },
                  { name:"Home4" },
                  { name:"Home5" },
                  { name:"Home6" },
                  { name:"Home7" },
                  { name:"Home8" },
                  { name:"Home9" },
                  { name:"Home10" },
                ]
              },
            ]
        },
        {
          name:"Components",
          children:[
              { 
                name:"Dialog",
                children:[
                  { name:"Home" },
                  { name:"Home2" },
                  { name:"Home3" },
                ]
              },
            ]
        },
      ]
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  margin: 0;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#appNav{
  height: 56px;
	box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);
	background-color: #fff;
}

.main{
  display: flex;
  overflow: scroll;
}


</style>
