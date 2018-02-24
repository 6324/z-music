<template>
  <div id="app" style="height: 100%">
    <loading :show="isLoding" loading=false></loading>
    <audio ref="audio" style="display: none" id="audio" autoplay
           :src="currentMusic.url" controls="controls">
    </audio>
    <drawer
      :show.sync="slidingState"
      :show-mode="showModeValue"
      :placement="showPlacementValue"
      :drawer-style="{'background-color':'#f2f0f5', width: '85%',height:'100%'}">

      <div slot="drawer" style="width: 100%;height: 100%;">
        <main-sliding></main-sliding>
      </div>
      <div :class="[{'no-music':currentMusic.id===''},{'has-music':currentMusic.id!=''}]">
        <router-view></router-view>
      </div>
      <div id="music-bar" @click="toMusicInfo" v-if="currentMusic.id!=''">
        <div
          :style="{backgroundImage:'url('+currentMusic.img+')',height:'40px',width:'40px' ,backgroundSize:'100% 100%'}"></div>
        <div class="bar-music-name">
          <p style="color: black;font-size: 13px">{{currentMusic.name}}</p>
          <p style="color: #585858;font-size: 10px">{{currentMusic.author}}</p>
        </div>
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
    mounted() {
      this.initMusic()
    },
    computed: {
      slidingState: {
        get() {
          return this.$store.state.appConfig.slidingState
        },
        set(value) {
          this.$store.commit('SET_SILIDING', !this.$store.state.appConfig.slidingState)
        }
      }, isLoding: {
        get() {
          return this.$store.state.appConfig.isLoading
        },
        set(value) {
          this.$store.commit('SET_LOADING', !this.$store.state.appConfig.isLoading)
        }
      },
      ...mapGetters({songList: 'SongList'}),
      ...mapGetters({currentMusic: 'SongInfo'}),
      ...mapGetters({SongState: 'SongState'}),

    },
    watch: {
      currentMusic: function (newState, oldState) {

      }
    },

    methods: {
      ...mapActions(['setSongState']),
      ...mapActions(['setMusicLenth']),
      toMusicInfo() {
        this.$router.push({name: 'music', params: {'id': this.currentMusic.id}})
      },
      initMusic() {
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

  #music-bar {
    box-shadow: 0px 3px 20px 0px rgba(145, 145, 145, 0.51);
    width: 100%;
    height: 7%;
    padding: 5px 20px 5px 20px;
    background-color: #fff;
    display: -webkit-flex;
    align-items: center;
  }

  body {
    background-color: #fcfaff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
    /*display: none;*/
  }

  .no-music {
    height: 100%;
  }

  .has-music {
    height: 93%;
  }

  .bar-music-name {
    margin-left: 10px;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
