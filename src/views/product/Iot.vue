<template>
    <div class="container" id="app">
        <div class="mask"></div>
        <div class="wrapper clearfix">
            <div class="w-l">
                <div class="w-l-title"><span class="pre">全新IoT</span>物联网平台</div>
                <span class="w-l-line"></span>
                <ul class="w-l-list">
                    <li class="w-l-item">终端接入、边缘计算、实时数据处理、时序存储、数字孪生、数据洞察实现智能接入与数据采集</li>
                    <li class="w-l-item">提供了工业设备、传感器的接入到工业应用服务的端到端的解决方案</li>
                    <li class="w-l-item">全新的工业智能化改造服务</li>
                    <li class="w-l-item">海量设备注册与管理，资源统一调配管理</li>
                    <li class="w-l-item">数据转换、数据清洗、聚合计算、大数据分析、AI算法应用等</li>
                    <li class="w-l-item">分布式、数据缓存、数据校验等机制保障服务运行的稳定性与数据的完整性</li>
                    <li class="w-l-item">支撑工业千万级物联网采集点数据的写入与实时读取，支持毫秒级数据插入</li>
                    <li class="w-l-item">消息队列</li>
                    <li class="w-l-item">适应复杂应用场景</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style scoped type="text/less" lang="less">
.container {
  position: absolute !important;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: center center/cover url("../../assets/img/product/bg.jpg")
    no-repeat;
  position: relative;
  overflow: hidden;
}
.container .mask {
  position: absolute;
  left: 0;
  height: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(45, 62, 80, 0.4);
}
.container .wrapper {
  width: 900px;
  margin: 0 auto;
  position: relative;
  margin-top: 200px;
}
.container .wrapper.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.container .wrapper .w-l {
  float: left;
}
.container .wrapper .w-l .w-l-title {
  font-size: 30px;
  color: #fff;
  letter-spacing: 5px;
}
.container .wrapper .w-l .w-l-title .pre {
  font-size: 60px;
  color: #7dbbfe;
}
.container .wrapper .w-l .w-l-line {
  margin: 15px 0;
  display: block;
  width: 500px;
  height: 1px;
  background-color: #7dbbfe;
}
.container .wrapper .w-l .w-l-list .w-l-item {
  font-size: 16px;
  color: #fff;
  position: relative;
  margin-bottom: 20px;
  list-style-type: none;
}
.container .wrapper .w-l .w-l-list .w-l-item:after {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #7dbbfe;
  position: absolute;
  left: -18px;
  top: 40%;
}
.container .wrapper .w-r {
  float: right;
}
.container .wrapper .w-r .w-r-box {
  background-color: #fff;
  padding: 50px;
}
.container .wrapper .w-r .w-r-box .w-r-tabs {
  margin-bottom: 50px;
  text-align: center;
  position: relative;
  width: 100%;
}
.container .wrapper .w-r .w-r-box .w-r-tabs.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.container .wrapper .w-r .w-r-box .w-r-tabs .line {
  position: absolute;
  left: 50%;
  top: 4px;
  width: 1px;
  height: 20px;
  background-color: #666;
}
.container .wrapper .w-r .w-r-box .w-r-tabs .w-r-tab {
  float: left;
  width: 50%;
  cursor: pointer;
}
.container .wrapper .w-r .w-r-box .w-r-tabs .w-r-tab .w-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.container .wrapper .w-r .w-r-box .w-r-tabs .w-r-tab span {
  font-size: 16px;
  color: #333;
}
.container .wrapper .w-r .w-r-box .w-r-form .m-input {
  width: 260px;
  margin-bottom: 26px;
}
.container .wrapper .w-r .w-r-box .w-r-form .m-input.loginbtn {
  background-color: #7dbbfe;
  border-radius: 25px;
  color: #fff;
  height: 50px;
  font-size: 16px;
}
.container .wrapper .w-r .w-r-box .w-r-form .isbox {
  width: 100%;
  margin: 30px 0;
}
.container .wrapper .w-r .w-r-box .w-r-form .isbox.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.container .wrapper .w-r .w-r-box .w-r-form .isbox .checkbox {
  float: left;
  vertical-align: middle;
}
.container .wrapper .w-r .w-r-box .w-r-form .isbox .checkbox .check {
  background-color: #fff;
  border: none;
  outline: 0;
  width: 15px;
  height: 15px;
  margin: 0 6px 0 0;
  display: inline-block;
  vertical-align: middle;
}
.container .wrapper .w-r .w-r-box .w-r-form .isbox .checkbox span {
  color: #999;
  font-size: 10px;
}
.container .wrapper .w-r .w-r-box .w-r-form a {
  float: right;
  vertical-align: middle;
  color: #999;
  font-size: 8px;
}
.container .wrapper .w-r .w-r-box .register {
  cursor: pointer;
  display: block;
  width: 100px;
  margin: 0 auto;
  color: #7dbbfe;
  outline: 0;
  border: 0;
  background-color: #fff;
}
.container .wrapper .w-r .w-r-box .wechat-box {
  width: 260px;
  height: 300px;
  text-align: center;
}
.container .wrapper .w-r .w-r-box .wechat-box img {
  margin-top: 50px;
  line-height: 376px;
}

.icon-user {
  font-size: 26px !important;
  vertical-align: middle;
  padding-right: 4px;
}
.icon-user.active {
  color: #7dbbfe;
}
.icon-wechat {
  font-size: 26px !important;
  vertical-align: middle;
  padding-right: 9px;
}
.icon-wechat.active {
  color: #7dbbfe;
}
.el-input__prefix {
  left: 20px;
}
.el-input__prefix .icon-phone {
  font-size: 16px;
}

.iconfont {
  font-family: "iconfont",serif !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-phone:before {
  content: "\e600";
}

.icon-wechat:before {
  content: "\e68b";
}

.icon-46:before {
  content: "\e6ef";
}

.icon-user:before {
  content: "\e623";
}
</style>
