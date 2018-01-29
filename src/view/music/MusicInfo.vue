<template>
  <div>
    <div class="main" :style="{backgroundImage:'url('+currentMusic.img+')'}">
    </div>
    <div style="position: absolute;width: 100%;height: 100%; display: -webkit-flex;flex-direction: column; justify-content: space-between;">
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
        <div class="music-contrler"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem} from 'vux'
  import BaseCd from '../../components/BaseCd'
  import {mapGetters} from 'vuex'

  export default {
    name: "music-info",
    components: {
      BaseCd,
      Flexbox,
      FlexboxItem,
    },
    computed: {
      ...mapGetters({songState: 'SongState'}),
      ...mapGetters({currentMusic: 'Music'})
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
    color: #d9d9d9;
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
    background-image: url("../../assets/img/test-bg.png");
    background-size: 100%
  }
</style>
