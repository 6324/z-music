<template>
  <flexbox :orient="'vertical'" :gutter="0">
    <flexbox-item>
      <swiper :list="banners"
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
        <personalized :key="items.id" :style="{flexGrow:'1'}" v-for="items in personalizeds" :id="items.id"
                      :img-url="items.picUrl"
                      :name="items.name" :playCount="items.playCount"></personalized>
      </div>

    </flexbox-item>
  </flexbox>
</template>

<script>
  import {Flexbox, FlexboxItem, Swiper} from 'vux'
  import Personalized from '../components/Personalized'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "main-music",
    data() {
      return {
        swiperList: []
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
    computed: {
      ...mapGetters({banners: 'GetBanner'}),
      ...mapGetters({personalizeds: 'GetPersonalized'})
    },
    methods: {
      ...mapActions(['setBanners', 'setPersonalizeds']),
      init() {
        this.setBanners()
        this.setPersonalizeds()
      },
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
