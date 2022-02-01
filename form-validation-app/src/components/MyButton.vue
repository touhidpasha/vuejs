<template>
<button v-bind:style="{background:background,color:color}">Button</button>
</template>
<script>
export default {
    props:{
        background:{
            type:String
        },
        color:{
            type:String
        },
        disable:{
            type:Boolean
        }
    }
}
</script>
<style>
button{

}
</style>