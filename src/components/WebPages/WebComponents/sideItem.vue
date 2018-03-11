<template>
    <ul>
        <div :class="{ firstLayer: isFirstLayer, folder: isFolder}" :style="{ paddingLeft: (layer-1)*20 + 30 + 'px' }" class="sideBar" @click="toggle">{{ model.name }}</div>
        <ul :class="{ folderOpen: open, folderClose: !open }" v-if="model.children">
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
      console.log(this.model.children)
//       console.log(this.isFolder) 
    }
}
</script>


<style scoped>
ul {
    /* list-style-type: none; */
    vertical-align: baseline;
    margin: 0;
    padding-left: 0;
    overflow: hidden;
}

.folderClose{
    max-height: 0;
    transition: max-height .8s ease-in-out;
}

.folderOpen{
    max-height: 600px;
    transition: max-height .8s ease-in-out;
}

.firstLayer{
    color: #1F89F2;
    padding-left: 30px !important;
}

.folder{
    display: flex;
}

.sideBar{
    /* border: #1F89F2 1px solid; */
    display: block;
    padding: 10px;
    cursor: pointer;
    width: 200px;
}

.sideBar:hover{
    background-color: rgb(240, 240, 240);
}

</style>