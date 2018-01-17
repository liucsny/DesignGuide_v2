<template>
	<div class="page">
		<div class="pageContainer">
			<h1>色彩</h1>
			<p>色彩系统包括深蓝色系，蓝灰色系，可视化色系。<br/>深蓝色系主要用于界面主体，卡片，选项UI；蓝灰色系主要用于文件/数据管理；可视化色系用于图表</p>
    </div>
    <div class="background">
      <div class="card">
      </div>
    </div>
	</div>
</template>

<script>
export default{

}
</script>

<style media="screen" scoped>

.background{
    background-color: #141523;
    padding: 40px;
}

.card{
  width: 320px;
  height: 200px;
  background-color: #25283E;
  box-shadow: 0px 4px 10px 0.5px rgba(0,0,0,0.3);
}

</style>
