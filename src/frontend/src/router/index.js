import { createRouter, createWebHistory } from 'vue-router'
import Exercise from "@/views/Exercise.vue";
import Membership from "@/views/Membership.vue";
import Community from "@/views/Community.vue"
import Main from "@/views/Main.vue";
import Login from "@/views/Login.vue";
import Information from "@/views/Information.vue";
import UserDetail from "@/views/UserDetail.vue";
import SignUpView from "@/views/SignUpView.vue";
import KakaoLogin from "@/views/KakaoLogin.vue";
import AddInfo from "@/views/AddInfo.vue";
import TrainerDetail from "@/views/TrainerDetail.vue";
import Center from "@/views/Center.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
        {
      path: '/center',
      name: 'center',
      component : Center,
    },
    {
      path: '/membership',
      name: 'membership',
      component: Membership
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/login',
      name: 'login',
      component : Login
    },
    {
      path: '/info',
      name: 'info',
      component: Information
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: Exercise
    },
    {
      path: '/userDetail/:userId',
      name: 'userDetail',
      component: UserDetail,
      props : true
    },
    {
      path: '/trainerDetail/:trainerId',
      name: 'trainerDetail',
      component: TrainerDetail,
      props : true
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/kakaologin',
      name: 'kakaologin',
      component: KakaoLogin
    },
    {
      path: '/addinfo',
      name: 'addinfo',
      component: AddInfo
    }
  ]
})

export default router
