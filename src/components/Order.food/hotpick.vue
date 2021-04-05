<template>
	<div>
	<el-breadcrumb separator-class="el-icon-arrow-right">
		<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		<el-breadcrumb-item>今日热选</el-breadcrumb-item>
		<el-breadcrumb-item>昔日菜品</el-breadcrumb-item>
		<el-breadcrumb-item>热门点餐</el-breadcrumb-item>
	</el-breadcrumb>
	<div class="Box">
		<div class="big_box"></div>
		<div class="big_box1"></div>
		<div class="big_box2"></div>
		<div class="big_box3"></div>
		<div class="big_box4"></div>
	</div>

	<el-card>
	  <el-row :gutter="40">
		<el-col :span="8">
			<el-input placeholder="请输入内容" v-model="search">
				<el-button slot="append" icon="el-icon-search"  @click="btn">
				</el-button>
			</el-input>
		</el-col>
		<el-col :span="4">
			<el-button type="primary" @click="diog = true">添加按钮</el-button>
		</el-col>
	  </el-row>

	  <el-table :data="foodlist" stripe border>
		  <el-table-column type="index"></el-table-column>
		  <el-table-column label="食物名称" prop="foodname"></el-table-column>
		  <el-table-column label="食物材料" prop="alias"></el-table-column>
		  <el-table-column label="食物价格" prop="rice"></el-table-column>
		  <el-table-column label="食物数量" prop="number"></el-table-column>
	  </el-table>

	</el-card>

	<!-- 按钮弹出事件 -->
	<el-dialog title="提示" :visible.sync="diog" width="50%" >
	  <el-table :data="foodlist">
		  <el-table-column type="index">
		  </el-table-column>
		  <el-table-column property="foodname" label="名称" width="250"></el-table-column>
	  	  <el-table-column property="rice" label="单价" width="200"></el-table-column>
	      <el-table-column property="number" label="数量" width="200">
			  <template slot-scope="scope">
			  <el-input-number v-model="scope.row.number" :min="0" :max="10" label="描述文字"></el-input-number>
			  </template>
		  </el-table-column>
	  </el-table>
  		<span slot="footer" class="dialog-footer">
    	<el-button @click="diog = false">取 消</el-button>
    	<el-button type="primary" @click="diog = false">确定添加</el-button>
  	</span>
	</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			foodlist:[],
			total:0,
			diog:true,
			num:1,
			search:'',
			listfood:[]
		}
	},
	created() {
		this.getfood()
	},
	methods: {
		async getfood() {
			//const searchParams = new URLSearchParams();
			//searchParams.append('query',this.list.query);
			const{data: res} = await this.$http.get('/my/choose/food')
				if(res.status !== 0) return this.$message.error('获取数据失败')
				this.foodlist = res.data
				//console.log(this.foodlist[0].foodname)
				//var list1 = {}
				//for (var key in this.foodlist) {
					//this.list1[key] = this.foodlist[key]
				//}
				//console.log(this.list1)
				//this.foodlist = list1
				//for( var i =0; i< this.foodlist.length ;i++) {
					//var obj = this.foodlist[i].foodname
					//console.log(obj)
					//this.list1 = obj
				//}
				//console.log(this.list1)
		},
		btn() {
			alert('功能未予后台开发结合，没有此功能')
		}
	}
}
</script>

<style lang="less" scoped>
.el-breadcrumb {
	margin-bottom: 30px;
}
.big_box {
	width:100px;
	height:100px;
	background:url("./image/20191216081935176.jpg");
	background-size:100% 90% ;
	transition:width 2s;
	-webkit-transition:width 2s;
}
.big_box1 {
	
	width:100px;
	height:100px;
	background:url("./image/20181203150107_630969.jpg");
	background-size:100% 90% ;
	transition:width 2s;
	-webkit-transition:width 2s;
}
.big_box2 {
	
	width:100px;
	height:100px;
	background:url("./image/OIP22.png");
	background-size:100% 90% ;
	transition:width 2s;
	-webkit-transition:width 2s;
}
.big_box3 {
	
	width:100px;
	height:100px;
	background:url("./image/OIP66.png");
	background-size:100% 100% ;
	transition:width 2s;
	-webkit-transition:width 2s;
}
.big_box4 {
	
	width:100px;
	height:100px;
	background:url("./image/OIP.png");
	background-size:100% 90% ;
	transition:width 2s;
	-webkit-transition:width 2s;
}
.big_box:hover {
	width:200px
}
.big_box1:hover {
	width:200px
}
.big_box2:hover {
	width:200px
}
.big_box3:hover {
	width:200px
}
.big_box4:hover {
	width:200px
}
.Box {
	display: flex;
	flex-wrap:nowrap;
	justify-content:space-around;
	align-items:center;
	margin-bottom: 20px;
}
.el-table{
	margin-top: 10px;
}
</style>