import Vue from "vue"; 
import Vuex from "vuex";

Vue.use(Vuex); 

export default new Vuex.Store({
    state: {
        favorites: [        
        ],
    },
    mutations: {
      addToFavorites(state, favorite) {
        state.favorites.push(favorite); 
      }, 
      removeFavorites(state, favorite) {
        state.favorites.splice(state.favorites.indexOf(favorite), 1); 
      },
    }, 
    // actions: {
    //   addFavorites({ commit }, favorite){
    //     commit("addToFavorites", favorite);
    //   }
    // }
});