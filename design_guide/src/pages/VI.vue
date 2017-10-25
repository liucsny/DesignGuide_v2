<template>
	<div class="page">
		<div class="pageContainer">
			<h1>脉策数据VI规范</h1>
			<p>主要用于公司／产品有关对外宣传物的设计与制作。</p>
			<br>
			<h2>公司VI</h2>
			<p>英文字体：<a href="https://baike.baidu.com/item/futura/2168196?fr=aladdin">Futura</a></p>
			<h4>公司全称 Logo：</h4>
			<div class="imgBox">
				<img class="fullLogo" src="../assets/fullLogo.svg" alt="fullLogo">
			</div>
			<h4>公司简称 Logo：</h4>
			<div class="flexBox imgFlexBox">
				<div class="imgBox short">
					<img class="shortLogo" src="../assets/shortLogo.svg" alt="fullLogo">
				</div>
				<div class="imgBox short">
					<img class="shortLogo" src="../assets/cityDataGroup.svg" alt="fullLogo">
				</div>
			</div>
			<div class="flexBox imgFlexBox">
				<div class="imgBox short green">
					<img class="shortLogo" src="../assets/shortLogoWhite.svg" alt="fullLogo">
				</div>
				<div class="imgBox short red">
					<img class="shortLogo" src="../assets/cityDataGroupWhite.svg" alt="fullLogo">
				</div>
			</div>
			<br>	
			<h2>产品VI</h2>
			<div class="imgBox">
				<img class="fullLogo" src="../assets/datamapFullLogo.svg" alt="fullLogo">
			</div>
			<div class="imgBox blue">
				<img class="fullLogo" src="../assets/datamapFullLogoWhite.svg" alt="fullLogo">
			</div>
			<div class="flexBox imgFlexBox">
				<div class="imgBox short">
					<img class="shortLogo" src="../assets/datamapShortLogo.svg" alt="fullLogo">
				</div>
				<div class="imgBox short blue">
					<img class="shortLogo" src="../assets/datamapShortLogoWhite.svg" alt="fullLogo">
				</div>
			</div>

			<h4>色彩：</h4>
			<div class="flexBox cardFlexBox">
				<div class="colorCard green">
					<p class="cardPara cardTitle">绿色</p>
					<div class="cardBottom">
						<p class="cardPara">#307A74</p>
						<p class="cardPara">RGB 48,122,116</p>
					</div>
				</div>
				<div class="colorCard red">
					<p class="cardPara cardTitle">红色</p>
					<div class="cardBottom">
						<p class="cardPara">#D93526</p>
						<p class="cardPara">RGB 217,53,38</p>
					</div>
				</div>
				<div class="colorCard blue">
					<p class="cardPara cardTitle">蓝色</p>
					<div class="cardBottom">
						<p class="cardPara">#507EFF</p>
						<p class="cardPara">RGB 80,126,255</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{

}	
</script>

<style scoped>
.imgBox{
	display: flex;
	height: 140px;
	justify-content:center;
	align-items:center;
	border: 1px solid #E6E6E6;
	border-radius: 2px;
	margin-bottom: 16px;
}

.short{
	width:49%;
}

.flexBox{
	display: flex;
	margin: 14px 0;
}
.imgFlexBox{
	justify-content: space-between;
}
.cardFlexBox{
	justify-content: flex-start;
}

.fullLogo{
	height: 64px;
}
.shortLogo{
	height: 46px;
}

.colorCard{
	box-sizing: border-box;
	position: relative;
	width: 160px;
	height: 220px;
	border-radius: 2px;
	margin-right: 24px;
	padding: 20px 20px;
}
.cardPara{
	color: white;
	opacity: .9;
	font-size: 14px;
	font-weight: 600;
	line-height: 6px;
}
.cardTitle{
	font-weight: 600;
	opacity: .96;
	font-size: 16px;
}
.cardBottom{
    opacity: 0.7;
    bottom: 15px;
    position: absolute;
}

.green{
	background-color: #317a74;
	border: none;
}
.red{
	background-color: #d93627;
	border: none;
}
.blue{
	background-color: #507eff;
	border: none;
}
</style>