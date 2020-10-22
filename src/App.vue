<template>
  <div>hi Vue3</div>
  <HelloWorld></HelloWorld>
  <Fee></Fee>
</template>

<script>
import Fee from "./components/Fee.vue";
export default {
  name: 'App',
  components:{
    HelloWorld,
    Fee
  }  
}
</script>
