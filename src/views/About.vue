<template>
    <div class="about">
        <banner :text="'专注为新女性服务的数字新媒体平台'" :src="url"></banner>
        <div class="wrapper">
            <div class="introbox">
                <div class="title">公司简介</div>
                <div class="info-box">
                    <p class="info">天使之翼 Angelswing"作为新女性数字新媒体平台，励志为中国新时代女性提供一个时尚，科学
                        ,懂人性，懂文化，知人性，会生活的，做完美女人，一个会让你变得更好女人的教育平台。
                    </p>
                    <p class="info">
                        我们服务的内容主要包括婚礼，育婴，家庭教育等；共分为六个主题：天使婚礼，天使孕妈，天使婴幼儿，天使少年，天使完美女人，天使大咖。为不同阶段的中国新女性提供相对应的信息服务。
                    </p>
                    <!-- <p class="info">
                        优势：打造完美女性，让女性更加懂得生活，懂得学习，懂得如何去教育下一代，以及教会女人变得时尚。让女人变得更加富有内涵，气质突显。
                    </p> -->
                    <p class="info">
                        公司优势：我们专注为女性服务，陪伴女性成长的每一个阶段。
                    </p>
                </div>
                <div class="icon-box clearfix">
                    <div class="icon-item">
                        <i class="icon debug-icon"></i>
                        <div class="icon-title">愿景</div>
                        <p class="icon-text">成为最受女性欢迎的新媒体平台</p>
                    </div>
                    <div class="icon-item icon-item2">
                        <i class="icon debug-icon"></i>
                        <div class="icon-title">使命</div>
                        <p class="icon-text">让爱传播到世界的各个角落</p>
                    </div>
                    <div class="icon-item icon-item3">
                        <i class="icon debug-icon"></i>
                        <div class="icon-title">价值观</div>
                        <p class="icon-text">一直在努力从不放弃</p>
                    </div>
                </div>
            </div>
            <div class="information-box">
                <span class="line"></span>
                <div class="info-box">
                    <p class="info">主要内容包括婚礼策划，孕育知识，育儿方法，家庭教育等；共分为六个主题：天使婚礼，天使孕妈，天使婴幼儿，天使青少年，天使完美女人，天使大咖 ,为不同阶段的中国新女性提供相对应的信息服务
                    </p>
                    <p class="info">
                        我们致力于解决女性对家庭教育知识的渴望，让女性变得更懂爱，更懂生活的完美女性，公司的愿景是，通过我们的不断努力，成为女性新媒体第一平台。
                    </p>
                </div>
            </div>

            <div class="block">
                <span class="line"></span>
                <el-timeline>
                    <el-timeline-item timestamp="2018/4/12" placement="top">
                        <el-card>
                            <h4>更新  模板</h4>
                            <p>陈凯亮 提交于 2018/4/12 20:46</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/3" placement="top">
                        <el-card>
                            <h4>更新  模板 </h4>
                            <p>陈凯亮 提交于 2018/4/3 20:46</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/2" placement="top">
                        <el-card>
                            <h4>更新  模板</h4>
                            <p>陈凯亮 提交于 2018/4/2 20:46</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script type="text/ecmascript-6">
import Banner from "@/components/banner";
import Footer from "@/components/Footer";
import img from "../assets/img/aboutUs/joinus_banner.jpg";

export default {
  data() {
    return {
      url: img
    };
  },
  components: {
    Banner,
    Footer
  },
  methods: {
    getStart() {
      this.$refs.count1.start();
      this.$refs.count2.start();
      this.$refs.count3.start();
      this.$refs.count4.start();
      this.$refs.count5.start();
    }
  }
};
</script>

<style scoped type="text/less" lang="less">
@clearfix: {
  zoom: 1;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
};
.wrapper {
  width: 900px;
  margin: 0 auto;
  /* border-bottom: 1px solid #666; */
  padding: 95px 0 0;
  text-align: center;
  /* intro */
}
.wrapper .introbox {
  width: 900px;
  margin: 0 auto;
  padding-bottom: 80px;
  /* border-bottom: 1px solid #999; */
}
.wrapper .introbox .title {
  font-size: 47px;
  font-weight: lighter;
  color: #484848;
}
.wrapper .introbox .info-box {
  margin: 70px 0 100px 0;
}
.wrapper .introbox .info-box .info {
  text-align: left;
  line-height: 24px;
  margin-bottom: 30px;
  font-size: 16px;
  color: #999;
  letter-spacing: 1px;
}
.m-bold {
  color: #000;
  font-weight: bold;
}
.wrapper .introbox .icon-box {
  @clearfix();
}
.wrapper .introbox .icon-box .icon-item {
  float: left;
  width: 33%;
  text-align: center;
}
.wrapper .introbox .icon-box .icon-item i {
  display: inline-block;
  width: 120px;
  height: 120px;
  background-image: url("../assets/img/aboutUs/icon_test.png");
  margin-bottom: 20px;
}
.wrapper .introbox .icon-box .icon-item.icon-item2 i {
  background-image: url("../assets/img/aboutUs/icon_test2.png");
  background-position: -63px -8px;
}
.wrapper .introbox .icon-box .icon-item.icon-item3 i {
  background-image: url("../assets/img/aboutUs/icon_test3.png");
  background-position: -66px -8px;
}
.debug-icon {
  background-position: -65px -8px;
}
.wrapper .introbox .icon-box .icon-item .icon-title {
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
  color: #666;
}
.wrapper .introbox .icon-box .icon-item .icon-text {
  letter-spacing: 2px;
  color: #999;
  /* line */
}
.wrapper .information-box .line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  display: block;
  height: 1px;
  width: 1140px;
  background-color: #d8d8d8;
  /* information-box */
}
.wrapper .information-box {
  position: relative;
  margin: 0 auto;
  width: 900px;
  padding: 80px 0 80px;
}
.wrapper .information-box .info-box {
  color: #666;
  text-align: left;
  margin-bottom: 70px;
}
.wrapper .information-box .info-box .info {
  text-align: left;
  line-height: 24px;
  margin-bottom: 22px;
  font-size: 16px;
  color: #999;
  letter-spacing: 3px;
}
.wrapper .information-box .info-title {
  letter-spacing: 6px;
  font-size: 48px;
  margin-bottom: 13px;
}
.wrapper .information-box .info-title-b {
  font-size: 15px;
  color: #999;
  /* *data-box */
}
.wrapper .info-title-box {
  margin: 0 auto;
  width: 900px;
  padding: 80px 0 80px;
}
.wrapper .data-box {
  @clearfix();
  /* left */
}

.wrapper .data-box .data-left {
  text-align: right;
  float: left;
  margin-right: 135px;
  margin-left: 8px;
  /* right */
}
.wrapper .data-box .data-right {
  float: left;
  /* item  left */
}
.wrapper .data-box .data-left .data-l-item {
  margin-bottom: 30px;
}
.wrapper .data-box .data-left .data-l-item .data-l-number {
  display: block;
  font-size: 38px;
  font-weight: bold;
  margin: 0 0 13px 0;
  background: linear-gradient(to right, #9bdbfb, #7cbafe);
  -webkit-background-clip: text;
  /* background-clip: text; */
  color: transparent;
}
.wrapper .data-box .data-left .data-l-item .data-l-intro {
  text-align: right;
  font-size: 12px;
  color: #666;
  /* item right */
}
.wrapper .data-box .data-right .data-r-item {
  text-align: left;
  margin-bottom: 45px;
}
.wrapper .data-box .data-right .data-r-item .data-r-title {
  font-weight: bold;
  font-size: 14px;
  margin: 11px 0 20px 0;
}
.wrapper .data-box .data-right .data-r-item .data-r-intro {
  line-height: 22px;
  font-size: 14px;
  color: #666;
}
.wrapper .block {
  text-align: left;
  position: relative;
  margin: 0 auto;
  width: 900px;
  padding: 80px 0 80px;

  .line {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    display: block;
    height: 1px;
    width: 1140px;
    background-color: #d8d8d8;
  }
}
</style>
