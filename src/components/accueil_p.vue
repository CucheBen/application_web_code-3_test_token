<template>
  
  <div class="accueil">
    <div class="recommandé">
        <p>Recommandé pour vous:
        </p>
        <div class="button-container">
            <ul class="button-list">
              <li><button div class="info-content">
                    <img class="info-image" src="photos/annonces/image1.jpg" alt="Ma photo">
                    <div class="info-details">
                      <h2 class="info-title">Mon titre</h2>
                      <div class="info-address">Mon adresse</div>
                      <div class="info-price">Mon prix</div>
                    </div>
                </button></li>
              <li><button div class="info-content">
                <img class="info-image" src="mon-image.jpg" alt="Ma photo">
                <div class="info-details">
                  <h2 class="info-title">Mon titre</h2>
                  <div class="info-address">Mon adresse</div>
                  <div class="info-price">Mon prix</div>
                </div></button></li>
              <li><button div class="info-content">
                <img class="info-image" src="mon-image.jpg" alt="Ma photo">
                <div class="info-details">
                  <h2 class="info-title">Mon titre</h2>
                  <div class="info-address">Mon adresse</div>
                  <div class="info-price">Mon prix</div>
                </div></button></li>
                <li><button div class="info-content">
                    <img class="info-image" src="mon-image.jpg" alt="Ma photo">
                    <div class="info-details">
                      <h2 class="info-title">Mon titre</h2>
                      <div class="info-address">Mon adresse</div>
                      <div class="info-price">Mon prix</div>
                    </div></button></li>
              <!-- Répéter autant de fois que nécessaire en fonction du nombre d'entrées -->
            </ul>
          </div>
    </div>
  </div>
  

</template>
<script src="./requete_accueil.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

body {
    background-color: #724b31;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
}




.recherche{
    
        background-color: #0c78e3;
        color: #fff;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        position: fixed;
        bottom: 0;
        left: 100%;
        transform: translateX(-100%);
        width: 100%;
        z-index: 10;
        
      }
      
      .info-button {
        display: inline-block;
        border: none;
        padding: 0;
        margin: 0;
        background-color: transparent;
        cursor: pointer;
        height: auto;
      }
      
      .info-content {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 10px;
        width: 100%;
        
      }
      
      .info-image {
        height: 100%;
        width: auto;
        max-height: 150px;
        margin-right: 20px;
      }
      
      .info-details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }
      
      .info-title {
        margin: 0;
        font-size: 24px;
      }
      
      .info-address {
        margin: 5px 0;
        font-size: 16px;
      }
      
      .info-price {
        margin: 5px 0;
        font-size: 20px;
      }
      .info-content{
        
        background-color: aqua;
        position: relative;
        width: 400px;
        height: 200px;
        
        
      }
      ::-webkit-scrollbar{
        display: none;
      }

      .recommandé{
        text-decoration :underline;
        font-size: 30px;
      }
      .top_biens_à_vendre{
        text-decoration :underline;
        font-size: 30px;
      }
      
      .button-container {
        display: flex;
        justify-content: center;
        
        
      }
      
      .button-list {
        display: flex;
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: row;
        width: 800px;
        height: 200px;
        
      }
      
      .button-list li {
        margin-right: 40px;
      }
      
      .button-list button {
        
        border: black;
        cursor: pointer;
        padding: 0;
        height: 150px ;
        width: 400px;
      }
      
      .button-list button img {
        height: 160px;
        width: 160px;
      }
      
   
      
      .button-list {
        width: 100%; /* Remplacer la largeur par celle de votre choix */
        overflow-x: scroll;
        
      }
      
      .scrolling {
        animation: scroll 1s linear infinite;
      }
      
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50px); /* Remplacer la valeur par celle de votre choix */
        }
      }
      


</style>
