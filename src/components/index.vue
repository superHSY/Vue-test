<template>
  <div>
    <el-row>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple bg-img"></div></el-col>
        <el-col :span="18">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
              <el-menu-item index="1">
                <el-link type="primary" href="http://localhost:8080/#/login">登录</el-link>
              </el-menu-item>
              <el-menu-item index="2">
                <el-link type="primary" href="http://localhost:8080/#/reguser">注册</el-link>
              </el-menu-item>
              <el-menu-item index="3" >
                <el-link type="primary" href="http://localhost:8080/#/welcome">个人中心</el-link>
              </el-menu-item>
              <el-menu-item index="4" >
                <el-link type="primary" href="http://localhost:8080/#/hot">点餐中心</el-link>
              </el-menu-item>
              <el-avatar shape="circle" :size="70" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </el-menu>
        </el-col>
      </el-row>
    </el-row>

    <template>
      <el-carousel :interval="3000" arrow="always" height="500px">
        <el-carousel-item v-for="item in 4" :key="item">
          <div style="height:100%;width:100%">
            <img
              src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/featured/club_upgrade/banner-new-2.jpeg"
              class="elimg"
              alt=""
            />
            <img
              src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/featured/club_upgrade/banner-new-2.jpeg"
              class="elimg"
              alt=""
            /></div
        ></el-carousel-item>
      </el-carousel>
    </template>

    <div class="div_goods">
      <el-col :span="8">
        <el-card shadow="hover">
			<span><i class="el-icon-eleme icon"></i></span>
            <div>
              <a href="https://www.ele.me" target="_blank" style="color: #b38d54;text-decoration:none">饿了吗</a>
            </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          	<span><i class="el-icon-s-goods icon"></i></span>
            <div>
              <a href="https://www.ele.me" target="_blank" style="color: #b38d54;text-decoration:none">急先锋</a>
            </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          	<span><i class="el-icon-s-home icon"></i></span>
            <div>
              <a href="http://localhost:8080/#/welcome" target="_blank" style="color: #b38d54;text-decoration:none">个人中心</a>
            </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          	<span><i class="el-icon-s-grid icon"></i></span>
            <div>
              <a href="https://www.ele.me" target="_blank" style="color: #b38d54;text-decoration:none">出货列表</a>
            </div>
        </el-card>
      </el-col>
    </div>
    <!-- 分割线 -->
    <el-divider><i class="el-icon-picture icon"></i></el-divider>

    <div class="logo"></div>

    <div class="show">
      <el-col>
        <el-card shadow="hover" class="show1">
          <div></div>
        </el-card>
      </el-col>

      <el-col>
        <el-card shadow="hover" class="show2">
          <div></div>
        </el-card>
      </el-col>

      <el-col>
        <el-card shadow="hover" class="show3">
          <div></div>
        </el-card>
      </el-col>
    </div>

    <div class="button2">
      <el-button type="success" class="button_success">
         <a href="https://www.ele.me" target="_blank" style="font-size:30px; color: #b38d54;text-decoration:none">gogogo it</a>
      </el-button>
    </div>

    <div class="bigbox">
      <div class="smallbox">
      </div>
      <div class="boxx">
      </div>

      <div class="boxxx">
        欧洲初的咖啡店就在英国诞生，到了17世纪左右咖啡店到达了繁盛时期，只要一便士就可以享受一杯咖啡，同时相互交流对当时文化、经济等各方面的看法。我们的就继承了英国传统咖啡屋的传统，为现代繁忙的都市生活增添了一抹情趣。店铺保持着浪漫惬意的风格，并没有因为追逐城市的快节奏而怠慢了任何细节。无论是在闲逛时想小憩一下，还是会议中的头脑风暴毫无头绪都可以选在来这坐一会儿，也许灵感就在咖啡香中迸发。
      </div>
    </div>

    <div class="oppo">
      <div class="image1"></div>
      <div class="image2">
          <div class="mc">Coffe free time</div>
          <div class="mc1">&</div>
          <div class="mc2">Feel the coffee</div>
          <div class="mc3">店铺保持着浪漫惬意的风格，当美食和浪漫相结合，传统的食材和创意的想法相互碰撞，从咸到甜，再回到丝丝甜意，想要所有美味都在空腔中爆发</div>
      </div>
      <div class="image3"> </div>
    </div>

    <div class="next">
      <div class="bbb">
        <div class="ccc">Feel the coffee</div>
        <div class="ddd">想要挣脱生活压力的束缚，只闻花香，不谈悲喜？想要摆脱人山人海的网红店，好好和闺蜜谈心聊天？还想独辟蹊径只为感受正宗的英伦范儿？这里就是品尝咖啡，享受面包餐点的好地方，无论是搭配咖啡还是早餐茶都是不错的选择。</div>
          <el-button type="warning">
             <a href="https://www.ele.me" target="_blank" style="font-size:30px;color: #b38d54;text-decoration:none">进入</a>
          </el-button>
      </div>
      <div class="aaa"></div>
    </div>

    <div class="eee">
      <div class="ttt">What the founder say</div>
      <div class="qqqq">创始人寄言</div>
      <div class="rrrrr">
        在世界各地，人们越来越爱喝咖啡，随之而来的“咖啡文化”充满生活的每个时刻，无论在家里、还是在办公室、或是各种社交场合，人们都在品着咖啡。我们力求将品质好的咖啡送到每一位顾客的手中，让顾客享受一杯高品质的咖啡。愿顾客可以在一个优美、舒适又自然的氛围中度过自由自在的悠闲时光，以新鲜原料制作的咖啡和美食，为您传递着世界的健康饮食潮流，将让你体验到一个自由、健康和远离尘嚣的好心情。
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      activeIndex:'1',
    }
  },
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command)
    },
    out() {
      const tokenStr = window.sessionStorage.getItem('token')
      if (!tokenStr) return this.$router.push('/login')
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
.el-avatar {
  margin-top:20px; ;
}
.el-link {
  font-size: 30px;
  margin: 0 auto;
  padding: 0 60px;
}
.el-menu--horizontal>.el-menu-item{
  height: 99px;
  line-height: 120px; 
}
.el-row {
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
  background: #d3dce6;
}
.bg-img {
  background: url('../assets/big.png');
  background-size: 100% 100%;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 100px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.index1 {
  font-size: 15px;
  text-align: center;
}
.index2 {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.div_goods {
  display: flex;
  margin-top: 20px;
}


.image-slot {
  height: 100px;
}

.show {
  position: relative;
  display: flex;
  //background-color: rgb(37, 34, 34);
  height: 400px;
  width: 800px;
  margin: 0 auto;
  
}
.show1 {
  position: absolute;
  flex: 1;
  left: -100px;
  background:url("../assets/1.jpg");
  width: 50%;
}
.show2 {
  position: absolute;
  flex: 1;
  left: 400px;
  height: 390px;
  width: 400px;
  background:url("../assets/2.jpg");
}
.show3 {
  position: absolute;
  flex: 1;
  top: 100px;
  height: 200px;
  width: 200px;
  background:url("../assets/AD0ItsrpCBACGAAgv5zW4QUovc-ijgcw-gM4qAU.jpg");
  background-size: 100%, 100%;
}
.logo {
  text-align: center;
  height: 180px;
  margin-bottom: 20px;
  background:url("../assets/big.png");
}
.button2 {
  position: relative;
  width: 500px;
  display: flex;
}
.button_success {
  position: absolute;
  left: 314px;
  flex: 1;
  justify-content:center;
  width: 300px;
  margin-top: 40px;
}

.elimg {
  height: 100%;
  width: 50%;
}
.el-card{
	flex: 1;
	height: 100%;
	text-align: center;
	padding-top: 10px;
	font-size: 20px;
	font-weight: 10000;
	cursor: pointer;
	user-select: none;
}
.el-card .icon{
  padding-bottom: 20px;
	font-size: 60px;
}
.bigbox {
  position: relative;
  top: 200px;
  height: 600px;
  width: 100%;
  background:url("../assets/AD0ItsrpCBACGAAgr5zW4QUosMvbQDCADzjbBg.jpg"); 
  background-size: 100% 100%;
}
.smallbox {
  position: absolute;
  top: 50px;
  right: 300px;
  height: 80%;
  width: 20%;
  background:url("../assets/AD0ItsrpCBACGAAguZzW4QUovZjstAIw7wU4hgM.jpg.webp");
}
.boxx {
  position: absolute;
  top: 50px;
  right: 700px;
  height: 400px;
  width: 600px;
  background:url("../assets/AD0ItsrpCBACGAAguZzW4QUovZjstAIw7wU4hgM.jpg.webp");
  background-size: 100% 100%;
}
.boxxx {
  user-select: none;
  line-height: 42px;
  color: #999999;
  font-size: 14px;
  top: 500px;
  right: 700px;
  height: 40%;
  width: 600px;
  position: absolute;
  background-color: #fff;
}
.oppo {
  display: flex;
  position: relative;
  top: 360px;
  width: 100%;
  height: 500px;
}
.image1 {
  flex: 2.5;
  height: 100%;
  background:url("../assets/AD0ItsrpCBACGAAgj5-W4QUoxL66pgMwyAY4ywY.jpg.webp");
  background-size: 100% 100%; 
}
.image2{
  display: flex;
  flex-direction:  column;
  flex: 1.5;
  height: 100%;
  background: url("../assets/AD0ItsrpCBAEGAAg4Nra4QUo99qV-AEw4gM4ywY.png2.png");
  background-size: 100% 100%;
}
.image3 {
  flex: 2;
  height: 100%;
  background: url("../assets/AD0ItsrpCBACGAAgk6TW4QUoub3_wQYw-gQ4oAY.jpg1.webp");
  background-size:100% 100%;
}
.mc {
  flex: 1;
  top: 20px;
  color: #ffffff;
  font-weight: bold;
  font-size: 32px;
  font-family: "times new roman";
  text-align: center;
}
.mc1 {
  flex: 1;
  top: 20px;
  color: #ffffff;
  font-weight: bold;
  font-size: 32px;
  font-family: "times new roman";
  text-align: center;
}
.mc2 {
  flex: 1;
  top: 20px;
  color: #ffffff;
  font-weight: bold;
  font-size: 32px;
  font-family: "times new roman";
  text-align: center;
}
.mc3 {
  flex: 4;
  top: 20px;
  color: #ffffff;
  font-weight: bold;
  font-size: 32px;
  font-family: "times new roman";
  text-align: center;
  font-size: 30px;
}
.next {
  display: flex;
  position:relative;
  top: 360px;
  width: 100%;
  height: 400px;
  background: url("../assets/AD0ItsrpCBACGAAgwK-W4QUonrbT9wMwgA84qAc.jpg3.jpg");
  background-size:100% 100% ;
}
.bbb {
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column;
  margin-left: 200px ;
  width: 30%;
  height: 80%;
  
}
.aaa {
  position: absolute;
  top: 40px;
  right: 250px;
  margin-left: 200px ;
  width: 30%;
  height: 100%;
  background: url("../assets/AD0ItsrpCBAEGAAgqMPW4QUov6bjuwEw5gQ46gM.png5.webp");
  background-size:100% 100%;
}
.ccc {
  font-weight: bold;
  font-size: 46px;
  width: 100%;
  height: 20%;
  background-color: #fff;
}
.ddd {
  font-size: 14px;
  line-height: 42px;
}
.eee {
  position: relative;
  top: 400px;
  height: 500px;
  width: 100%;
  background: url("../assets/AD0ItsrpCBACGAAgwK-W4QUonrbT9wMwgA84qAc.jpg3.jpg");
}
.ttt {
  color: #b38d54;
  text-align: center;
  top: 20px;
  font-size: 46px;
  background-color: #fff;
  position: absolute;
  width:100%;
}
.qqqq {
  top: 80px;
  font-size: 35px;
  position: absolute;
  width: 100%;
  background-color: #fff;
  text-align: center;
}
.rrrrr {
  position: absolute;
  color: #b38d54;
  left:460px;
  top: 150px;
  height: 300px;
  width: 40%;
  background-color: #fff;
  text-align: center;
  font-size: 28px;
}

.bg-img2 {
  background-size:100% 100% ;
  background:url("../assets/AD0ItsrpCBACGAAgwK-W4QUonrbT9wMwgA84qAc.jpg3.jpg") ;
}
</style>
