<template>
    <div class="container">
        <div class="wrapper">
            <div class="wrapper-header">
                <Header/>
            </div>
            <transition name="fade" mode="out-in">
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Headroom from "headroom.js";

export default {
  name: "home",
  components: {
    Header
  },
  mounted() {
    let headerElement = document.querySelector(".wrapper-header");
    new Headroom(headerElement, {
      classes: {
        initial: "animated",
        pinned: "slideDown",
        unpinned: "slideUp"
      }
    }).init();
  }
};
</script>

<style type="text/less" lang="less">
//消失时间持续3s
.fade-enter-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

//显示时间持续1.5s
.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter,
.fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}

.animated {
  animation-duration: 0.5s;
  animation-fill-mode: both;
}

@-webkit-keyframes slideDown {
  0% {
    transform: translateY(-4.5em);
  }

  100% {
    transform: translateY(0);
  }
}

.animated.slideDown {
  animation-name: slideDown;
}

@-webkit-keyframes slideUp {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-4.5em);
  }
}

.animated.slideUp {
  animation-name: slideUp;
}

.el-carousel__arrow i {
  font-size: 25px;
}
</style>
