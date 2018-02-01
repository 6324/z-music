<template>
  <view-box>
  <div style="width: 100%; height: 100%;">
    <sticky scroll-box="vux_view_box_body" :offset="0">
    <flexbox :gutter="0" class="toobar">
      <flexbox-item class="toobar-menu-left" :span="1">
        <icon @click.native="$router.go(-1)" :scale="2.6" class="toolbar-menu-1" name="return"></icon>
      </flexbox-item>
      <flexbox-item class="toobar-menu-center" :span="10">
        <input v-model="keyword" height="30px" type="search" class="input" maxlength="30"/>
      </flexbox-item>
      <flexbox-item class="toobar-menu-right" :span="1">
        <icon @click.native="search" :scale="2.6" class="toolbar-menu-5" name="search"></icon>
      </flexbox-item>
    </flexbox>
    </sticky>
    <div style="margin-top: 10px;background-color: #fff">
      <base-song-menu @click.native="play(items.id,items.picUrl,items.name,items.artists[0].name)"
                      v-for="(items,index) in searchList"
                      :key="items.id"
                      :ar="items.artists[0].name"
                      :name="items.name"
                      :al="items.album.name"
                      :index="index"
      ></base-song-menu>
    </div>
  </div></view-box>
</template>

<script>
  import {Search, Flexbox, FlexboxItem, Sticky,ViewBox} from 'vux'
  import {mapActions, mapGetters} from 'vuex'
  import BaseSongMenu from '../../components/BaseSongMenu'
  export default {
    name: "search-main",
    components: {
      ViewBox,
      Search,
      Flexbox,
      FlexboxItem,
      Sticky,
      BaseSongMenu
    },
    data() {
      return {
        keyword: '',
      }
    },
    computed:{
      ...mapGetters({searchList: 'SearchSong'}),
    },
    methods: {
      ...mapActions(['searchSong']),
      search() {
        this.searchSong(this.keyword)
      },
      ...mapActions(['setSongInfo']),
      play(id) {
        this.$router.push({name: 'music', params: {'id': id}})
        this.setSongInfo(id)

      }
    }
  }
</script>

<style scoped>
  .toobar {
    background-color: #de071a;
    width: 100%;
    height: 50px;
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
    margin-left: 30%;
  }

  .toolbar-menu-5 {
    margin-right: 30%;
  }

  .input {
    color: #fff;
    outline: none;
    height: 30px;
    margin-left: 20px;
    font-size: 15px;
    width: 100%;
    background-color: #de071a;
    border-color: #fbfbfb;
    border-style: solid;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px
  }

</style>
