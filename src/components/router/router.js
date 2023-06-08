import { createRouter, createWebHistory } from 'vue-router';
import accueil_p from '../accueil_p.vue';
import user from '../user_p.vue';
import message from '../message_v.vue';
import favoris from '../favoris_v.vue';
import creer_compte from '../creer_compte';
import p_connecte from '../profil_connecte.vue';



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: accueil_p
    },
    {
      path: '/connecte',
      name: 'connecte',
      component: p_connecte
    },
    
    {
      path: '/user_p',
      name: 'user_p',
      component: user
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/favoris',
      name: 'favoris',
      component: favoris
    },
    {
      path: '/creer_compte',
      name: 'creer_compte',
      component: creer_compte
    }
  ]
});
export default router;
