
<template>
    <div class="login">
      <h1>Se connecter</h1>

      <form @submit.prevent="submitForm">
        <label for="username">Nom d'utilisateur :</label>
        <input type="text" id="username" name="username" v-model="username" required>
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password" v-model="password" required>
        <input type="submit" value="Se connecter">
      </form>
      <h1>{{this.$myVariable}}</h1>

      <p>pas de compte? <router-link to="/creer_compte">Créer un compte</router-link>.</p>
    
    </div>
   
  </template>
  
  <script src=  "./requete_user.js">

  </script>
  
  <style>
  body {
    background-color: #4CAF50;
  }
  
  .login {
    margin: 100px auto;
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #ffffffcf;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 10px;
  }
  
  input[type="text"],
  input[type="password"],
  input[type="submit"] {
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
  }
  
  input[type="submit"] {
    background-color: #ffffff;
    color: #379a37be;
    cursor: pointer;
  }
  
  input[type="submit"]:hover {
    background-color: #45a049;
  }
  </style>
  