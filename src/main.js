import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router/router.js';




const app = createApp(App);

app.use(router);
app.config.globalProperties.$myVariable = '';

app.mixin({
    data() {
      return {
        myVariable: this.$myVariable
      };
    }
  });
app.mount('#app');


