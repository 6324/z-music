<template>
  <div>
    <div class="main" :style="{backgroundImage:'url('+currentMusic.img+')'}">
    </div>
    <div
      style="position: absolute;width: 100%;height: 100%; display: -webkit-flex;flex-direction: column; justify-content: space-between;">
      <div>
        <div class="tool-bar">
          <flexbox class="toolbar" :gutter="0">
            <flexbox-item class="toobar-menu-left" :span="2">
              <icon @click.native="$router.go(-1)" :scale="2.6" class="toolbar-menu-1" name="return"></icon>
            </flexbox-item>
            <flexbox-item class="toobar-menu-center" :span="8">
              <div class="toobar-menu-center-d">
                <p style=" font-size: 15px;">{{currentMusic.name}}</p>
                <p class="author">{{currentMusic.author}} ></p>
              </div>

            </flexbox-item>
            <flexbox-item class="toobar-menu-right" :span="2">
              <icon :scale="3" class="toolbar-menu-5" name="share"></icon>
            </flexbox-item>
          </flexbox>
          <div
            style="display: block;height: 0.5px;width: 100%; margin-top:-5px;background: radial-gradient(#ededed -90%,transparent 100%);"></div>
        </div>

        <div style="margin-top: 50px;position: center; z-index: 1;flex: 1">
          <base-cd :img="currentMusic.img" :state="songState"></base-cd>
        </div>
      </div>
      <div>
        <div style="width: 80%;height: 70px; margin-top: 30px; display: -webkit-flex; margin: auto ">
          <flexbox :gutter="0" :align="'center'">
            <flexbox-item class="music-menu">
              <icon :scale="2.5" name="like"></icon>
            </flexbox-item>
            <flexbox-item class="music-menu">
              <icon :scale="2.5" name="download"></icon>
            </flexbox-item>
            <flexbox-item class="music-menu">
              <icon :scale="2.5" name="message-white"></icon>
            </flexbox-item>
            <flexbox-item class="music-menu">
              <icon :scale="2.2" name="more"></icon>
            </flexbox-item>

          </flexbox>
        </div>
        <div class="music-contrler">
          <flexbox :gutter="0" :orient="'vertical'" :justify="'space-between'">
            <flexbox-item style="">
              <flexbox :gutter="0" style="padding: 0 5% 0 5%;color: white;">
                {{currentMusic.f1}}
                <flexbox-item style="height: 30px; width: 100%;padding:0 10px 0 10px;">
                  <Slider style="margin-bottom: 10px" :tip-format="hideFormat" @on-change="skip"
                          :value="currentMusic.currentTime"
                          :max="currentMusic.duration"></Slider>

                  <!--<Slider style="margin-bottom: 10px"  @on-change="test"  :max="100"></Slider>-->
                  <!--<Slider style="margin-bottom: 10px"  @on-input="test"  :max="100"></Slider>-->
                </flexbox-item>
                {{currentMusic.f2}}
              </flexbox>
            </flexbox-item>
            <flexbox-item style="width: 100%;height: 80px;margin-top: 10px">
              <flexbox :gutter="0" style="margin: auto" :align="'center'">
                <flexbox-item class="music-contrler-b" :span="2">
                  <icon :scale="2.6" name="loop-music"></icon>
                </flexbox-item>
                <flexbox-item class="music-contrler-b" :span="3">
                  <icon :scale="3.7" name="previous-music"></icon>
                </flexbox-item>
                <flexbox-item class="music-contrler-b" :span="2">
                  <icon v-if="!songState" @click.native="play" :scale="5.3" name="play-white"></icon>
                  <icon v-else @click.native="play" :scale="5.3" name="pause-white"></icon>
                </flexbox-item>
                <flexbox-item class="music-contrler-b" :span="3">
                  <icon :scale="3.7" name="next-music"></icon>
                </flexbox-item>
                <flexbox-item class="music-contrler-b" :span="2">
                  <icon :scale="2.7" name="music-list"></icon>
                </flexbox-item>

              </flexbox>
            </flexbox-item>
          </flexbox>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem, Range} from 'vux'
  import BaseCd from '../../components/BaseCd'
  import {mapGetters, mapActions} from 'vuex'
  import stringUtil from '../../utils/string'

  export default {
    name: "music-info",
    data() {
      return {
        cvalue: 0,
        hideFormat() {
          return null
          // return stringUtil.timeFormat(this.currentMusic.currentTime)
        }
      }
    },
    components: {
      BaseCd,
      Flexbox,
      FlexboxItem,
      Range,
    },
    computed: {
      ...mapGetters({songState: 'SongState'}),
      ...mapGetters({currentMusic: 'SongInfo'}),

    },
    mounted() {
      //初始化音乐长度
      this.init()
    },
    destroyed() {
      var musicBar = document.getElementById('music-bar');
      musicBar.style.display = ''
    },
    methods: {

      test(a){
       console.log(a)
      },
      ...mapActions(['setSongState']),
      format(val) {
        return 'Progress: ' + val + '%';
      },
      init() {
        //此界面不显示底部的bar
        var musicBar = document.getElementById('music-bar');
        musicBar.style.display = 'none'

        this.addEventListeners()
      },
      ...mapActions(['setMusicLenth']),
      play() {
        var audio = document.getElementById('audio');
        if (!this.songState) {
          audio.play();
          this.setSongState(true)
        } else {
          audio.pause();
          this.setSongState(false)
        }
      },
      addEventListeners: function () {
        var audio = document.getElementById('audio');
        const self = this;
        audio.addEventListener('timeupdate', self._currentTime)
        audio.addEventListener('canplay', self._durationTime)
      },
      removeEventListeners: function () {
        var audio = document.getElementById('audio');
        const self = this;
        audio.removeEventListener('timeupdate', self._currentTime)
        audio.removeEventListener('canplay', self._durationTime)
      },
      _currentTime: function () {
        var audio = document.getElementById('audio');

        let data = {
          currentTime: parseInt(audio.currentTime),
          duration: parseInt(audio.duration)
        }
        this.setMusicLenth(data)
      },
      _durationTime: function () {
        var audio = document.getElementById('audio');

        let data = {
          currentTime: parseInt(audio.currentTime),
          duration: parseInt(audio.duration)
        }
        this.setMusicLenth(data)
      },
      skip(v) {
        console.log(v)
        var audio = document.getElementById('audio');
        let data = {
          currentTime: parseInt(v),
          duration: parseInt(audio.duration)
        }
        this.setMusicLenth(data)

        this.cvalue = v
        audio.currentTime = this.currentMusic.currentTime

      }
    }
  }

</script>

<style scoped>
  .main {
    position: absolute;
    z-index: -3;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    -webkit-filter: blur(50px); /* Chrome, Opera */
  }

  .tool-bar {
    /*background-color: #EC8B89;*/
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 55px;
    z-index: 10;
  }

  .main-cd {
    position: absolute;
    margin-top: 80px;
  }

  .toolbar {
    /*background-color: #EC8B89;*/
    color: white;
    width: 100%;
    height: 55px;

  }

  .toobar-menu-left {
    display: -webkit-flex;
    align-items: center;
  }

  .toobar-menu-center {
    /*background-color: #0BB20C;*/
    height: 50px;
    display: -webkit-flex;
  }

  .toobar-menu-right {
    display: -webkit-flex;
    justify-content: flex-end;
    align-items: center;
  }

  .toolbar-menu-1 {
    margin-left: 20%;
  }

  .author {
    color: #fbfbfb;
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .toolbar-menu-5 {
    margin-right: 20%;
  }

  .music-menu {
    text-align: center;
    align-self: center;
  }

  .music-contrler {
    width: 100%;
    height: 120px;
    margin-bottom: 0%;
    /*background-image: url("../../assets/img/test-bg.png");*/
    background-size: 100%
  }

  .music-contrler-b {
    text-align: center;
    align-self: center;
  }

</style>
