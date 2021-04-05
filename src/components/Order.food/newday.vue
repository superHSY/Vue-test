<template>
	<div>
		<el-page-header @back="goBack" content="点菜主页面"></el-page-header>
		<template>
  			<el-carousel :interval="5000" type="card" height="200px">
    		<el-carousel-item v-for="item in 6" :key="item">
      		<h3 class="medium">{{ item }}</h3>
    		</el-carousel-item>
  			</el-carousel>
		</template>
		
		<el-card>
			<div class="center">
				<div class="left">
					
				</div>
				<div class="right">
					<div class="left_top">
						餐厅主要由三个部分组成：外卖小酒馆，有机食品商店，餐厅。设计主要的任务
是在这个半地下空间中巧妙的安置以上三个功能。外卖酒吧位于餐厅的边角，低矮
的餐厅榻榻米包间上方。商店在餐厅的中间，下方是厨房
					</div>
				</div>
			</div>
		</el-card>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods: {
		goBack() {
			this.$router.push('/welcome')
		}
	}
}
</script>

<style lang="less" scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background:url("./image/55555555.png");
	background-size:50% 100% ;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background:url("./image/55555555.png");
	background-size:50% 100% ;
  }
  .el-page-header{
	  margin-bottom: 20px;
  }
  .left {
	  top: 30px;
	  right: 650px;;
	  position: absolute;
	  height: 200px;
	  width: 300px;
	  background: url("./image/AD0I-vGBBxACGAAgoKaZzQUogeCVlQQw_gM4wwI.jpg1.webp");
	  background-size:100% 100%;  
	  z-index: 1;
  }
  .right {
	  top: 100px;
	  right: 300px;
	  position: absolute;
	  height: 50%;
	  width: 400px;
	  background:url("./image/AD0I-vGBBxAEGAAgmqaZzQUo08u7uwUwlgc4mQM.png.webp");
  }
  .center {
	  position: relative;
	  background: url("./image/AD0I_9_EBhACGAAglbWXywUovteX3wUwgA84uQU.jpg");
	  background-size:100% 100%;  
	  height: 400px;
	  width: 100%;
  }
  .left_top {
	  color: #fff;
	  font-size: 18px;
	  top: 20px;
	  left: 50px;
	  position: absolute;
	  height: 100%;
	  width: 350px;
	  line-height: 30px;
  }
</style>