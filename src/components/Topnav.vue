<template>
    <div>
          <div class="topnav">
            <div class="logo">Logo</div>
            <ul class="menu">
                <li>菜单1</li>
                <li>菜单2</li>
                <li>菜单3</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .topnav {
        background-color: pink;
        display: flex;
        padding: 16px;
        > .logo {
            max-width: 6em;
            margin-right: auto;
        }
        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;
            > li {
                margin: 0 1em;
            }
        }
    }
</style>