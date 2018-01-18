<template>
  <div class="view">
    <exampleNav></exampleNav>
    <exampleSideBar></exampleSideBar>
  </div>
</template>

<script>
import exampleNav from "@/components/exampleNav.vue";
import exampleSideBar from "@/components/exampleSideBar.vue";

export default{
  components:{
    "exampleNav":exampleNav,
    "exampleSideBar":exampleSideBar
  }
}

</script>

<style media="screen" scoped>
</style>
