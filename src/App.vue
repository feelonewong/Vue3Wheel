<template>
  <div>hi Vue3</div>
  <router-link to="/">Fee组件</router-link> | 
  <router-link to="/xxx">Fee2组件</router-link>
  <hr>
  
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
 
}
</script>
