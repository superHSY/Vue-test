<template>
	<div>
		<el-page-header @back="goBack" content="详情页面"></el-page-header>
		<el-row :gutter="12" type="flex">
		<el-col :span="8">
    		<el-card shadow="hover">
      		<div>
      		<div align="left" style="float:left">左button</div>
       		<div align="right">右button</div>
			</div>
			<div>3</div>
    		</el-card>
  		</el-col>
		<el-col :span="8">
    		<el-card shadow="hover">
      		<div>
      		<div align="left" style="float:left">左button</div>
       		<div align="right">右button</div>
			</div>
			<div>3</div>
    		</el-card>
  		</el-col>
		<el-col :span="8">
    		<el-card shadow="hover">
      		<div>
      		<div align="left" style="float:left">左button</div>
       		<div align="right">右button</div>
			</div>
			<div>3</div>
    		</el-card>
  		</el-col>
		<el-col :span="8">
    		<el-card shadow="hover">
      		<div>
      		<div align="left" style="float:left">左button</div>
       		<div align="right">右button</div>
			</div>
			<div>3</div>
    		</el-card>
  		</el-col>
		  <el-col :span="8">
    		<el-card shadow="hover">
      		<div>
      		<div align="left" style="float:left">左button</div>
       		<div align="right">右button</div>
			</div>
			<div>3</div>
    		</el-card>
  		</el-col>
		  <el-col :span="8">
    		<el-card shadow="hover">
      		<div>
      		<div align="left" style="float:left">左button</div>
       		<div align="right">右button</div>
			</div>
			<div>3</div>
    		</el-card>
  		</el-col>
		  <el-col :span="8">
    		<el-card shadow="hover">
      		<div>
      		<div align="left" style="float:left">左button</div>
       		<div align="right">右button</div>
			</div>
			<div>3</div>
    		</el-card>
  		</el-col>
		  <el-col :span="8">
    		<el-card shadow="hover">
      		<div>
      		<div align="left" style="float:left">左button</div>
       		<div align="right">右button</div>
			</div>
			<div>3</div>
    		</el-card>
  		</el-col>
		  <el-col :span="8">
    		<el-card shadow="hover">
      		<div>
      		<div align="left" style="float:left">左button</div>
       		<div align="right">右button</div>
			</div>
			<div>3</div>
    		</el-card>
  		</el-col>
		  <el-col :span="8">
    		<el-card shadow="hover">
      		<div>
      		<div align="left" style="float:left">左button</div>
       		<div align="right">右button</div>
			</div>
			<div>3</div>
    		</el-card>
  		</el-col>
		</el-row>
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
.clo {
	text-align: center;
}
.el-page-header {
	padding-bottom: 20px;
}
.el-row{
	flex-wrap:wrap;
}
.el-col {
	padding-bottom: 10px;
}

</style>