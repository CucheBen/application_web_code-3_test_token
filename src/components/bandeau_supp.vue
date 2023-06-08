<template>
    <div class="header">
      <nav>
        <router-link to="/favoris" class="header-link">
          <button class="logo-wishlist">
            <img src="../photos/favoris.png" alt="Logo de la wish liste" />
          </button>
        </router-link>
  
        <router-link to="/" class="header-link">
          <button class="logo-site">
            <img src="../photos/logo_site.png" alt="Logo de mon site" />
          </button>
        </router-link>
  
        <router-link to="/message" class="header-link">
          <i class="bulle-message">
            <img src="../photos/message.png" alt="bulle message" />
          </i>
        </router-link>
        <button class="bulle-profil" v-on:click="go_to_profil"> <img src="../photos/profil_p.png" alt="bulle_profil" /> </button>

        <router-link to="/user_p" class="header-link">
          <i class="bulle-profil">
            <img src="../photos/profil_p.png" alt="bulle_profil" />
          </i>
        </router-link>
      </nav>
    </div>
  </template>
  
  <script>
  

export default {
  name: 'MonComposant',
  meta: {
    requiresAuth: true // Cette route nécessite une authentification
  },
methods:{
go_to_profil(){
    this.$router.push('./user_p')
}
}}
</script>

  <style scoped>
 .header {
    
    background-color: rgb(255, 255, 255);
    color: rgb(255, 255, 255);
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    
    align-items: center;
    justify-content: space-between; /* aligne les éléments au début et à la fin du conteneur */
    
  
}

.logo-site {
    height: 45px; /* ajuste la hauteur de l'image du logo de la wish list */
    margin-left: 10px; /* ajoute une marge à gauche de l'image */
    cursor: pointer;
    border: none;
    width: auto;
    height: 45px;
    background-color: transparent;
    display: inline-block;
    position: absolute;
    left: 50%;
    transform: translate( -50%);
    
}
.logo-site img {
    height: 45px;
    width: 45px;
    border-radius: 5%;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.3);
  }
.logo-wishlist {
    height: 45px; /* ajuste la hauteur de l'image du logo de la wish list */
    margin-left: 10px; /* ajoute une marge à gauche de l'image */
    cursor: pointer;
    border: none;
    width: auto;
    height: 45px;
    background-color: transparent;
    display: inline-block;
    position: absolute;
    left: 0%;
    transform: translate( -0%);
}
.logo-wishlist img {
    height: 45px;
    width: 45px;
    border-radius: 5%;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.3);
  }


.bulle-message {
    height: 45px; /* ajuste la hauteur de l'image du logo de la wish list */
    margin-left: 10px; /* ajoute une marge à gauche de l'image */
    cursor: pointer;
    border: none;
    width: auto;
    height: 45px;
    background-color: transparent;
    display: inline-block;
    position: absolute;
    left: 80%;
    transform: translate( -80%);
}
.bulle-message img {
    height: 45px;
    width: 45px;
    border-radius: 5%;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.3);
  }



.bulle-profil {
    height: 45px; /* ajuste la hauteur de l'image du logo de la wish list */
    margin-left: 10px; /* ajoute une marge à gauche de l'image */
    cursor: pointer;
    border: none;
    width: auto;
    height: 45px;
    background-color: transparent;
    display: inline-block;
    position: absolute;
    left: 100%;
    transform: translate( -140%);
}
.bulle-profil img {
    height: 45px;
    width: 45px;
    border-radius: 5%;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.3);
  }
 

  </style>
  