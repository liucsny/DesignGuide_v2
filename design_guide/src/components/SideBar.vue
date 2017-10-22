<template>
	<div id="sidebar">
		<ul class="mainList">
			<li>Datamap设计规范</li>
			<li>VI规范</li>
			<li>界面设计规范</li>
			<ul class="subList">
				<li>界面布局</li>
				<li>色彩使用</li>
				<li>组件</li>
			</ul>
		</ul>
	</div>
</template>

<script>
export default{
	created:function(){
		window.addEventListener('scroll', function(){
			let mainList = document.getElementsByClassName('mainList')[0];
			console.log(pageYOffset + 'px');
			if (pageYOffset>80 && !mainList.classList.contains("fixedMainList")) {
				mainList.classList.add("fixedMainList");
			} else if(pageYOffset <= 80 && mainList.classList.contains("fixedMainList")) {
				mainList.classList.remove("fixedMainList");
			}
		})
	}
}
</script>

<style scoped>
.mainList{
	margin-left: 0;
	padding-left: 0;
}

.fixedMainList{
	position: fixed;
	margin-top: -60px;
}

.subList>li{
	font-weight: 400;
	color:#7F7F7F;
}

li{
	font-weight: 600;
	color:#7F7F7F;
	margin-left: 0;
	list-style-type: none;
	text-align: left;
	padding: 8px 0;
}
li:hover{
	cursor: pointer;
	color:#507eff;
}

#sidebar{
	padding-top: 6px;
	width: 220px;
	/*background-color: #66FFFF;*/
}
</style>