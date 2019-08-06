<template>
    <div class="home">

        <!--主页banner-->
        <div id="banner"  ref="bannerHeight">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide class="rel page1">
                    <div class="page1-inner">
                        <div class="page1-right"></div>
                        <div class="page1-left"></div>
                        <!--文字动画-->
                        <div class="word-trans">
                            <h2 class="page1-con0 trans-dom">
                                {{page1.con0}}
                            </h2>
                            <div class="page1-con1 trans-dom">
                                {{page1.con1}}
                            </div>
                            <div class="page1-con2 trans-dom delay1">
                                {{page1.con2}}
                            </div>
                            <div class="page1-con3 trans-dom delay2">
                                {{page1.con3}}
                            </div>
                            <ul class="clearfix">
                                <li class="page1-con4 trans-dom delay4 fl" @click="$router.push('/productService/preServer')">
                                    <span></span>
                                    供应链金融服务1
                                </li>
                                <li class="page1-con5 trans-dom delay5 fl" @click="$router.push('/productService/business')">
                                    <span></span>
                                    蜜蜂保理业务1
                                </li>
                            </ul>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="rel page2">
                    <div class="page2-inner" >
                        <div class="page2-left"></div>
                        <div class="page2-right"></div>
                        <!--文字动画-->
                        <div class="word-trans-s">
                            <div class="page2-con0 trans-dom delay1">
                                {{page2.con0}}
                            </div>
                            <div class="page2-con1 trans-dom delay1">
                                {{page2.con1}}
                            </div>
                            <div class="page2-con2 trans-dom delay2">
                                {{page2.con2}}
                            </div>
                            <div class="page2-con3 trans-dom delay2">
                                {{page2.con3}}
                            </div>
                            <div class="page2-con4 trans-dom delay3">
                                {{page2.con4}}
                            </div>
                            <div class="page2-con5 trans-dom delay3">
                                {{page2.con5}}
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="rel page3">
                    <div class="page3-inner">
                        <div class="page3-left"></div>
                        <div class="page3-right"></div>
                        <!--文字动画-->
                        <div class="word-trans-s">
                            <div class="page3-con0 trans-dom delay1">
                                {{page3.con0}}
                            </div>
                            <div class="page3-con1 trans-dom delay1">
                                {{page3.con1}}
                            </div>
                            <div class="page3-con2 trans-dom delay2">
                                {{page3.con2}}
                            </div>
                            <div class="page3-con3 trans-dom delay2">
                                {{page3.con3}}
                            </div>
                            <div class="page3-con4 trans-dom delay3">
                                {{page3.con4}}
                            </div>
                            <div class="page3-con5 trans-dom delay3">
                                {{page3.con5}}
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="rel page4">
                    <div class="page4-inner">
                        <div class="page4-left"></div>
                        <div class="page4-right"></div>
                        <!--文字动画-->
                        <div class="word-trans-s">
                            <div class="page4-con0 trans-dom delay1">
                                {{page4.con0}}
                            </div>
                            <div class="page4-con1 trans-dom delay1">
                                {{page4.con1}}
                            </div>
                            <div class="page4-con2 trans-dom delay2">
                                {{page4.con2}}
                            </div>
                            <div class="page4-con3 trans-dom delay2">
                                {{page4.con3}}
                            </div>
                            <div class="page4-con4 trans-dom delay3">
                                {{page4.con4}}
                            </div>
                            <div class="page4-con5 trans-dom delay3">
                                {{page4.con5}}
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination" ref="hidenDom"></div>
                <div class="swiper-scrollbar"   slot="scrollbar" style="visibility: hidden"></div>
            </swiper>
        </div>
        <div class="bottom-tips" ><span :class="[index===0?'black':'','button-next']" :style="endFlag?'display:none;':''"></span><span :class="['up']" :style="endFlag?'':'display:none'" @click="turnIndex"></span></div>
        <BackTop ></BackTop>
        <Footer v-if="endFlag" style=""/>
    </div>
</template>



<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapMutations } from "vuex";
import "swiper/dist/css/swiper.css";
import ban1 from "../assets/img/home/图片1.jpg";
import ban2 from "../assets/img/home/图片2.jpg";
import ban3 from "../assets/img/home/图片3.jpg";
import BackTop from "@/components/BackTop";
import Footer from "@/components/Footer";
export default {
  components: {
    swiper,
    swiperSlide,
    BackTop,
    Footer
  },
  data() {
    const _this = this;
    return {
      index: "",
      endFlag: false,
      banners: [{ src: ban1 }, { src: ban2 }, { src: ban3 }],
      page1: {
        con0: "打造国内",
        con1: "最具规模最专业化的",
        con2: "供应链金融服务平台",
        con3: "我们的服务"
      },
      page2: {
        con0: "满足小微企业",
        con1: "融资需求",
        con2: "·实惠融资",
        con3: "巧借核心企业信用资质为小微企业获得低成本融资",
        con4: "·高效融资",
        con5: "⼿续简便、线上放款迅捷"
      },
      page3: {
        con0: "助力核心企业",
        con1: "维护供应链",
        con2: "·提升链属企业的生存能力",
        con3:
          "借助核心企业的信用资质让链属供应商获得更低廉的融资成本，帮助供应商提升资金周转率、带来宽裕现金流动性。从而增强供应商对核心企业的粘性，提升核心企业供应商关系。",
        con4: "·提升核心企业供应链效率",
        con5: "改善核心企业自身经营性现金流"
      },
      page4: {
        con0: "为资金端输出",
        con1: "优质资产",
        con2: "·获取优质资产",
        con3:
          "小微企业应收帐款违约率低，体量巨大，符合大体量、低风险偏好资金的需求",
        con4: "·输出业务能力",
        con5:
          "转化资金方的现有企业客户为平台合作伙伴，帮助资金方拓展供应链金融业务"
      },
      pageFlag: false,
      /*swiper配置*/
      swiperOption: {
        notNextTick: true,
        initialSlide: 0,
        direction: "vertical",
        height: window.innerHeight,
        preventInteractionOnTransition: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true, //滚动条是否自动隐藏。默认：false，不会自动隐藏。
          draggable: true, //该参数设置为true时允许拖动滚动条。
          snapOnRelease: true, //如果设置为false，释放滚动条时slide不会自动贴合。
          dragSize: 30 //设置滚动条指示的尺寸。默认'auto': 自动，或者设置num(px)。
        },
        effect: "slide",
        navigation: {
          nextEl: ".button-next", //前进按钮的css选择器或HTML元素。
          prevEl: ".up", //后退按钮的css选择器或HTML元素。
          hideOnClick: true //点击slide时显示/隐藏按钮
          //disabledClass: 'my-button-disabled', //前进后退按钮不可用时的类名。
          //hiddenClass: 'my-button-hidden', //按钮隐藏时的Class
        },
        mousewheel: {
          releaseOnEdges: true
        },
        on: {
          slideChangeTransitionEnd: function() {
            _this.index = this.activeIndex;
            var dom = _this.$refs.hidenDom;
            _this.endFlag = this.isEnd;
            if (this.activeIndex > 0) {
              _this.pageFlag = true;
              _this.SET_THEME("dark");
              dom.setAttribute("style", "opacity:1");
            } else {
              _this.pageFlag = false;
              _this.SET_THEME("light");
              dom.setAttribute("style", "opacity:0");
            }
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted: function() {
    this.init();
  },
  methods: {
    init: function() {
      //全屏块初始化
      this.$refs.bannerHeight.setAttribute(
        "style",
        "height:" + window.innerHeight + "px"
      );
      this.onresize();
      this.SET_THEME("light");
      setTimeout(() => {
        this.index = 0;
      });
      this.$refs.hidenDom.setAttribute("style", "opacity:0");
    },
    navTest: function() {
      this.SET_THEME("dark");
    },
    onresize: function() {
      //窗口改变时再次重置全屏块
      var _this = this;
      window.onresize = function() {
        _this.swiperOption.height = window.innerHeight;
      };
      this.$refs.bannerHeight.setAttribute(
        "style",
        "height:" + window.innerHeight + "px"
      );
    },
    turnIndex: function() {
      var dom = this.$refs.hidenDom;
      this.$refs.mySwiper.swiper.slideTo(0, 1000, false); //切换到第一个slide，速度为1秒
      this.index = 0;
      this.pageFlag = false;
      this.endFlag = false;
      this.SET_THEME("light");
      dom.setAttribute("style", "opacity:0");
    },
    ...mapMutations(["SET_THEME"])
  }
};
</script>
<style type="text/less" lang="less">
.home .banner {
  overflow: hidden;
  &_m_top {
    margin-top: 60px;
  }
  &_m_bottom {
    margin-bottom: -180px;
  }
}
.home .page1-inner {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
}
.home .page1-left {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 44%;
  height: 100%;
  background: url("../assets/img/home/搭配图片1.png") no-repeat center
    center/cover;
  transform: translate3d(0, 100%, 0);
  -webkit-transform: translate3d(0, 100%, 0);
  transition: transform 0.5s ease;
  -webkit-transition: transform 0.5s ease;
}
.home .page1-right {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/img/home/图片1.jpg") no-repeat center center/cover;
  transform: translate3d(0, -100%, 0);
  -webkit-transform: translate3d(0, -100%, 0);
}

/*page2*/
.home .page2,
.home .page3,
.home .page4 {
  background: #fff;
}
.home .page2-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: url("../assets/img/home/图片1.jpg") no-repeat center center/cover;
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  overflow: hidden;
}
.home .page2-left {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 44%;
  height: 100%;
  background: url("../assets/img/home/搭配图片2.png") no-repeat center
    center/cover;
  transform: translate3d(0, 100%, 0);
  -webkit-transform: translate3d(0, 100%, 0);
  transition: transform 0.5s ease 0.5s;
  -webkit-transition: transform 0.5s ease 0.5s;
}
.home .page2-right {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 56%;
  height: 100%;
  background: url("../assets/img/home/图片2.jpg") no-repeat center center/cover;
  transform: translate3d(0, -100%, 0);
  transition: transform 0.45s ease 0.5s;
}
.home .swiper-slide-active .page2-inner {
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
}
/*page3,page4*/
.home .page3-inner,
.home .page4-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
  background: #eee;
  overflow: hidden;
}
.home .page3-left,
.home .page4-left {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 44%;
  height: 100%;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  transition: transform 0.5s ease;
  -webkit-transition: transform 0.5s ease;
}
.home .page3-left {
  background: url("../assets/img/home/搭配图片3.png") no-repeat center
    center/cover;
}
.home .page4-left {
  background: url("../assets/img/home/搭配图片4.png") no-repeat center
    center/cover;
}
.home .page3-right,
.home .page4-right {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 56%;
  height: 100%;
  transform: translate3d(0, -100%, 0);
  transition: transform 0.5s ease;
}
.home .page3-right {
  background: url("../assets/img/home/图片3.jpg") no-repeat center center/cover;
}
.home .page4-right {
  background: url("../assets/img/home/图片4.jpg") no-repeat center center/cover;
}
.home .swiper-slide-active .page2-left,
.swiper-slide-active .page2-right,
.swiper-slide-active .page1-left,
.swiper-slide-active .page3-left,
.swiper-slide-active .page4-left,
.swiper-slide-active .page3-right,
.swiper-slide-active .page4-right {
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
}
.home .swiper-slide-active .page1-right {
  animation: indexAni 10s linear;
  animation-fill-mode: forwards;
}
@keyframes indexAni {
  0% {
  }
  7% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: scale(1.2);
  }
}
/*文字动画*/
.home .word-trans {
  position: absolute;
  max-width: 36%;
  left: 14%;
  top: 28%;
}
.home .trans-dom {
  color: #fff;
  opacity: 0;
  transform: translate3d(-10%, 0, 20px);
  transition: all 0.4s ease 0.5s;
}
.home .page1-con0 {
  font-size: 2rem;
}
.home .page1-con1 {
  font-size: 2.5rem;
}
.home .page1-con2 {
  font-size: 1.5rem;
  font-weight: bold;
}
.home .page1-con3 {
  margin-top: 11%;
  font-size: 1.3rem;
  margin-bottom: 6%;
}
.home .page1-con4,
.home .page1-con5 {
  text-align: center;
  width: 200px;
  line-height: 100px;
  font-size: 1rem;
  cursor: pointer;
}
.home .page1-con5 {
  margin-left: 0.68rem;
}
.home .page1-con4 span {
  display: block;
  margin: 0 auto;
  width: 90px;
  height: 90px;
  background: url("../assets/img/home/搭配图片3.png") no-repeat center
    center/cover;
}
.home .page1-con5 span {
  display: block;
  margin: 0 auto;
  width: 90px;
  height: 90px;
  background: url("../assets/img/home/搭配图片4.png") no-repeat center
    center/cover;
}
.home .word-trans-s {
  position: absolute;
  left: 5%;
  top: 15%;
  width: 30%;
}
.home .page2-con0 {
  font-size: 2rem;
}
.home .page2-con1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20%;
}
.home .page3-con0,
.page4-con0 {
  font-size: 2rem;
}
.home .page3-con1,
.page4-con1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15%;
}
.home .page2-con2,
.page2-con4,
.home .page4-con2,
.home .page4-con4,
.home .page3-con2,
.home .page3-con4 {
  font-size: 1.5rem;

  margin-top: 0.05rem;
  margin-left: -0.075rem;
}
.home .page3-con4 {
  margin-top: 1.3rem;
}
.home .page4-con3,
.home .page4-con5,
.home .page3-con3,
.home .page3-con5,
.page2-con3,
.page2-con5 {
  font-size: 1.5rem;
}
.delay1 {
  transition-delay: 0.8s !important;
}
.delay2 {
  transition-delay: 1.1s !important;
}
.delay3 {
  transition-delay: 1.4s !important;
}
.delay4 {
  transition-delay: 1.7s !important;
}
.delay5 {
  transition-delay: 2s !important;
}
.home .swiper-slide-active .trans-dom {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
.home .swiper-pagination {
  right: 3% !important;
  top: 40% !important;
}
.home .swiper-pagination-bullet {
  width: 10px !important;
  height: 200px !important;
  margin-top: 0.2rem !important;
  background: #717173;
  opacity: 1;
  border-radius: 0 !important;
}
.home .swiper-pagination-bullet-active {
  background: #00a1e4;
}
.home .swiper-pagination-bullet:first-child {
  opacity: 0 !important;
}
.home .swiper-container {
  width: 100%;
  height: 100%;
}
.bottom-tips {
  position: fixed;
  bottom: 100px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.12rem;
  height: 0.3rem;
  line-height: 0.3rem;
  z-index: 99;
}
.bottom-tips span {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: url("../assets/img/enterprise/arrow-bottom.png") no-repeat
    center/contain;
  font-size: 0;
  vertical-align: middle;
  margin-left: 1%;
  animation: up-to-down 0.8s ease infinite;
  cursor: pointer;
  border: 0; // 去除未选中状态边框
  outline: none; // 去除选中状态边框
  background-color: rgba(0, 0, 0, 0); // 透明背景
}
.bottom-tips span.black {
  background: url("../assets/img/enterprise/arrow-bottom-white.png") no-repeat
    top/contain;
}
.bottom-tips span.up {
  background: url("../assets/img/enterprise/arrow-up.png") no-repeat top/contain;
  margin-bottom: 120px;
}
@keyframes up-to-down {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(0px, -10px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
.fl {
  float: left;
}

.fr {
  float: right;
}
ul,
li {
  list-style: none;
}
</style>

<!--
<style type="text/less" lang="less">
    @import "../assets/css/home.less";
</style>
-->
