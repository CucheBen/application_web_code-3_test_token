export default {
    data() {
      return {
        username: '',
        mail:'',
        password: '',
        c_password:'',
      };
    },
    methods: {
    submitForm() {
      console.log(this.password,this.c_password)
        if (this.c_password==this.password){
          console.log(this.username+this.password+this.mail)
            fetch('http://localhost:5001/new_user/',{
             // headers: {
             //     'Content-type': 'application/json'
             // },
              method: 'POST',
              body: JSON.stringify({ username : this.username,password:this.password,mail:this.mail})
          })
          .then(response => response.json())
            
        }else{
          console.log('les 2 mdp sont pas les mêmes')
        }
    }


    }


}

    
