 import Vue from 'vue'
 import VueRouter from 'vue-router'

 import Home from '../views/Home'
 import Classify from '../views/Classify'
 import Historsc from '../views/Historsc'
 import Favorite from '../views/Historsc/Favorite'
 import History from '../views/Historsc/History'
 import Login from '../views/Login'
 import My from '../views/My'
 import Ranking from '../views/Ranking'
 import Register from '../views/Register'
 import Search from '../views/Search'
 import SearchResult from '../views/SearchResult'
 import Vip from '../views/Vip'



 Vue.use(VueRouter)

 const router =new VueRouter({
   routes:[
    { path:'/home',component:Home},
    { path:'/classify ',component:Classify},
    { 
      path:'/historsc ',
      component:Historsc,
      children: [
        {
          path:'favorite',
          components:'Favorite'
        },
        {
          path: 'history',
          components:'History'
        },
        {
          path:'',
          redirect: '/historsc/history'
        },

      ]
    },
    { path:'/login ',component:Login},
    { path:'/my ',component:My},
    { path:'/ranking ',component:Ranking},
    { path:'/register ',component:Register},
    { path:'/search ',component:Search},
    { path:'/search-result ',component:SearchResult},
    { path:'/vip ',component:Vip},
    {path:'/',redirect:'/home'}//默认去到home页面
   ]
 });
  export default router ;