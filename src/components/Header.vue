<template>
    <div class="nav-bar">
        <div :class="['header', 'flex',theme]">
            <div class="logo flex">
                <img src="../assets/img/logo.png">
                <span class="title">福州南庭信息科技有限公司</span>
            </div>
            <div class="menu flex">
                <div class="menu-item-box flex">
                    <div class="menu-item" v-for="(item,index) in menuList">
                        <div v-if="item.type==='selector'">
                            <el-dropdown size="big">
                                <span class="el-dropdown-link">{{ $t(item.title) }}<i class="el-icon-arrow-down el-icon--right"></i></span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item v-for="sub in item.sub" @click.native="handleRoute(sub.route)">{{ $t(sub.title) }}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                        <router-link v-else :to="item.route" >{{ $t(item.title) }}</router-link>
                    </div>
                </div>
                <!--
                <div class="menu-login-box flex">
                    <div class="button-group-item">
                        <router-link to="/login" class="button button-link">{{$t('menu.login')}}</router-link>
                    </div>
                    <div class="button-group-item">
                        <router-link to="/register" class="button button-link">{{$t('menu.register')}}</router-link>
                    </div>
                </div>-->
                <div class="language">
                    <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
                        <div>{{$t('menu.selectLanguage')}}</div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
                            <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Message } from "element-ui";
// import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",
  computed: {
    language() {
      return this.$store.getters.language;
    }
    // 这句话的意思是接收Vuex 中state theme 值并保存在本地的同名变量中
    //...mapState(['theme']),
    // theme: {
    //   get: function() {
    //     return this.$store.state.theme;
    //   },
    //   set: function(newValue) {
    //     this.$store.state.theme = newValue;
    //   }
    // }
  },
  data() {
    return {
      menuList: [
        {
          route: "/home",
          title: "menu.home"
        },
        {
          type: "selector",
          title: "menu.product",
          sub: [
            {
              title: "menu.products.publicOpinionSystem",
              route: "/product/opinionanalysis"
            },
            {
              title: "menu.products.microSystem",
              route: "/product/microservice"
            },
            {
              title: "menu.products.mes",
              route: "/product/mes"
            },
            {
              title: "menu.products.restaurant",
              route: "/product/restaurant"
            },
            {
              title: "menu.products.iot",
              route: "/product/iot"
            }
          ]
        },
        {
          type: "selector",
          title: "menu.solution",
          sub: [
            {
              title: "menu.solutions.fashion",
              route: "/solutions/fashion"
            },
            {
              title: "menu.solutions.phone",
              route: "/solutions/phone"
            }
          ]
        },
        {
          route: "/join",
          title: "menu.join"
        },
        {
          route: "/about",
          title: "menu.about"
        }
      ],
      defaultNavTheme: "light"
    };
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch("setLanguage", lang);
      Message.success({
        message: this.$t("action.switchLanguage"),
        type: "success",
        duration: 1500
      });
    },
    handleRoute(route) {
      this.$router.push({ path: route });
    }
  },
  watch: {
    theme: function(newV, oldV) {
      this.theme = newV;
    }
  }
};
</script>

<style scoped type="text/less" lang="less">
.wrapper-header {
  .header {
    height: 60px;
    justify-content: space-around;
    align-items: center;
    transition: background 1s ease-out;
  }
  &.headroom--top .header:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  .logo {
    align-items: center;
  }
  .title {
    font-size: 0.875rem;
    padding-left: 10px;
    margin-left: 7px;
    line-height: 1.3;
  }
  .menu {
    justify-content: center;
    align-items: center;
  }
  .banner-button {
    position: absolute;
    left: 46%;
    top: 83%;
    background: #455e9e;
    border: 1px solid #455e9e;
  }
  .language {
    margin-left: 50px;
    cursor: pointer;
  }
  .menu-item-box {
    .menu-item,
    .el-dropdow {
      padding: 15px 20px;
      cursor: pointer;
      position: relative;
      font-size: 1rem !important;
      a {
        text-decoration: none;
      }
      &:after {
        content: " ";
        position: absolute;
        bottom: -4px;
        left: 50%;
        width: 0;
        height: 2px;
        transition: all 0.3s;
      }
      &:hover:after {
        width: 80%;
        margin-left: -40%;
      }
    }
  }
  .el-dropdown-link {
    font-size: 1rem !important;
  }
  .menu-login-box {
    height: 60px;
    line-height: 60px;
    margin-left: 5px;

    .button-group-item {
      .button {
        padding-left: 15px;
        padding-right: 15px;
        font-size: 0.875rem;
        border: solid 1px rgba(255, 255, 255, 0);
      }
    }
    .button {
      text-decoration: none;
      border: 0;
    }
  }
  &.headroom--not-top .menu-login-box {
    .button-group-item {
      padding: 0;
      a {
        margin-top: 10px;
        padding-top: 11px;
        padding-bottom: 11px;
        border-radius: 4px;
        transition: all 0.3s;
        &:hover {
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.15);
        }
      }
    }
  }

  .title {
    color: #fff;
    border-left: 1px solid #ffffff;
  }
  .banner-button {
    color: #fff;
  }
  .language {
    .el-dropdown-selfdefine {
      color: #fff;
    }
  }
  .menu-item-box {
    .menu-item,
    .el-dropdown {
      color: rgba(255, 255, 255, 0.8) !important;
      a {
        color: rgba(255, 255, 255, 0.8) !important;
      }
      &:after {
        background: #fff;
      }
      &:hover {
        color: #fff;
        > a {
          color: #fff;
        }
      }
      &.active {
        color: #fff;
      }
    }
  }
  .menu-login-box {
    .button-group-item {
      &:hover {
        background-color: #455e9e;
      }
    }
    .button {
      color: #fff;
    }
  }
}
</style>
