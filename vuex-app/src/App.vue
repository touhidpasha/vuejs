<template>
<h2>hi {{store.state.name}}</h2>
<button @click="changeName">change name</button>
</template>

<script>
import {useStore} from 'vuex'
export default {
  
  setup(){
    const store=useStore()

    const changeName=()=>{
      store.commit("changeName"); //commit is for mutations for changing state
      store.dispatch("fetchName"); //dispatch for actions like api call
    }

    return {
      store,
      changeName
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
