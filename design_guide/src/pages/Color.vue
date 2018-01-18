<template>
	<div class="page">
		<div class="pageContainer">
			<h1>色彩</h1>
			<p>色彩系统包括深蓝色系，蓝灰色系，可视化色系。<br/>深蓝色系主要用于界面主体，卡片，选项UI；蓝灰色系主要用于文件/数据管理；可视化色系用于图表。</p>
      <br/>
			<h2>深蓝色系</h2>
      <div class="background">
        <div class="card" v-for="n in 4">
					<p class="title">卡片示例 - {{n}}</p>
					<div class="chart">

					</div>
        </div>
      </div>
				<!-- <p><router-link tag="a" active-class="active" to="/Example" exact>示例</router-link></p> -->
    </div>
	</div>
</template>

<script>
export default{

}
</script>

<style media="screen" scoped>

.background{
    background-color: #16202F;
    padding: 60px 40px;
		display: flex;
		flex-wrap: wrap;
}

.card{
	box-sizing: border-box;
  width: 320px;
  background-color: #212E44;
  box-shadow: 0px 4px 10px 0.5px rgba(0,0,0,0.3);
	padding: 24px 32px;
	margin: 10px;
}

.card .title{
	color : #C8D3DE;
	font-size: 14px;
	font-weight: 800;
	margin: 0px;
}
.card .chart{
	height : 200px;
}

.card:hover{
  cursor: pointer;
  box-shadow: 0px 4px 20px 0.7px rgba(0,0,0,0.8);
}
</style>
