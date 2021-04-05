<template>
  <div>
    <el-page-header @back="goBack" content="详情页面"></el-page-header>
		<el-card shadow="hover">
		<el-row :gutter="20" >
			<el-col :span="6"><div class="grid-content bg-purple">123</div></el-col>
			<el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
			<el-row :gutter="20">
			<el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
			<el-row :gutter="20">
			<el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
			<el-row :gutter="20">
			<el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
		</el-card>
		<div class="box">132</div>
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
.el-card {
	margin-top: 20px;
}
.el-row {
	padding-top: 20px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    font-size: 20px;
    text-align: center;
    line-height: 35px;
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .box {
    margin-top: 20px;
	  width: 100%;
	  height: 200px;
  }
</style>
