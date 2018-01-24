<template>
  <div class="main">

    <div class="index">{{index+1}}</div>
    <div class="foo">
      <div >
        <div class="foo-song">
          <p style="color: #343434;font-size: 13px" class="name">{{name}}</p>
          <p style="color: #666666;margin-left: 10px" class="name">{{alia}}</p>
        </div>
        <p style="font-size: 10px;color: #969696" class="name">{{ar}}-{{al}}</p>
        <span style="height: 1px;background-color: #f1f1f1; display: block;width: 100% ;margin-top: 4px;margin-bottom: 4px"></span>
      </div>
      <div class="bar">
        <!--小电视和三个点-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "base-song-menu",
    props: {
      alia: {
        type: String
      },
      ar: {
        type: String
      },
      al: {
        type: String
      },
      name: {
        type: String,
        default: ''
      },
      description: {
        type: String,
      },
      index: {
        type: Number,
      }
    }
  }
</script>

<style scoped>

  .main {
    margin-bottom: 5px;
    display: -webkit-flex;
    flex-direction: row;
    background-color: white;
    align-items: center;
    /*height: 35px;*/
    width: 100%;
    color: #666666;
    justify-content: space-between;
  }

  .index {
    color: #969696;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    /*background-color: #bf1300;*/
    width: 35px;
    height: 35px;
  }

  .foo {
    flex-grow: 8;
    display: -webkit-flex;
    flex-direction: column;

  }

  .foo p {
    margin: 0 0;
  }

  .foo-song {
    display: -webkit-flex;

  }

  .name {
    /*line-height: 30px;*/
    font-size: 10px;
    margin-left: 8px;
  }

  .bar {
    flex-grow: 3;
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
