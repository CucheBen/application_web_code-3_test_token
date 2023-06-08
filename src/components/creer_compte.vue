
<template>
    
  <div class="sign">
    <h2>créer un compte</h2>
    <form @submit.prevent="submitForm">
    <label for="username">nom d'utilisateur :</label>
    <input type="text" id="username" name="username" v-model="username" required>
    <label for="mail">adresse mail :</label>
    <input type="text" id="mail" name="mail" v-model="mail" required>
    <label for="password">mot de passe </label>
    <input type="password" id="password" name="password" v-model="password" required>

    <label for="confirm-password">Confirmer mot de passe</label>
    <input type="confirm-password" id="confirm-password" name="confirm-password" v-model="c_password" required>

    <input type="submit" value="Se connecter">
  </form>

  <p>Already have an account? <router-link to="/user_p">Log in here</router-link>.</p>
  </div>
</template>
<script src=  "./requete_creer_compte.js"></script>

<style>
/* style.css */

body {
    font-family: Arial, sans-serif;
   
    background-color: #45a049;
  }
 
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  label {
    margin-top: 10px;
    display: block;
  }
  
  input[type="text"],
  input[type="password"] {
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
  }
  input[type="text"],
  input[type="confirm-password"] {
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
  }
  .sign {
    margin: 100px auto;
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #ffffffcf;
  }
  
  button[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;

  }
  
  button[type="submit"]:hover {
    background-color: #45a049;
  }
  
  p {
    text-align: center;
    margin-top: 20px;
  }
  

</style>