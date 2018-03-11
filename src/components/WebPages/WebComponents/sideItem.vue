<template>
    <ul>
        <div :class="{ firstLayer: isFirstLayer }" @click="toggle">{{ model.name }}</div>
        <ul :class="{ folderOpen: open, folderClose: !open }" >
                <app-side-Item  v-for=" (item, index) in model.children" :key="index" :model="item" :layer="layer+1"></app-side-Item>
        </ul>
    </ul>
</template>

<script>
export default {
  props:{
      model: Object,
      layer: Number,
  },
  data: function () {
    return {
      open: false,
    }
  },
  computed:{
      isFolder(){
        if(this.model.children && this.model.children.length){
            return true
        }else{
            return false
        }
      },
      isFirstLayer(){
          return this.layer === 1
      }
  },
  methods:{
      toggle(){
        if (this.isFolder) {
            this.open = !this.open
        }
      }
  },
  beforeMount(){
      console.log(this.layer)
//       console.log(this.isFolder) 
    }
}
</script>


<style scoped>
ul {
    /* list-style-type: none; */
    margin: 0;
    padding-left: 10px;
    overflow: hidden;
}

.folderClose{
    max-height: 0;
    transition: max-height .3s ease-in-out;
}

.folderOpen{
    max-height: 120px;  
    transition: max-height .3s ease-in-out;
}

.firstLayer{
  color:cadetblue;
  font-weight: bold;
}
</style>