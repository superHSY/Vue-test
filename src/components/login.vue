<template>
	<div class="login_tab">
		<el-header class="zsd">
				  <el-page-header @back="goBack" content="首页">
				  </el-page-header>
		</el-header>
		<div class="login_box">
			<div class="avatar">
				<img src="../assets/6.png">
			</div>
			<!-- 登录表单区域 -->
			<el-form ref="loginFormRef" :rules="loginFormrules" label-width="0" class="login_form" :model="loginForm" >
  				<!-- 账号 -->
				<el-form-item prop="username">
    			<el-input placeholder="请输入用户名" prefix-icon="el-icon-user-solid" v-model="loginForm.username"></el-input>
  				</el-form-item>
				<!-- 密码 -->
				<el-form-item prop="password">
    			<el-input placeholder="请输入密码" prefix-icon="el-icon-s-cooperation" v-model="loginForm.password" type="password"></el-input>
  				</el-form-item>

				<el-form-item class="right">
    			<el-button type="primary" @click="login">登录</el-button>
				<el-button type="info" @click="reguser">注册</el-button>
  				</el-form-item>
			</el-form>
		</div>
	</div>

</template>

<script>
export default {
	data() {
		return {
			//登录表单的数据绑定对象
			loginForm: {
				username:'',
				password:'',
			},
			loginFormrules: {
				username:[
				{ required: true, message: '请输入用户名称', trigger: 'blur' },
            	{ min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
				],
				password:[
				{ required: true, message: '请输入用户密码', trigger: 'blur' },
                { min: 4, max: 15, message: '长度在 4 到 15 个字符', trigger: 'blur' }	
				]
			}
		}
	},
	methods:{
		//登录函数
		login() {
			const searchParams = new URLSearchParams();
 			searchParams.append('username',this.loginForm.username);
 			searchParams.append('password',this.loginForm.password );
			this.$refs.loginFormRef.validate(async valid => {
				if( !valid ) return;
				const {data: res} = await this.$http.post('/api/login', searchParams.toString() ,{
					 headers: {
        			'Content-Type': 'application/x-www-form-urlencoded'
  							   },
				})
				if( res.status !== 0) return this.$message.error('登录失败！')
				this.$message.success('登录成功')
				console.log(res)
				window.sessionStorage.setItem("token", res.token)
				//跳转页面
				this.$router.push('/home')
			})
		},
		//注册函数
		reguser() {
			this.$router.push('/reguser')
		},
		goBack() {
			this.$router.push('/')
		},
		
	}
}
</script>

<style lang="less" scoped>
.zsd {
	padding-top: 10px;
}
.login_tab {
	background:url("../assets/20.png");
	background-size:100% 100% ;
	height: 100%;
}

.login_box{
	width: 450px;
	height: 300px;
	background-color: #fff;
	border-radius: 3px;
	position: absolute;
	left: 50%;
	top:45%;
	transform: translate(-50%, -50%);

	.avatar {
		width: 130px;
		height: 130px;
		border: 1px solid #eee;
		border-radius: 50%;
		padding: 10px;
		box-shadow: 0 0 10px #ddd;
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		img{
			width: 100%;
			height: 100%;
			border-radius: 50%;
			background-color: #eee;
		}
	}
}

.right{
	display: flex;
	justify-content: flex-end;
}

.login_form {
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 0 20px;
	box-sizing: border-box;
}
</style>