<template>
	<div>
		<el-row class="row">13</el-row>
		<el-card>
			<el-row :gutter="40">
				<el-col :span="8">
					<el-input placeholder="请输入内容">
						<el-button slot="append" icon="el-icon-search"></el-button>
					</el-input>
				</el-col>
				<el-col :span="4">
					<el-button type="primary">添加按钮</el-button>
				</el-col>
			</el-row>
		<el-table :data="wholelist" stripe border>
			<el-table-column type="index"></el-table-column>
			<el-table-column label="菜名" prop="name"></el-table-column>
			<el-table-column label="菜名" prop="material"></el-table-column>
			<el-table-column label="菜名" prop="rice"></el-table-column>
			<el-table-column label="菜名" prop="number"></el-table-column>
			<el-table-column label="评价">
				<el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
			</el-table-column>
			<el-table-column label="是否喜欢">
				<template slot-scope="scope">
					{{ scope.row }}
					<el-switch v-model="scope.row.mg_status" @change="food(scope.row)"></el-switch>
				</template>
			</el-table-column>
			<el-table-column label="操作"></el-table-column>
		</el-table>
		</el-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			queryInfo: {
				id:'',
				name:'',
				material:'',
				rice:'',
				number:'',
				mg_status:''
			},
			wholelist:[],
			value: 3.7,
		}
	},
	created() {
		this.wholeFood()
	},
	methods: {
		async wholeFood() {
			const searchParams = new URLSearchParams();
 			searchParams.append('name',this.queryInfo.name);
			searchParams.append('id',this.queryInfo.id);
 			searchParams.append('number',this.queryInfo.number );
			searchParams.append('rice',this.queryInfo.rice );
			searchParams.append('material',this.queryInfo.material );
			searchParams.append('mg_status',this.queryInfo.mg_status );
			const{data: res} = await this.$http.post('/my/food/whole', searchParams.toString() ,{
					 headers: {
        			'Content-Type': 'application/x-www-form-urlencoded',
  							   },
				})
				if(res.status !== 0) return this.$message.error('获取数据失败')
				this.wholelist = res.data
				console.log(this.wholelist.id)
				
		},
		async food(queryInfo) {
			const{data: res} = await this.$http.put(`/my/status/change/${queryInfo.id}/status/${queryInfo.mg_status}`, {
					 headers: {
        			'Content-Type': 'application/x-www-form-urlencoded',
  							   },
			})
			if(res.status !== 0) {
			queryInfo.mg_status = !queryInfo.mg_status
			return this.$message.error('获取失败')
			}
			this.$message.success('更新用户成功')
		},
		
	}
}
</script>

<style lang="less" scoped>
.row {
	margin-bottom: 20px;
	font-size: 20px;
	text-align: center;
}
.el-table {
	margin-top: 20px;
}
</style>