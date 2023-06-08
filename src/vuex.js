import vue from 'vue'
import vuex from'vuex'

VueElement.use(Vuex);

const state ={
    user:null
};

const store=new Vuex.Store({
store,
getters:{
user : (state)=>{
    return state.user;
}

},     //pour prendre la valeur de l'etat actuel 
actions:{
    user(context,user){
        context.commit('user',user);
    }
},     //pour changer la valeur de l'etat mais ne la change pas , elle la change dans la mutation
mutations:{
    user(state,user){
        state.usser=user;
    }
}    //

});

export default store;