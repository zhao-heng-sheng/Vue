import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Header from '@/components/Header'
import Home from '@/components/home'
import NotFound from '@/components/NotFound'
import Skill from '@/components/Skill'
import SelfTalk from '@/components/SelfTalk'
import TimeLine from '@/components/TimeLine'
import Message from '@/components/Message'
import About from '@/components/About'
import ArticleList from '@/components/ArticleList'
import Article from '@/components/Article'
import Idea from '@/components/Idea'
// 后台
import Login from '@/components/Account/login'
import AccountHome from '@/components/Account/home'
import AccountArticle from '@/components/Account/article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component:Index,
      children:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/skill',component:Skill},
        {path:'/selfTalk',component:SelfTalk},
        {path:'/timeLine',component:TimeLine},
        {path:'/message',component:Message},
        {path:'/about',component:About},
        {path:'/article/:aid',component:Article},
        {path:'/idea',component:Idea},
      ]
    },
    {
      path:'/Account',
      component:AccountHome,
      children:[
        {path:'/',redirect:'/Account/article'},
        {path:'/Account/home',component:AccountArticle},
        {path:'/Account/article',component:AccountArticle}
      ]
    },
    {
      path:'*',
      component:NotFound
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    (function(){
      //百度自动推送爬虫代码
      var bp = document.createElement('script');
      var curProtocol = window.location.protocol.split(':')[0];
      if (curProtocol === 'https') {
          bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
      }
      else {
          bp.src = 'http://push.zhanzhang.baidu.com/push.js';
      }
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(bp, s);
    })();
      if (savedPosition) {
        return { x: 0, y: 0 }
      } else {
        return { x: 0, y: 0 }
      }
  }
})
