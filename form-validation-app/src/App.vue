<template>
<h3>welcome</h3>
<MyInput name="username" />
<MyButton background="green" disable="false" color="white" 
/>
</template>

<script>
import MyButton from "../src/components/MyButton"
import MyInput from "../src/components/MyInput"
export default ({
  components:{
    MyButton,
    MyInput
  },
})
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
