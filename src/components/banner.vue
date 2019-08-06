<template>
    <div class="banner" :style="{backgroundImage: 'url('+src+')'}">
        <div class="mask"></div>
        <div class="b-text">{{text}}
            <div class="mini-text">{{miniText}}</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  props: ["src", "text", "miniText"],
  mounted() {
    console.log(this.text);
  },
  components: {}
};
</script>

<style scoped type="text/less" lang="less">
.banner {
  height: 800px;
  background: center center / cover
    url("../assets/img/joinUs/information_banner.jpg") no-repeat;
  position: relative;
  z-index: 1;
}
.banner .mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 10;
}
.banner .b-text {
  font-size: 62px;
  letter-spacing: 7px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  z-index: 20;
  white-space: nowrap;
}
.mini-text {
  color: #fff;
  font-size: 42px;
  text-align: center;
  margin-top: 30px;
  letter-spacing: 38px;
}
</style>
