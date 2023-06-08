
<template>
  <div>
    <BandeauSupp />
    
    <router-view />

  </div>

</template>


<script>
import BandeauSupp from './components/bandeau_supp.vue';

export default {
  name: 'App',
  components: {
    BandeauSupp,
  },
  data(){
return {
  user:null
}

  }
};
</script>
<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
