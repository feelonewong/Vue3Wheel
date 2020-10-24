<template>
  <div>
    <Topnav></Topnav>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch"> Switch组件 </router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
          <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref, ref } from 'vue';
import Topnav from "../components/Topnav.vue";
export default {
  setup(){
      const asideVisible = inject<Ref<Boolean>>("asideVisible");
      return{
          asideVisible
      }
  },  
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
aside {
  background-color: lightblue;
  width: 150px;
  padding: 16px;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
@media (max-width: 768px) {
    aside{
        position: fixed;
  top: 53px;
  left: 0;
    }
}
</style>