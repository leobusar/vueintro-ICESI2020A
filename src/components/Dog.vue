<template>
  <v-card>
    <v-img :src="dog.img" height="170px"></v-img>
    <v-card-title>
      <div>
        <h3>{{ dog.name }}</h3>
        <p>{{ dog.breed }}</p>
      </div>
    </v-card-title>
    <v-btn @click="addToFavorites" >Add To Favorites</v-btn>
  </v-card>
</template>

<script>
import axios from "../config/axios";

export default {

    props: {
        dog: {
            type: Object
        }
    },
    created() {
        axios
            .get("/breed/"+this.dog.breed+"/images/random")
            .then(response => {
                ///console.log(response); 
                // const husky = this.dogs.find(dog => dog.breed=== 'husky');
                this.dog.img = response.data.message;
            })
            .catch( error =>{
                console.log(error);
            } )
    }, 
    methods:  {
      addToFavorites() {
        this.$store.commit('addToFavorites', this.dog)
      }
    }
};
</script>

<style>
</style>