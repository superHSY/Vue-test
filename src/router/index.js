import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'
import Resuser from '../components/reguser.vue'
import Index from '../components/index.vue'
import Welcome from '../components/welcome.vue'
import Hotpick from '../components/Order.food/hotpick.vue'
import Newday from '../components/Order.food/newday.vue'
import Cooperation from '../components/Order.food/cooperation.vue'
import Love from '../components/love.food/love.vue'
import Day from '../components/love.food/day.vue'
import Whole from '../components/love.food/whole.vue'
import Shop from '../components/Person/shooping.vue'
import Chart from '../components/Person/chart.vue'
import Mine from '../components/Person/mine.vue'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  { path:'/login', component: Login },
  { 
  path:'/home', 
  component: Home ,
  redirect:'/welcome',
  children: [
            { path:'/welcome', component: Welcome},
            { path:'/hot', component: Hotpick},
            { path:'/hot1', component: Newday},
            { path:'/hot2', component: Cooperation},
            { path:'/love', component: Love},
            { path:'/love1', component: Day},
            { path:'/love2', component: Whole},
            { path:'/shop', component: Shop},
            { path:'/shop1', component: Chart},
            { path:'/shop2', component: Mine}
            ]
  },
  { path:'/reguser', component: Resuser },
  { path:'/', component: Index},
  
]

const router = new VueRouter({
  routes
})

//挂载路由导航
router.beforeEach((to,  from, next) => {
  if(to.path === '/') return next();
  if(to.path === '/reguser') return next();
  if(to.path === '/login') return next();
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})
export default router
