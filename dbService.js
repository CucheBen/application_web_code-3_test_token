const mysql = require('mysql');
const dotenv = require('dotenv');



//const { response } = require('express');
//const response  = require('express');

let instance = null;
dotenv.config();
//import { useRouter } from 'vue-router';
//const router = useRouter();

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Ronan2best',
    port: 3306,
    database: 'tables',
});
//const auth_user=""

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
     console.log('db ' + connection.state);
});


class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async searchByuser_name(username, password) {
        console.log('Dans la recherche de', username, 'et de son mdp:', password,'ptn de meeeerde');
        try {
            const response = await new Promise((resolve, reject) => {
                const query = `SELECT id FROM utilisateur WHERE user_name = '${username}' and pass_word='${password}';`;
                connection.query(query, (err, results) => {
                    if (err) {
                        reject('Problème requête SQL');
                    } else {
                        if (results.length > 0) {
                            this.$myVariable=username

                            resolve(true);
//_________________
                            console.log('trruuuueeeee',username,'est connecté')
                        } else {
                            resolve(false);
                        }
                    }
                });
            });
        
    console.log('DBService response:', response);
        
        if (response===true){
            console.log(username,'est connecté _______________')
            console.log('le nom et le mdp sont bon ')
           //this.$myVariable=username
            console.log('dbservice ligne 58',this.$myVariable)
           // this.$router.push('/connecte');
        }
        return response
    } catch (error) {
        console.log(error);
    }
}
    
async  new_user(username, password, mail) {
                console.log('dbservice new_user ', username, password, mail);
                try {
                    
                        console.log('On essaie de vérifier si le nom existe');
                        const response = await fetch('http://localhost:5001/user_exist/' + username);
                        const data = await response.json();
                        const bool = data; // La valeur retournée est stockée dans la variable bool
                        console.log('Valeur booléenne :', bool.data);
                  
                      
                  if (bool.data===false) {
                    console.log('on essaye de rajouter:', username)
                    const insertId = await new Promise((resolve, reject) => {
                      const query = `INSERT INTO utilisateur (user_name, pass_word, mail_address) VALUES ('${username}', '${password}', '${mail}');`;
                      connection.query(query, (err, result) => {
                        if (err) reject(new Error(err.message));
                        resolve(insertId);
                        console.log(result)
                      })
                      console.log(username,' est ajouté à la db')
                    });
                    //alert("ce nom existe déjà, veuillez en choisir un autre");
                  }else{
                    console.log('L utilisateur existe déjà');

              }
            }catch (error) {
                console.log('bloqué dans le try and catch de db service new_user')
            }
            }
              
     async user_exist(user_name) {
                console.log('Dans la recherche de', user_name);
                try {
                    const response = await new Promise((resolve, reject) => {
                        const query = `SELECT id FROM utilisateur WHERE user_name = '${user_name}';`;
                        connection.query(query, (err, results) => {
                            if (err) {
                                console.log(response)
                                reject('Problème requête SQL');
                            } else {
                                if (results.length > 0) {
                                    resolve(true);
                                } else {
                                    resolve(false);
                                }
                            }
                        });
                    });
                console.log('DBService response:', response);
                return response;
            } catch (error) {
                console.log(error);
            }
            }
        }
    




        




    


module.exports = DbService;