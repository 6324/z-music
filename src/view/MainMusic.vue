<template>
  <flexbox :orient="'vertical'" :gutter="0">
    <flexbox-item>
      <swiper :list="swiperList"
              :loop="true"
              :auto="true"
              dots-class="custom-bottom"
              :aspect-ratio="0.38"
              dots-position="right"></swiper>
    </flexbox-item>
    <flexbox-item class="main">
      <span style="width: 2px;display: block;background-color: red;height: 10px;align-self: center"></span>
      <p style="font-size: 10px;color: #666666;margin-left: 10px">推荐歌单 ></p>
    </flexbox-item>
    <flexbox-item>
      <div class="gedan">
        <personalized :key="items.id" :style="{flexGrow:'1'}" v-for="items in personalizedList" :id="items.id"
                      :img-url="items.picUrl"
                      :name="items.name" :playCount="items.playCount"></personalized>
      </div>

    </flexbox-item>
  </flexbox>
</template>

<script>
  import {Flexbox, FlexboxItem, Swiper} from 'vux'
  import Personalized from '../components/Personalized'
  import http from '../utils/http'
  import {mapGetters} from 'vuex'

  export default {
    name: "main-music",
    data() {
      return {
        swiperList: [],
        personalizedList: []
      }
    }, components: {
      Flexbox,
      FlexboxItem,
      Swiper,
      Personalized
    },
    mounted() {
      this.init()
    },

    methods: {

      init() {
        this.getBanner()
        this.getPersonalized()
      },

      getBanner() {
        var _this = this
        http.get('banner', {}, 'banner', function (data) {
          let banners = data.banners
          for (var i = 0; i < banners.length; i++) {
            let banner = {}
            banner.url = 'javascript:'
            banner.img = banners[i].pic
            _this.swiperList.push(banner)
          }
        }, function (err) {

        })
      },
      getPersonalized() {//获取歌单列表
        var _this = this
        http.get('personalized', {}, '歌单', function (data) {
          _this.personalizedList = data.result
        }, function (err) {

        })
      }
    }
  }
</script>

<style scoped>
  .main {
    display: -webkit-flex;
  }


  .gedan {
    display: -webkit-flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

  }
</style>
