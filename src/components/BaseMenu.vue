<template>
  <div class="main">
    <div class="foo">
      <icon :scale="scale" :name="icon"></icon>
      <p class="name">{{name}}</p>
    </div>
    <div class="bar">
      <p class="description">{{description}}</p>
      <span v-if="notice" class="notice"></span></div>
  </div>
</template>

<script>
  export default {
    name: "base-menu",
    props: {
      icon: {
        type: String,
        default: 'arrow-right'
      },
      scale: {
        type: Number,
        default: 1.5
      },
      name: {
        type: String,
        default: ''
      },
      description: {
        type: String,
      },
      notice: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>

  .main {
    display: -webkit-flex;
    flex-direction: row;
    background-color: white;
    align-items: center;
    height: 35px;
    width: 100%;
    color: #666666;
    justify-content: space-between;
  }

  .foo {
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    margin-left: 8px;
  }

  .name {
    line-height: 30px;
    font-size: 10px;
    margin-left: 8px;
  }

  .bar {
    flex-grow: 1;
    display: -webkit-flex;
    justify-content: flex-end;
    align-items: center;
  }

  .description {
    color: #959595;
    line-height: 30px;
    font-size: 10px;
    -webkit-transform-origin-x: 0;
    -webkit-transform: scale(0.90);
  }

  .notice {
    margin-right: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    display: block;
    background-color: #e21600;
  }

</style>
