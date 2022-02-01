<template>
<label :for="name">{{name}}</label>
<label id="error">{{error}}</label>
<input  type="text" :id="name" :placeholder="name" v-on:input="input"/>
</template>
<script>
export default {
    props:{
        name:{
            type: String,
        }
    },
      data(){
          return{
    username:""
    }

  },
  methods:{
    input($event){
      this.username=$event.target.value;

    }
  },
  computed:{
    error(){
            //   console.log(this.username)
        if(this.username.length>0 && this.username.length<5)
        return "username must be greater then 5 characters"

        else
        return ""
    }
  }

}
</script>
<style>
#error{
    color: red;
}
</style>