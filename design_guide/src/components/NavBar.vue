<template>
	<nav>
		<div class="container navContainer">
			<div id="logoContainer">
				<router-link to="/"><img id="logo" src="../assets/logoblue.svg" alt=""></router-link>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>

nav{
	height: 64px;
	box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);
	margin-bottom: 24px;
	background-color: #fff;
	/*background-color: #E6E6E6;*/
}

.navContainer{
	height: inherit;
}

#logo{
	margin-top: 16px;
	height: 30px;
	float: left;
}
#logoContainer{
	height: inherit;
	float: left;
	margin-left: -12px;
}
#logoContainer:hover{
	cursor: pointer;
}
</style>

