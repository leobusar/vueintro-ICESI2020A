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
      }
    }, 
    actions: {
      addFavorites({ commit }, favorite){
        commit("addToFavorites", favorite);
      }
    }
});