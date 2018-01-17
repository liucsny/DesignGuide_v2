<template>
	<div id="sidebar">
		<ul class="mainList">
			<router-link tag="li" active-class="active" to="/" exact>Datamap设计规范</router-link>
			<router-link tag="li" active-class="active" to="/vi" exact>VI规范</router-link>
			<li>界面设计规范</li>
			<ul class="subList">
				<li>界面布局</li>
				<router-link tag="li" active-class="active" to="/Color" exact>色彩使用</router-link>
				<li>组件</li>
			</ul>
		</ul>
		<!-- <button @click="showRouter">para</button> -->
	</div>
</template>

<script>
export default{
	data:function(){
		return{
			id: this.$route.params.id,
		}
	},
	created:function(){
		window.addEventListener('scroll', function(){
			let mainList = document.getElementsByClassName('mainList')[0];
			// console.log(pageYOffset + 'px');
			if (pageYOffset>80 && !mainList.classList.contains("fixedMainList")) {
				mainList.classList.add("fixedMainList");
			} else if(pageYOffset <= 80 && mainList.classList.contains("fixedMainList")) {
				mainList.classList.remove("fixedMainList");
			}
		})
	},
	methods:{
		// showRouter:function() {
		// 	console.log(this.$route.params);
		// }
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
	margin-top: -66px;
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
.active{
	color:#507eff;
}

#sidebar{
	padding-top: 6px;
	width: 220px;
	/*background-color: #66FFFF;*/
}
</style>
