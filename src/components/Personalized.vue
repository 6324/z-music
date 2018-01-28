<template>
  <div class="main">
    <div class="foo-per">
      <transition name="fade">
        <div class="img" @click="getList(id)" :style="{backgroundImage:'url(' + imgUrl + ')',width:imgw,height:imgh}">
          <div class="play-count">
            <icon :scale="1.5" style="margin-right: 2px" name="head-set"></icon>

            <p>{{numberConvert(playCount)}}</p></div>
        </div>
      </transition>
      <p v-if="name" class="name">{{name}}</p>
    </div>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem} from 'vux'
  import stirngUtil from '../utils/string'

  export default {
    name: "personalized",
    props: {
      id: {
        type: Number
      },
      imgUrl: {
        type: String,
      },
      name: {
        type: String
      },
      playCount: {
        type: Number,
        default: 10000,
      },
      imgw: {
        type: String,
        default: '100px'
      },
      imgh: {
        type: String,
        default: '100px'
      }
    },
    methods: {
      numberConvert(number) {
        return stirngUtil.numberConvert(number)
      },
      getList(id) {
        if (id) {
          this.$router.push({name: 'personalized', params: {'id': id}})
        }
      }
    },
    components: {Flexbox, FlexboxItem}
  }
</script>

<style scoped>
  .main {
    display: -webkit-flex;
    justify-content: center;
    /*flex-grow: 1;*/
    /*flex-basis:33.33%*/
  }

  .foo-per {
    display: -webkit-flex;
    flex-direction: column;
  }

  .img {
    display: -webkit-flex;
    flex-direction: row;
    justify-content: flex-end;
    background-size: 100% 100%;
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
