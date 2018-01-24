<template>
  <div class="main">
    <div class="sliding-header">
      <div class="foo">
        <div class="head"></div>
      </div>
      <div class="bar">
        <div class="user-info">
          <p style="margin-left: 10px;font-size: 15px">卖血上网zzz</p>
        </div>
        <div class="sign-in">
          <p style="font-size: 8px; -webkit-transform: scale(0.90);">签到</p>
        </div>

      </div>
    </div>

    <base-menu :icon="'message'" :name="'我的消息'"></base-menu>
    <base-menu :icon="'vip'" :name="'VIP会员'"></base-menu>
    <base-menu :icon="'shoping'" :name="'商城'"></base-menu>
    <base-menu :icon="'box'" :name="'在线听歌免流量'"></base-menu>
    <base-menu :style="{marginTop:'6px'}" :icon="'user'" :name="'我的好友'"></base-menu>
    <base-menu :icon="'position'" :name="'附近的人'" :description="'作品推荐 | 聆听最年轻的声音'" :notice=true></base-menu>
    <base-menu :style="{marginTop:'6px'}" :icon="'skin'" :name="'个性换肤'" :description="'官方红'"></base-menu>
    <base-menu :icon="'microphone'" :name="'听歌识曲'"></base-menu>
    <base-menu :icon="'watch'" :name="'定时停止播放'"></base-menu>
    <base-menu :icon="'qr'" :name="'扫一扫'"></base-menu>
    <base-menu :icon="'clock'" :name="'音乐闹钟'"></base-menu>
    <base-menu :icon="'car'" :name="'驾驶模式'"></base-menu>
    <base-menu :icon="'cloud'" :name="'音乐云盘'"></base-menu>

  </div>
</template>

<script>
  import BaseMenu from './BaseMenu'

  export default {
    name: "main-sliding",
    components: {
      BaseMenu,
    }
  }
</script>

<style scoped>
  .sliding-header {
    color: white;
    display: -webkit-flex;
    flex-direction: column;
    height: 170px;
    width: 100%;
    background-image: url("http://p1.music.126.net/ne_f5qC_dy-b_sJwuSK2JQ==/18870918068080912.jpg");
    background-size: 100% ;
    background-position: center;
  }

  .foo {
    margin-top: 70px;
    height: 50px;
    width: 100%;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
  }

  .head {
    margin-left: 10px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-image: url("http://p1.music.126.net/nwRoZ7ajOugdsSVqwJo_zg==/18992963858625575.jpg");
    background-size: 100% 100%;
  }

  .bar {
    /*align-self: end;*/
    height: 50px;
    /*background-color: oldlace;*/
    width: 100%;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .sign-in {
    height: 15px;
    width: 50px;
    border: white solid 1px;
    border-radius: 15px;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: center;
    line-height: 15px;
    margin-right: 10px;
  }
</style>
