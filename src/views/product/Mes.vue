<template>
    <div class="container" id="app">
        <div class="mask"></div>
        <div class="wrapper clearfix">
            <div class="w-l">
                <div class="w-l-title"><span class="pre">MES</span>智能制造系统</div>
                <span class="w-l-line"></span>
                <ul class="w-l-list">
                    <li class="w-l-item">B/S架构，跨平台访问</li>
                    <li class="w-l-item">软件接口灵活</li>
                    <li class="w-l-item">硬件接口弹性大</li>
                    <li class="w-l-item">强大的二次开发平台</li>
                    <li class="w-l-item">生产调度、产品跟踪、质量控制、设备故障分析、网络报表等统一管理功能</li>
                    <li class="w-l-item">生产部门、质检部门、工艺部门、物流部门等部门统一管理信息服务</li>
                    <li class="w-l-item">帮助企业实施完整闭环生产的整体优化</li>
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
