<template>
  <div id="app">
    <h3>Otro mensaje</h3>
    <HelloWorld v-for="message in messages" :key="message.id" :msg="message.value" />
    <input type="text" v-model="entrada" /> 
    {{ entrada }}
    <button @click="cambiar" >Cambio</button>
    <div :style="{color: activeColor,  fontSize: fontSize+'px'}" >Estilo en vue</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      activeColor: "black", 
      fontSize: 20,
      messages: [ 
        {id: 1, value: "Hello World"},
        {id: 2, value: "Hola mundo"},
        {id: 3, value: "Bon yourt"}
         ],
      entrada: "Ingrese algo"
    }
  },
  methods: {
    cambiar(){
      console.log("Click en boton");
      this.entrada = this.entrada.toUpperCase();
      this.activeColor="green";
      this.fontSize += 10;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
