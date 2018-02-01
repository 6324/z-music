<template xmlns:image="http://www.w3.org/1999/html">
  <view-box>
    <flexbox :gutter="0" :orient="'vertical'">
      <flexbox-item>
        <div style="width: 100%;">
          <!--<div class="foofoo" :style="{backgroundImage: 'url(' + personalizedInfo.coverImgUrl + ')'}">-->
          <!--</div>-->
          <div class="barbar">

            <div style="height: 60px ;width: 100%;">
              <flexbox class="toolbar" :gutter="0">
                <flexbox-item class="toobar-menu-left" :span="2">
                  <icon @click.native="$router.go(-1)" :scale="2.6" class="toolbar-menu-1" name="return"></icon>
                </flexbox-item>
                <flexbox-item class="toobar-menu-center" :span="8">
                  <div class="toobar-menu-center-d">
                    <p style=" font-size: 15px;">歌单</p>
                    <p class="description">{{personalizedInfo.description}}</p>
                  </div>

                </flexbox-item>
                <flexbox-item class="toobar-menu-right" :span="2">
                  <icon :scale="3" class="toolbar-menu-5" name="search"></icon>
                </flexbox-item>
              </flexbox>

            </div>
            <flexbox :gutter="0">
              <flexbox-item>
                <personalized class="personalized-img" :imgw="'130px'" :imgh="'130px'"
                              :img-url="personalizedInfo.coverImgUrl"
                              :playCount="personalizedInfo.playCount">

                </personalized>
              </flexbox-item>
              <flexbox-item :style="{height:'130px',color:'white',marginLeft:'-20px',marginRight:'10px'}">
                <flexbox :orient="'vertical'">
                  <flexbox-item>
                    <p style="font-size:15px">{{personalizedInfo.name}}</p></flexbox-item>
                  <flexbox-item class="creator">
                    <div class="creator-head"
                         :style="{backgroundImage:'url('+personalizedInfo.creator.avatarUrl+')' }"></div>
                    <p style="margin-left: 10px; font-size: 10px">{{personalizedInfo.creator.nickname}} ></p>
                  </flexbox-item>
                </flexbox>
              </flexbox-item>
            </flexbox>

            <flexbox style="margin-top: 20px;" :gutter="0" :justify="'space-around'">
              <flexbox-item class="menu-main">
                <icon :scale="2.5" name="new-folder"></icon>
                <p>{{personalizedInfo.subscribedCount}}</p>
              </flexbox-item>
              <flexbox-item class="menu-main">
                <icon :scale="2.5" name="message-white"></icon>
                <p>{{personalizedInfo.commentCount}}</p>
              </flexbox-item>
              <flexbox-item class="menu-main">
                <icon :scale="2.5" name="share"></icon>
                <p>{{personalizedInfo.shareCount}}</p>
              </flexbox-item>
              <flexbox-item class="menu-main">
                <icon :scale="2.5" name="download"></icon>
                <p>下载</p>
              </flexbox-item>
            </flexbox>

          </div>
        </div>
      </flexbox-item>

      <span style="height: 0.5px;background-color: #e6e6e6; display: block;width: 100%"></span>

      <flexbox-item style=" background-color: #fff">
        <sticky scroll-box="vux_view_box_body" :offset="0">
          <flexbox style="height: 50px; background-color: #FFFFFF" :gutter="0" :align="'center'">

            <flexbox-item class="center-menu-left" :span="2">
              <icon :scale="2.5" class="toolbar-menu-1" name="play"></icon>
            </flexbox-item>
            <flexbox-item :span="8">
              <span style="font-size: 12px;color: #333333">播放全部</span>
              <span style="font-size: 10px;color: #aaaaaa">共({{personalizedInfo.tracks.length}})首</span>
            </flexbox-item>
            <flexbox-item :span="2"></flexbox-item>
          </flexbox>
        </sticky>
      </flexbox-item>

      <flexbox-item style="background-color: #fff">
        <!--<scroller lock-x scrollbar-y ref="scroller">-->
        <div>
          <base-song-menu @click.native="play(items.id,items.al.picUrl,items.name,items.ar[0].name)"
                          v-for="(items,index) in personalizedInfo.tracks"
                          :key="items.id"
                          :name="items.name"
                          :alia="items.alia[0]"
                          :ar="items.ar[0].name"
                          :al="items.al.name"
                          :index="index"
          ></base-song-menu>
        </div>
        <!--</scroller>-->
      </flexbox-item>

    </flexbox>
  </view-box>
</template>

<script>
  import {Flexbox, FlexboxItem, XHeader, Scroller, Sticky, ViewBox} from 'vux'
  import Personalized from '../../components/Personalized'
  import BaseSongMenu from '../../components/BaseSongMenu'
  import http from '../../utils/http'
  import {mapActions} from 'vuex'

  export default {
    name: "main-personalized",
    data() {
      return {
        personalizedInfo: {
          coverImgUrl: '',
          playCount: 0,
          name: '',
          description: '',
          subscribedCount: '',//订阅数
          commentCount: '',//评论数
          shareCount: '',//分享数
          creator: {
            avatarUrl: '',
            nickname: ''
          },
          tracks: [],
        }
      }
    },
    mounted() {
      this.getPersonalizedInfo(this.$route.params.id)
    },
    components: {
      Flexbox,
      FlexboxItem,
      XHeader,
      Personalized,
      BaseSongMenu,
      Scroller,
      Sticky,
      ViewBox
    },
    methods: {
      getPersonalizedInfo(id) {//获取歌单详情
        var _this = this
        http.get('playlist/detail', {id: id}, '获取歌单详情', function (data) {
          _this.personalizedInfo.coverImgUrl = data.playlist.coverImgUrl
          _this.personalizedInfo.playCount = data.playlist.playCount
          _this.personalizedInfo.name = data.playlist.name
          _this.personalizedInfo.creator.avatarUrl = data.playlist.creator.avatarUrl
          _this.personalizedInfo.creator.nickname = data.playlist.creator.nickname
          _this.personalizedInfo.description = data.playlist.description
          _this.personalizedInfo.subscribedCount = data.playlist.subscribedCount
          _this.personalizedInfo.commentCount = data.playlist.commentCount
          _this.personalizedInfo.shareCount = data.playlist.shareCount
          _this.personalizedInfo.tracks = data.playlist.tracks

        }, function (err) {

        })
      },
      ...mapActions(['setSongInfo']),
      play(id, img,name,author) {
        this.$router.push({name: 'music', params: {'id': id}})
        this.setSongInfo(id)
      }
    }
  }
</script>

<style scoped lang="less">
  .foofoo {
    background-size: 100%;
    width: 100%;
    height: 100%;
    -webkit-filter: blur(100px); /* Chrome, Opera */
    float: left;
  }

  .barbar {
    /*position: absolute;*/
    background-color: #9B9B9B;
  }

  .toolbar {
    color: white;
    width: 100%;
    height: 60px;
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

  .toobar-menu-center-d {
    display: -webkit-flex;
    flex-direction: column;
  }

  .description {
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    /*-webkit-transform-origin-x: 0;*/
    /*-webkit-transform: scale(0.70);*/
  }

  .toobar-menu-right {
    display: -webkit-flex;
    justify-content: flex-end;
    align-items: center;
  }

  .toolbar-menu-1 {
    margin-left: 20%;
  }

  .toolbar-menu-5 {
    margin-right: 20%;
  }

  .personalized-img {

  }

  .creator-head {
    background-size: 100% 100%;
    height: 30px;
    width: 30px;
    border-radius: 50% 50%;
  }

  .creator {

    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
  }

  .menu-main {
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .menu-main p {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 10px;
  }

  .center-menu-left {
    display: flex;
    justify-content: center;
  }
</style>
