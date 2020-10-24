<template>
    <div>
          <Topnav></Topnav>
        <div class="content">
            <aside>侧边栏</aside>
            <main>主内容区</main>
        </div>
    </div>
</template>

<script>
import Topnav from "../components/Topnav.vue";
export default {
    components:{
        Topnav
    }
}
</script>