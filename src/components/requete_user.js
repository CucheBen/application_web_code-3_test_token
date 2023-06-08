

// Dans votre fonction ou méthode où vous avez la condition

export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },   
    
    methods: {
        
      submitForm() {
        fetch('http://localhost:5001/search/' + this.username + '/' + this.password)
          .then(response => response.json())
         // .then(data => {}).catch(error => {
            // Gérer les erreurs de la requête fetch
           // console.error(error);
         //   console.log(data)
        //  });
          
            console.log('submit form=', this.$myVariable);
            if (this.$myVariable === '') {
              //this.$router.push('./user_p')
          
            }else{
              this.$router.push('/connecte');

            }
          
          
      }
      
        
      }}
     
     