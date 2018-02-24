<template>
  <div class="main">
    <div class="head">
      <p style="color: #fff;font-size: 16px;margin-top: 10px">xxx有限公司</p>
    </div>

    <div
      style="width: 100%;height: 100%; position: absolute;overflow: hidden;display: -webkit-flex;justify-content: center">
      <div class="bar">
        <Tooltip content="本月申报期" placement="top">
          <i-circle class="zq" :stroke-color="'#C89DEC'" :stroke-width="5" :trail-color="'#ffffff'" :trail-width="5"
                    :size="70"
                    :percent="18">
            <span class="demo-Circle-inner" style="font-size:33px">21</span>
          </i-circle>
        </Tooltip>
      </div>
    </div>

    <div style="width: 100%; height: 100% ;">

      <Card :bordered="false" :shadow="true" style="margin: 20px;">
        <div style="width: 100%; display: -webkit-flex; justify-content: space-around">
          <Button type="text">
            <Icon type="ios-cart" :size="30" :color="'#6489EB'"></Icon>
            <p>发票领购</p>
          </Button>
          <Button type="text">
            <Icon type="ios-compose" :size="30" :color="'#6489EB'"></Icon>
            <p>申报</p>
          </Button>

          <Button type="text">
            <Badge dot>
              <Icon type="ios-stopwatch" :size="30" :color="'#6489EB'"></Icon>
            </Badge>
            <p>预约办税</p>
          </Button>
        </div>
      </Card>

      <Card dis-hover :bordered="false">
        <Row>
          <Col style=" display: -webkit-flex;  justify-content: center; align-items: center" span="12">
          <Icon type="ios-albums" :size="20" :color="'#6489EB'"></Icon>
          <div style="display: -webkit-flex;flex-direction: column;text-align: left;margin-left: 10px">
            <p style="font-size: 13px">发票</p>
            <p style="color: #aaa; font-size: 10px">查询、验旧、领用</p>
          </div>
          </Col>
          <Col style=" display: -webkit-flex; justify-content: center;align-items: center" span="12">
          <Icon type="ios-bookmarks" :size="20" :color="'#6489EB'"></Icon>
          <div style="display: -webkit-flex;flex-direction: column;text-align: left;margin-left: 10px">
            <p style="font-size: 13px">纳税学堂</p>
            <p style="color: #aaa; font-size: 10px">线上、线下培训</p>
          </div>
          </Col>

        </Row>
        <Row style="margin-top: 16px">
          <Col style=" display: -webkit-flex; justify-content: center;align-items: center" span="12">
          <Icon type="ios-telephone" :size="20" :color="'#6489EB'"></Icon>
          <div style="display: -webkit-flex;flex-direction: column;text-align: left;margin-left: 10px">
            <p style="font-size: 13px">咨询</p>
            <p style="color: #aaa; font-size: 10px">12366在线解答问题</p>
          </div>
          </Col>
          <Col style=" display: -webkit-flex; justify-content: center;align-items: center" span="12">
          <Icon type="ios-location" :size="20" :color="'#6489EB'"></Icon>
          <div style="display: -webkit-flex;flex-direction: column;margin-left: 10px">
            <p style="font-size: 13px">办税厅</p>
            <p style="color: #aaa; font-size: 10px">当前等待人数:{{num}}</p>
          </div>
          </Col>

        </Row>

      </Card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "xs-index",
    data() {
      return {
        num: 0
      }
    },
    beforeMount() {
      //设置定时器，每3秒刷新一次
      var self = this;
      setInterval(getTotelNumber, 2000)

      function getTotelNumber() {
        self.num = Math.floor(Math.random() * (15 - 8 + 1) + 8);
      }

      getTotelNumber();
    },
    mounted() {
      var musicBar = document.getElementById('music-bar');
      musicBar.style.display = 'none'
      // this.$Notice.open({
      //   desc: '欢迎使用新版税税通💡'
      // })
      this.$Message.info({
        content: '欢迎使用新版税税通',
        duration: 3,
      });
    }
  }
</script>

<style scoped>

  .main {
    width: 100%;
    /*height: 80%;*/
    overflow: hidden;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;

  }

  .head {
    border-radius: 5px;
    width: 100%;
    height: 200px;
    /*background-color: #fbfbff;*/
    justify-content: center;
    text-align: center;
    background: -webkit-linear-gradient(-75deg, #05DDD9, #7876eb);
  }

  .bar {
    position: absolute;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    width: 1500px;
    height: 1500px;
    background-color: #fff;
    margin-top: 150px;
    border-radius: 50%;
  }

  .zq {
    color: white;
    margin-top: -35px;
    /*border: 2px red solid;*/
    /*height: 100px;*/
    /*width: 100px;*/
    background: -webkit-linear-gradient(-75deg, #05DDD9, #7876eb);
    border-radius: 50%;
    /*margin-top: -50px;*/
    /*display: -webkit-flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    /*color: white;*/
    /*font-size: 30px;*/
  }


</style>
