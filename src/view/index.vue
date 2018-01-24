<template>
  <div style="height: 100%;">
  <view-box>
    <flexbox :gutter="0" :orient="'vertical'">
      <!--toolbar-s-->
      <flexbox-item>
        <flexbox :gutter="0" class="toobar">
          <flexbox-item class="toobar-menu-left" :span="3">
            <icon @click.native="setSliding" :scale="3" class="toolbar-menu-1" name="menu"></icon>
          </flexbox-item>
          <flexbox-item class="toobar-menu-center" :span="6">
            <icon :scale="3" name="music"></icon>
            <icon :scale="3" name="logo"></icon>
            <icon :scale="3" name="friends"></icon>
          </flexbox-item>
          <flexbox-item class="toobar-menu-right" :span="3">
            <icon :scale="3" class="toolbar-menu-5" name="search"></icon>
          </flexbox-item>
        </flexbox>
      </flexbox-item>
      <!--toolbar-e-->

      <!--tab-s-->
      <flexbox-item>
        <div style="height: 40px;">
          <sticky scroll-box="vux_view_box_body" :offset="0">
            <tab class="tab" :active-color="'#bf1300'" :custom-bar-width="'50%'" :line-width="2">
              <tab-item @on-item-click="selectTab('/music')" class="tab-item" selected>音乐</tab-item>
              <tab-item @on-item-click="selectTab('/vedio')" class="tab-item">视频</tab-item>
              <tab-item @on-item-click="selectTab('/dj')" class="tab-item">电台</tab-item>
            </tab>
          </sticky>
        </div>
      </flexbox-item>
      <!--tab-e-->
      <router-view></router-view>
    </flexbox>
  </view-box></div>
</template>


<script>

  import http from '../utils/http'
  import {XHeader, Tab, TabItem, Flexbox, FlexboxItem, Sticky,ViewBox} from 'vux'

  import log from "../utils/log";

  export default {
    name: "index",
    components: {
      XHeader,
      Tab,
      TabItem,
      FlexboxItem,
      Flexbox,
      Sticky,
      ViewBox,
    },
    data() {
      return {
        swiperList: []
      }
    },
    methods: {
      selectTab: function (url) {
        this.$router.push(url);
      },
      getBanner: function () {
        var _this = this
        http.get('banner', {}, '测试-banner', function (data) {
          let banners = data.banners
          for (var i = 0; i < banners.length; i++) {
            let banner = {}
            banner.url = 'javascript:'
            banner.img = banners[i].pic
            banner.title = banners[i].typeTitle
            _this.swiperList.push(banner)
          }
        }, function (err) {

        })
      },
      setSliding(){
        this.$store.dispatch('setSlidingState')
        // console.log('显示/隐藏侧边栏')
      }
    }
  }
</script>

<style scoped>

  .toobar {
    background-color: #bf1300;
    width: 100%;
    height: 50px;
  }

  .tab {
    height: 40px;
  }

  .tab .tab-item {
    line-height: 40px;
  }

  .toobar-menu-left {
    display: -webkit-flex;
    align-items: center;
  }

  .toobar-menu-center {
    display: -webkit-flex;
    justify-content: space-around;
    align-items: center;
  }

  .toobar-menu-right {
    display: -webkit-flex;
    justify-content: flex-end;
    align-items: center;
  }

  .toolbar-menu-1 {
    margin-left: 10%;
  }

  .toolbar-menu-5 {
    margin-right: 10%;
  }

</style>
