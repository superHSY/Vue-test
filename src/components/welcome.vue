<template>
	<div>
		<el-card class="box-card">
				<div slot="header" class="clearfix">
				<span>任务中心</span>
				<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
				</div>
				<div v-for="o in 4" :key="o" class="text item">
					{{'列表内容 ' + o }}
				</div>
		</el-card>
		
		<div class="quan">
      		<div align="left" style="float:left" class="zuo" box-shadow>
				<div slot="header" class="clearfix">
				<span>任务中心</span>
				<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
				<el-divider></el-divider>
				</div>
			</div>
			<div align="right" style="float:right" class="you" box-shadow>
				<div slot="header" class="clearfix">
				<span>任务中心</span>
				<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
				<el-divider></el-divider>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="less" scoped>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
  .zuo{
	  height: 200px;
	  width: 850px;
	  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .quan {
	  padding-top: 20px;
  }
  .you {
	  height: 200px;
	  width: 400px;
	  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
	  }
</style>