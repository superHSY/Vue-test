<template>
	<el-container class="home">
	
		<!-- 侧边栏 -->
  	<el-container >
    		<el-aside :width="iscollapse ? '64px' : '200px'">
				<div class="button" @click="button" > ||| </div>
						<el-menu background-color="#9C8585" text-color="#FDFDFD" active-text-color="#fff" 
						:collapse="iscollapse" :collapse-transition="false">
								<el-submenu index="1">
									<template slot="title">
									<i class="el-icon-files"></i>
									<span>今日菜品</span>
									</template>
									<el-menu-item index="1" @click="Hotpick('/hot')" class="el-icon-suitcase"><span>今日热选</span></el-menu-item>
									<el-menu-item index="5" @click="Hotpick1('/hot1')" class="el-icon-magic-stick">昔日菜品</el-menu-item>
									<el-menu-item index="6" @click="Hotpick2('/hot2')" class="el-icon-data-analysis">热门点餐</el-menu-item>
								</el-submenu>
								<el-submenu index="2">
									<template slot="title">
									<i class="el-icon-location"></i>
									<span>喜爱风格</span>
									</template>
									<el-menu-item index="10" @click="love('/love')" class="el-icon-suitcase">今日热选</el-menu-item>
									<el-menu-item index="11" @click="love1('/love1')" class="el-icon-suitcase">点餐日期</el-menu-item>
									<el-menu-item index="12" @click="love2('/love2')" class="el-icon-suitcase">今日热选</el-menu-item>
								</el-submenu>
								<el-submenu index="9">
									<template slot="title">
									<i class="el-icon-location"></i>
									<span>今日菜品</span>
									</template>
									<el-menu-item index="13" @click="shop('/shop')" class="el-icon-suitcase">今日热选</el-menu-item>
									<el-menu-item index="14" @click="shop1('/shop1')" class="el-icon-suitcase">今日热选</el-menu-item>
									<el-menu-item index="15" @click="shop2('/shop2')" class="el-icon-suitcase">今日热选</el-menu-item>
								</el-submenu>
						</el-menu>
			</el-aside>
		<el-container>
		<!-- 主页面 -->
    	<el-main>
			<router-view></router-view>
		</el-main>
		<!-- 脚部区域 -->
		<el-footer>
			<el-button type="info" @click="out">退出登录</el-button>
		</el-footer>
		</el-container>
  		</el-container>
		</el-container>
	</template>

<script>
export default {
	data () {
		return {
			active:'',
			iscollapse: false
		}
	},
	created() {
		this.active = window.sessionStorage.getItem('active')
	},
	methods: {
		Hotpick(active) {
			window.sessionStorage.setItem('active', active)
			this.$router.push('/hot')
		},
		Hotpick1(active) {
			window.sessionStorage.setItem('active', active)
			this.$router.push('/hot1')
		},
		Hotpick2(active) {
			window.sessionStorage.setItem('active', active)
			this.$router.push('/hot2')
		},
		love (active) {
			window.sessionStorage.setItem('active', active)
			this.$router.push('/love')
		},
		love1 (active) {
			window.sessionStorage.setItem('active', active)
			this.$router.push('/love1')
		},
		love2 (active) {
			window.sessionStorage.setItem('active', active)
			this.$router.push('/love2')
		},
		shop (active) {
			window.sessionStorage.setItem('active', active)
			this.$router.push('/shop')
		},
		shop1 (active) {
			window.sessionStorage.setItem('active', active)
			this.$router.push('/shop1')
		},
		shop2 (active) {
			window.sessionStorage.setItem('active', active)
			this.$router.push('/shop2')
		},
		out() {
			window.sessionStorage.clear()
			this.$router.push('/login')
		},
		button() {
			this.iscollapse = ! this.iscollapse
		}
	}
}
</script>

<style lang="less" scoped>
.home {
	position: relative;
	height: 100%;
}
.el-header{
	left: 530px;
	display: flex;
	position: absolute;
	justify-content: space-between;
	padding-left: 0;
	align-items: center;
	color: #fff;
	font-size: 20px;
	> div {
		display: flex;
		align-items: center;
	}
}

.el-aside {
	background:url("../assets/OIP.png");
	background-size:100% 50% ;
}

.el-main {
	background-color: rgb(255, 255, 255);
}
.button {
	background-color: rgb(156, 133, 133);
	font-size: 10px;
	line-height: 24px;
	color: rgb(253, 253, 253);
	text-align: center;
	letter-spacing: 0.2em;
	cursor: pointer;
}
.el-icon{
	margin-right: 5px;
}
</style>