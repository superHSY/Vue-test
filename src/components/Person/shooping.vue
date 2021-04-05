<template>
	<div>
		<el-row type="flex">
			<el-col>logo</el-col>
			<el-col>
				<el-input placeholder="请输入内容" prefix-icon="el-icon-search">
					<el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
			</el-col>
		</el-row>

		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
			<el-menu-item index="1">处理中心</el-menu-item>
			<el-submenu index="2">
				<template slot="title">我的工作台</template>
				<el-menu-item index="2-1">选项1</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
				<el-submenu index="2-4">
				<template slot="title">选项4</template>
				<el-menu-item index="2-4-1">选项1</el-menu-item>
				<el-menu-item index="2-4-2">选项2</el-menu-item>
				<el-menu-item index="2-4-3">选项3</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="3" disabled>消息中心</el-menu-item>
			<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
		</el-menu>

		<el-card>
		<el-table :data="Shoplist" stripe border >
			<el-table-column type="index"></el-table-column>
			<el-table-column label="食物信息详情" prop="material"></el-table-column>
			<el-table-column label="单价" prop="rice"></el-table-column>
			<el-table-column label="数额" >
				<template slot-scope="scope">
				 <el-input-number v-model="scope.row.number" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<el-button type="primary" icon="el-icon-search" size="medium" round>搜索</el-button>
				<el-button type="info" round>信息按钮</el-button>
			</el-table-column>
		</el-table>
		 <el-row type="flex" class="row" :gutter="30">
			 <el-col :span="2">收藏</el-col>
			 <el-col :span="6">收藏</el-col>
			 <el-col :span="6">收藏</el-col>
			 <el-col :span="6">收藏</el-col>
			 <el-col :span="1">
				 <el-button type="success" round>成功按钮</el-button>
			 </el-col>
		 </el-row>
		</el-card>
	</div>
</template>


<script>
export default {
	data() {
		return {
			queryInfo: {
				name:'',
				material:'',
				rice:'',
				number:'',
			},
			activeIndex:'1',
			Shoplist:[],
			num:1
		}
	},
	created() {
		this.ShopFood()
	},
	methods: {
		async ShopFood() {
			const searchParams = new URLSearchParams();
 			searchParams.append('name',this.queryInfo.name);
 			searchParams.append('number',this.queryInfo.number );
			searchParams.append('rice',this.queryInfo.rice );
			searchParams.append('material',this.queryInfo.material );
			const{data: res} = await this.$http.post('/my/food/whole', searchParams.toString() ,{
					 headers: {
        			'Content-Type': 'application/x-www-form-urlencoded',
  							   },
				})
				if(res.status !== 0) return this.$message.error('获取数据失败')
				this.Shoplist = res.data
				console.log(res)
		},
		handleChange(value) {
			console.log(value)
		},
		
	}
}
</script>

<style lang="less" scoped>
.el-card {
	margin-top: 20px;
}
.row {
	padding-top: 10px;
}
</style>