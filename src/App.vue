<template>
  <div id="app" style="height: 100%">


    <drawer
      :show.sync="drawerVisibility"
      :show-mode="showModeValue"
      :placement="showPlacementValue"
      :drawer-style="{'background-color':'#35495e', width: '200px',height:'100px'}">

      <div slot="drawer" style="width: 100%;height: 100%;">
        <h1 style="color: red">qwer</h1>
        <h1>23423</h1>
        <h1>vcbxb</h1>
      </div>
      <router-view></router-view>

    </drawer>

  </div>
</template>

<script>
  import {Drawer, Flexbox, FlexboxItem} from 'vux'

  export default {
    name: 'app',
    data() {
      return {
        drawerVisibility: false,
        showMode: 'overlay',
        showModeValue: 'overlay',
        showPlacement: 'left',
        showPlacementValue: 'left'
      }
    },
    components: {
      Drawer
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: rgba(219, 217, 222, 0.4);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
