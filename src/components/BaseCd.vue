<template>
  <div style="width: 100%;height: 350px;overflow: hidden">
    <div style="width: 300px;height: 300px; position: relative;margin: auto">
      <div class="bg"></div>
      <div :class="['cd-start','cd-img',{'cd-pause':!state}]" :style="{backgroundImage:'url('+img+')'}">
      </div>
      <div :class="['cd-start','cd',{'cd-pause':!state}]">
      </div>
      <div :class="[{'cd-controller-start':!state},'cd-controller',{'cd-controller-pause':state}]">

      </div>
    </div>
  </div>
</template>

<script>
  import string from "../utils/string";

  export default {
    name: "base-cd",
    props: {
      img: {
        type: String
      },
      state: {//播放状态
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .cd {
    top: 105px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 260px;
    height: 260px;
    background-size: 100% 100%;
    background-image: url("../assets/img/cd-wrapper.png");
    position: absolute;

  }

  .bg {
    top: 105px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 261px;
    border-radius: 50%;
    height: 261px;
    background-size: 100% 100%;
    background-color: rgba(124, 121, 125, 0.2);
    position: absolute;
  }

  .cd-img {
    margin: auto;
    position: absolute;
    top: 105px;
    left: 0;
    bottom: 0;
    right: 0;
    width: 180px;
    height: 180px;
    background-size: 100% 100%;
  }

  .cd-start {
    animation: rotating 20s linear infinite;
    -webkit-animation: rotating 20s linear infinite;
    animation-fill-mode: forwards;
  }

  .cd-pause {
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
  }

  .cd-controller {
    position: absolute;
    margin: auto;
    left: 45%;
    top: -20px;
    width: 100px;
    height: 155px;
    background-size: 100% 100%;
    background-image: url("../assets/img/play-controler.png");
  }

  .cd-controller-start {
    animation: move linear 0.5s 1;
    -webkit-animation: move linear 0.5s 1;
    animation-fill-mode: forwards;
  }

  .cd-controller-pause {
    animation: move1 linear 0.5s 1;
    -webkit-animation: move1 linear 0.5s 1;
    animation-fill-mode: forwards;
  }

  @keyframes move {
    0% {
      -webkit-transform-origin: 15px 15px;
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform-origin: 15px 15px;
      -webkit-transform: rotate(-15deg);
    }
    100% {
      -webkit-transform-origin: 15px 15px;
      -webkit-transform: rotate(-25deg);
      -webkit-animation-play-state: paused;
    }
  }

  @keyframes move1 {
    0% {
      -webkit-transform-origin: 15px 15px;
      -webkit-transform: rotate(-25deg);
    }
    50% {
      -webkit-transform-origin: 15px 15px;
      -webkit-transform: rotate(-15deg);
    }
    100% {
      -webkit-transform-origin: 15px 15px;
      -webkit-transform: rotate(0deg);
      -webkit-animation-play-state: paused;
    }
  }

  @keyframes rotating {
    0% {
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }


</style>
