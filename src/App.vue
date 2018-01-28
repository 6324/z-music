<template>
  <div id="app" style="height: 100%">
    <loading :show="false" :name="'fade'" :text="'加载中'"></loading>
    <drawer
      :show.sync="slidingState"
      :show-mode="showModeValue"
      :placement="showPlacementValue"
      :drawer-style="{'background-color':'#f2f0f5', width: '85%',height:'100%'}">

      <div slot="drawer" style="width: 100%;height: 100%;">
        <main-sliding></main-sliding>
      </div>

      <router-view style="height: 93%"></router-view>
      <div class="test" v-if="songList.length>0">
        <!--<p>{{music.name}}</p>-->
        <audio style="width: 100%; background-color: #fff" @pause="pause" autoplay @play="play" id="audio"
               :src="currentMusic.url" controls="controls">
        </audio>
      </div>
    </drawer>

  </div>
</template>
<script>
  import {Drawer, Loading, ViewBox} from 'vux'
  import MainSliding from "./components/MainSliding";
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'app',
    data() {
      return {
        showMode: 'overlay',
        showModeValue: 'overlay',
        showPlacement: 'left',
        showPlacementValue: 'left',
      }
    },
    components: {
      Drawer,
      Loading,
      ViewBox,
      MainSliding
    },
    computed: {
      slidingState: {
        get() {
          return this.$store.state.appConfig.slidingState
          // ...mapGetters({slidingState: 'SlidingState'})
        },
        set(value) {
          this.$store.commit('SET_SILIDING', !this.$store.state.appConfig.slidingState)
        }
      },
      ...mapGetters({songList: 'SongList'}),
      ...mapGetters({currentMusic: 'Music'}),
      ...mapGetters({SongState: 'Music'}),


    },
    watch: {
      currentMusic: function (newState, oldState) {

      }
    },

    methods: {
      ...mapActions(['setSongState']),
      pause() {
        console.log('播放暂停')
        this.setSongState(false)
      },
      play() {
        console.log('播放开始')
        this.setSongState(true)
      },


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

  .test {
    box-shadow: 0px 3px 20px 0px rgba(177, 177, 177, 0.51);
    width: 100%;
    height: 7%;
    position: absolute; /*这里一定要设置*/
    z-index: 999999; /*这里是该元素与显示屏的距离，据说越大越好，但是我也没有看到效果，因为没有它也是可以的*/
    -webkit-transition: .5s ease-in-out; /* css的transition允许css的属性值在一定的时间内从一个状态平滑的过渡到另一个状态 */
    -moz-transition: .5s ease-in-out; /*这里为了兼容其他浏览器*/
    -o-transition: .5s ease-in-out;
    background-color: rgba(255, 255, 255, 0.36);
  }

  body {
    background-color: #fcfaff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
