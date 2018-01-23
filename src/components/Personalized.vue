<template>
  <div class="main">
    <div class="img" :style="{backgroundImage:'url(' + imgUrl + ')'}">
      <div class="play-count">
        <icon :scale="1.5" style="margin-right: 2px" name="head-set"></icon>
        <p>{{numberConvert(playCount)}}</p></div>
    </div>
    <p class="name">{{name}}</p>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem} from 'vux'
  import stirngUtil from '../utils/string'

  export default {
    name: "personalized",
    props: {
      imgUrl: {
        type: String,
        default: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516461632805&di=b75f413478a99ae2f620b68fa32cc890&imgtype=0&src=http%3A%2F%2Fres2.esf.leju.com%2Fesf_www%2Fstatics%2Fimages%2Fdefault-img%2Fdetail.png'
      },
      name: {
        type: String,
        default: '想起喜欢的人，冬天也变得温暖'
      },
      playCount: {
        type: Number,
        default: 10000,
      },
    },
    methods: {
      numberConvert(number) {
        return stirngUtil.numberConvert(number)
      }
    },
    components: {Flexbox, FlexboxItem}
  }
</script>

<style scoped>
  .main {
    display: -webkit-flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
    width: 33.33%;
    height: auto;
  }

  .img {
    display: -webkit-flex;
    flex-direction: row;
    width: 100px;
    height: 100px;
    background-size: 100% 100%;

    justify-content: flex-end;
  }

  .name {
    /*超过几行就显示...*/
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;

    margin: 2px 0 2px 0;
    -webkit-line-clamp: 2;
    line-height: 1;
    color: #666666;
    font-size: 10px;
    width: 100px;
    -webkit-transform-origin-x: 0;
    -webkit-transform: scale(0.90);
  }

  .play-count {

    height: 20px;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    color: white;
    font-size: 10px;
  }
</style>
