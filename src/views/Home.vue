<template>
    <div>
        <Topnav></Topnav>
        
        <div class="banner">
            <h1>轱辘UI</h1>
            <h2>一个厉害的UI框架</h2>
            <p class="actions">
                <a target="_blank" href="https://github.com/feelonewong/Vue3Wheel">Github</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import Topnav from "../components/Topnav.vue"
export default {
    components:{
        Topnav
    }
}
</script>

<style lang="scss" scoped>
  .banner{
      background-color: lightgreen;
      padding: 100px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      > .actions{
          margin: 20px;
      }
      > .actions a{
         
          margin: 0 8px;
          background-color: #fff;
          display: inline-block;
          $h: 28px;
          height: $h;
          line-height: $h;
          border-radius: $h/2;
          padding: 0 8px;
      }
  }
</style>