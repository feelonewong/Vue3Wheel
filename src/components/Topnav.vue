<template>
    <div>
          <div class="topnav">
            <div class="logo">Logo</div>
            <ul class="menu">
                <li>菜单1</li>
                <li>菜单2</li>
                <li>菜单3</li>
            </ul>
            <span class="toggleAside"  @click="toggleMenu"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    setup(){
        const asideVisible = inject<Ref<boolean>>("asideVisible");
        const toggleMenu = ()=>{
            asideVisible.value = !asideVisible.value;
        }
        return{
            toggleMenu
        }
    }
}
</script>

<style lang="scss" scoped>
    .topnav {
        background-color: pink;
        display: flex;
        padding: 16px;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 10;
        > .logo {
            max-width: 6em;
            margin-right: auto;
            cursor: pointer;
        }
        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;
            > li {
                margin: 0 1em;
            }
        }
         > .toggleAside{
             width: 24px;
             height: 24px;
             background-color: red;
             display: inline-block;
             position: absolute;
             left: 16px;
             top: 50%;
             transform: translateY(-50%);
             display: none;
        }
        @media (max-width: 768px) {
            > .menu{ display: none;}
            > .logo{ margin: 0 auto; }
            > .toggleAside{ display: block;}
        }
       
    }
</style>