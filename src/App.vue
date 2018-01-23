<template>
  <div id="app" style="height: 100%">
    <transition name="fade">
      <loading :show="false" :text="'加载中'"></loading>
    </transition>
    <drawer
      :show.sync="slidingState"
      :show-mode="showModeValue"
      :placement="showPlacementValue"
      :drawer-style="{'background-color':'#f2f0f5', width: '85%',height:'100%'}">

      <div slot="drawer" style="width: 100%;height: 100%;">
        <main-sliding></main-sliding>
      </div>
      <router-view></router-view>

    </drawer>

  </div>
</template>

<script>
  import {Drawer, Loading, ViewBox} from 'vux'
  import MainSliding from "./components/MainSliding";
  import {mapGetters} from 'vuex'
  export default {
    name: 'app',
    data() {
      return {
        showMode: 'overlay',
        showModeValue: 'overlay',
        showPlacement: 'left',
        showPlacementValue: 'left'
      }
    },
    components: {
      Drawer,
      Loading,
      ViewBox,
      MainSliding
    },
    computed:{
      slidingState:{
        get(){
          console.log('get'+this.$store.state.appConfig.slidingState)
          return this.$store.state.appConfig.slidingState
        // ...mapGetters({slidingState: 'SlidingState'})
        },
        set(value){
          console.log('set')
          this.$store.commit('SET_SILIDING', !this.$store.state.appConfig.slidingState)
        }
      }

    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    background-color: #fcfaff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
