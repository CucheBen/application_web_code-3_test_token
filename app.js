const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const port = 5001

; // ou le port spécifié
const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.get('/user_exist/:username', (request, response) => {
    const { username } = request.params;
    console.log('app user_existe?')
    const db = dbService.getDbServiceInstance();
    const result = db.user_exist(username);
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
    
})
app.post('/new_user/', (request, response) => {
    const { username ,password,mail} = request.body;
    console.log('dans app.js',username ,password,mail)
    const db = dbService.getDbServiceInstance();
    const result = db.new_user(username,password,mail);
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log('voici mon erreure: ',err));
})
app.get('/search/:username/:password', (request, response) => {
    const { username,password } = request.params;
    const db = dbService.getDbServiceInstance();
    const result = db.searchByuser_name(username,password);
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));

    
})






//app.get('/getAll',(request,response)=>{console.log('test')})
app.listen(port, () => console.log('app is running on port:',port));