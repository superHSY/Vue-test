<template>
	<div>
		<div style="position: relative; width: 170px; height: 89px;"> 
    		<img src="./image/first.png" width="500" height="100" alt=""> 
    		<span style="position: absolute; bottom: 0; left: 0;" class="order">点餐热门</span>
		</div>

		<div class="color" style="flex">
			<div class="brand">
				<div class="footer"></div>
				<div class="footer_buttom">
					xxx年餐饮行业经历了政策调整、O2O等互联网技术快速发展、消费者主体变化、餐厅结构整合、商圈转移等重大冲击。为了共同的理想和目标，这一年，xxx餐饮人比以往更加齐心协力，抱团取暖，在激烈的市场竞争中，彼此协作，共同进步。他们一直在努力，一直在坚持。xxx省餐饮业商会举办迎新联谊会，xxx餐饮业近千代表欢聚一堂，分析总结、交流研讨，载歌载舞，以餐饮人特别的方式，辞旧迎新。
				</div>
			</div>
			<div class="brand">
				<div class="footer"></div>
				<div class="footer_buttom">
					xxx年餐饮行业经历了政策调整、O2O等互联网技术快速发展、消费者主体变化、餐厅结构整合、商圈转移等重大冲击。为了共同的理想和目标，这一年，xxx餐饮人比以往更加齐心协力，抱团取暖，在激烈的市场竞争中，彼此协作，共同进步。他们一直在努力，一直在坚持。xxx省餐饮业商会举办迎新联谊会，xxx餐饮业近千代表欢聚一堂，分析总结、交流研讨，载歌载舞，以餐饮人特别的方式，辞旧迎新。
				</div>
			</div>
			<div class="brand">
				<div class="footer"></div>
				<div class="footer_buttom">
					xxx年餐饮行业经历了政策调整、O2O等互联网技术快速发展、消费者主体变化、餐厅结构整合、商圈转移等重大冲击。为了共同的理想和目标，这一年，xxx餐饮人比以往更加齐心协力，抱团取暖，在激烈的市场竞争中，彼此协作，共同进步。他们一直在努力，一直在坚持。xxx省餐饮业商会举办迎新联谊会，xxx餐饮业近千代表欢聚一堂，分析总结、交流研讨，载歌载舞，以餐饮人特别的方式，辞旧迎新。
				</div>
			</div>
			<div class="brand">
				<div class="footer"></div>
				<div class="footer_buttom">
					xxx年餐饮行业经历了政策调整、O2O等互联网技术快速发展、消费者主体变化、餐厅结构整合、商圈转移等重大冲击。为了共同的理想和目标，这一年，xxx餐饮人比以往更加齐心协力，抱团取暖，在激烈的市场竞争中，彼此协作，共同进步。他们一直在努力，一直在坚持。xxx省餐饮业商会举办迎新联谊会，xxx餐饮业近千代表欢聚一堂，分析总结、交流研讨，载歌载舞，以餐饮人特别的方式，辞旧迎新。
				</div>
			</div>
			<div class="brand">
				<div class="footer"></div>
				<div class="footer_buttom">
					xxx年餐饮行业经历了政策调整、O2O等互联网技术快速发展、消费者主体变化、餐厅结构整合、商圈转移等重大冲击。为了共同的理想和目标，这一年，xxx餐饮人比以往更加齐心协力，抱团取暖，在激烈的市场竞争中，彼此协作，共同进步。他们一直在努力，一直在坚持。xxx省餐饮业商会举办迎新联谊会，xxx餐饮业近千代表欢聚一堂，分析总结、交流研讨，载歌载舞，以餐饮人特别的方式，辞旧迎新。
				</div>
			</div>
			<div class="brand">
				<div class="footer"></div>
				<div class="footer_buttom">
					xxx年餐饮行业经历了政策调整、O2O等互联网技术快速发展、消费者主体变化、餐厅结构整合、商圈转移等重大冲击。为了共同的理想和目标，这一年，xxx餐饮人比以往更加齐心协力，抱团取暖，在激烈的市场竞争中，彼此协作，共同进步。他们一直在努力，一直在坚持。xxx省餐饮业商会举办迎新联谊会，xxx餐饮业近千代表欢聚一堂，分析总结、交流研讨，载歌载舞，以餐饮人特别的方式，辞旧迎新。
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods: {

	}
}
</script>

<style lang="less" scoped>
.order{
 font-family:'SimHei'; 
 font-size: 40px;
}
.color{
	margin-top: 27px;
	height: 500px;
	width: 100%;
	background-color: #fff;
}
.brand {
	overflow:hidden;
	position: relative;
	margin-top: 10px;
	margin-right: 15px;
	display: inline-block;
	background-color: rgb(65, 60, 60);
	height: 230px;
	width: 30%;
}
.footer {
	height: 170px;
	width: 100%;
	background: url("./image/1.jpg");
	position:absolute;
}
.footer_buttom {
	color: #cd8384;
	background-color: #fff;
	line-height: 30px;
	height: 230px;
	top: 170px;
	position: absolute;
	width: 100%;
	transition:top 1s;
	-webkit-transition:top 1s
}
.footer_buttom:hover {
	top: 0px;
}
</style>