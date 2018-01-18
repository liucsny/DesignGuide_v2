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
