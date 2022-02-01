<template>
<h3>welcome</h3>
<h2>{{name}}</h2>
<button @click="swapName">change name</button>
<button @click="increment">increment</button>
<h4>{{currretnValue}}</h4>

</template>

<script>
import {ref,computed,watchEffect} from 'vue'
export default {

  setup(){
    var name=ref("touhid")
    var inc=ref(1)
    const swapName=()=>{
      // console.log(name.value);
       name.value=name.value=="touhid"?"pasha":"touhid";
       return name;
    }
    const increment=()=>{
      // console.log("inc")
      inc.value=inc.value+1;
    }
    const  currretnValue=computed(()=>{
      return inc.value;
    })

    watchEffect(()=>{
      console.log(inc.value)
    })

    return{
      name,
      swapName,
      inc,
      increment,
      currretnValue
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
