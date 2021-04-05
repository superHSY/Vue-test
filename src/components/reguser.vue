<template>
	<div>
		<el-container>
  			<el-header>
				  <el-page-header @back="goBack" content="注册页面">
				  </el-page-header>
			</el-header>
  			<el-main class="box_color">
				  <div class="reguser">
				  <el-form :model="ruleForm" :rules="rules" ref="reguserRef" label-width="100px">
					<el-form-item>*为必填选项</el-form-item>

  					<el-form-item label="用户名称" prop="name">
    				<el-input v-model="ruleForm.name"></el-input>
 				  	</el-form-item>

					<el-form-item label="用户密码" prop="password">
    				<el-input v-model="ruleForm.password"></el-input>
 				  	</el-form-item>

					<el-form-item label="创建时间" >
					<!-- 日期 -->
    				<el-col :span="11">
      					<el-form-item prop="date1">
       					<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      					</el-form-item>
    				</el-col>
					<!-- 时间 -->
					<el-col class="line" :span="2"></el-col>
    				<el-col :span="11">
      					<el-form-item prop="date2">
        				<el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      					</el-form-item>
    				</el-col>
  					</el-form-item>
					<!-- 开关按钮 -->
					<el-form-item required>
    				<el-switch v-model="value" active-text="会员付费" inactive-text="普通用户付费"></el-switch>
  					</el-form-item>
					<!-- 选择所喜欢项 -->
					<el-form-item label="用户要求" prop="type" >
    					<el-checkbox-group v-model="ruleForm.type">
      					<el-checkbox label="美食/餐厅线上" name="type"></el-checkbox>
      					<el-checkbox label="地推活动" name="type"></el-checkbox>
      					<el-checkbox label="线下主题活动" name="type"></el-checkbox>
      					<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    					</el-checkbox-group>
  					</el-form-item>

					<el-form-item label="送餐方式" prop="resource">
    					<el-radio-group v-model="ruleForm.resource">
      					<el-radio label="线上配送"></el-radio>
      					<el-radio label="线下配送"></el-radio>
    					</el-radio-group>
  					</el-form-item>

					 <el-form-item label="点餐要求" prop="desc" >
    					<el-input type="textarea" v-model="ruleForm.desc"></el-input>
  					</el-form-item>

					<!-- 按钮 -->
					<el-form-item>
						<el-button type="primary" round @click="submit">立即注册</el-button>
						<el-button type="info" round @click="reset">重置注册</el-button>
					</el-form-item>
				  </el-form>
				  </div>
			</el-main>
		</el-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm : {
				name:'',
				password:'',
				date:'',
				delivery: false,
				type:[],
				resource:'',
				desc:'',
			},
			rules: {
					name: [{ required: true, message: '请输入用户名称', trigger: 'blur' },
            			   { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }],
					password: [{ required: true, message: '请输入用户密码', trigger: 'blur' },
            			   { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }],
					date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
					date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
					type: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }],
					resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
					desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
			},
			value:false,
		}
	},
	methods:{
		submit() {
			const searchParams = new URLSearchParams();
			searchParams.append('username',this.ruleForm.name);
 			searchParams.append('password',this.ruleForm.password );
			this.$refs.reguserRef.validate( async valid => {
				if( !valid ) return;
				const {data: res} = await this.$http.post('/api/reguser', searchParams.toString() ,{
					 headers: {
        			'Content-Type': 'application/x-www-form-urlencoded'
  							   },
				})
				if(res.status !== 0) return this.$message.error('注册用户失败！')
				this.$message.success('注册成功')
				this.$router.push('/login')
			})
		},
		reset() {
			this.$refs.reguserRef.resetFields();
		},
		goBack() {
			this.$router.push('/')
		}
	}
}
</script>

<style lang="less" scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 623px;
  }
.el-form{
	background: url("../assets/AD0ItsrpCBAEGAAg4Nra4QUo99qV-AEw4gM4ywY.png2.png");
}
.el-form-item__content {
	  font-size: 1px;
  }

  .el-main[data-v-78eb7cff] {
	  text-align: left
  }
  
.box_color{
	background-color: #fff;
}

.reguser {
	width: 592px;
	height: 665px;
	background-color: rgb(255, 255, 255);
	border-radius: 3px;
	position: absolute;
	left: 50%;
    top: 55%;
	transform: translate(-50%, -50%);
  }

.el-main[data-v-78eb7cff] {
	  background-color: #fff;
  }
.el-input {
	width: 400px;
}

.el-input__inner {
	width: 80%;
}

.el-page-header {
	line-height:55px
}
</style>