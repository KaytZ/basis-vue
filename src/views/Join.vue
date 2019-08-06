<template>
    <div class="join">
        <banner :src="url"></banner>
        <div class="wrapper">
            <div class="welfare-box">
                <div class="w-title">福利待遇</div>
                <p class="w-title-b">给员工营造好的工作环境，我们用心做好每一步</p>
                <ul class="w-list clearfix">
                    <div class="w-item">
                        <i class="icon-img debug-icon icon-t1"></i>
                        <div class="w-item-text">五险一金</div>
                    </div>
                    <div class="w-item">
                        <i class="icon-img debug-icon icon-t2"></i>
                        <div class="w-item-text">周末双休</div>
                    </div>
                    <div class="w-item">
                        <i class="icon-img debug-icon icon-t3"></i>
                        <div class="w-item-text">法定节假日</div>
                    </div>
                    <div class="w-item">
                        <i class="icon-img debug-icon icon-t4"></i>
                        <div class="w-item-text">企业培训</div>
                    </div>
                </ul>
            </div>
            <div class="recruit-title">职位招聘</div>
            <div class="recruit-content">
                <div class="recruit-box">
                    <div class="recruit-m-title">职位招聘</div>
                    <div class="source">
                        <el-collapse v-model="activeNames" class="m-collapse" accordion>
                            <el-collapse-item name="1">
                                <template slot="title">
                                    <div class="box">
                                        JAVA工程师
                                        <span class="title-left">了解详情</span>
                                    </div>
                                </template>
                                <div class="content-wrapper">
                                    <div class="c-title">职位描述</div>
                                    <p class="m-title">岗位职责:</p>
                                    <p>1、参与公司各JAVA项目的设计和实现；</p>
                                    <p>2、指导初级开发人员进行开发工作；</p>
                                    <p>3、参与产品技术架构的改进，性能优化。</p>
                                    <p>4、与前端开发人员配合，高质量完成系统后端业务的开发工作；</p>
                                    <p>5、根据项目需求，参与一些前端开发的工作。</p>
                                    <p class="m-title">任职要求：</p>
                                    <p>1、本科以上学历，计算机类相关专业，英语四级或者以上；</p>
                                    <p>2、熟悉MES系统开发；</p>
                                    <p>3、3年以上JAVA开发经验，精通JAVA编程，熟悉J2EE体系结构,了解Spring、Struts、Mybatis、Hibernate</p>
                                    <p>4、熟悉Oracle/SQL Server/Mysql。可以编写复杂SQL语句、视图、存储过程与函数。有一定的性能优化能力</p>
                                    <p>5、熟练掌握HTML5、CSS、JavaScript、AJAX、JQuery、EXT、Bootstrap进行前台开发</p>
                                    <p>6、熟练使用配置应用服务器: Tomcat、WAS、WebLogic中至少一种</p>
                                    <p>7、有微信小程序及混合APP开发经验。</p>
                                    <p>8、熟悉Git、Maven、Docker等常用工具的使用</p>
                                    <p>9、做事主动积极，具有创新精神、勇于承担，有团队精神。具备一定的抗压能力。</p>
                                    <el-button type="primary"><a href="mailto:kay.chen@nantytech.com?subject=职位申请：JAVA工程师" style="color: #fff;">申请职位</a></el-button>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="2">
                                <template slot="title">
                                    <div class="box">
                                    算法工程师
                                    <span class="title-left">了解详情</span>
                                    </div>
                                </template>
                                <div class="content-wrapper">
                                    <div class="c-title">职位描述</div>
                                    <p class="m-title">岗位职责:</p>
                                    <p>1、研究相应图像算法原理并用Matlab或C++/C语言实现。</p>
                                    <p>2、根据特殊的成像系统，实现图像去噪及图像增强</p>
                                    <p>3、相应设计的结果输出，包含代码和存档</p>
                                    <p class="m-title">任职要求：</p>
                                    <p>1.信号与信息处理、 光学工程、计算机等图形图像处理相关专业</p>
                                    <p>2.硕士学历及以上，从事图形图像算法工作2年以上；本科学历，从事图形图像算法工作5年以上;</p>
                                    <p>3.熟悉机器视觉和图像处理的原理及相应算法的实现;</p>
                                    <p>4.精通C++/C语言，熟悉图像算法库OpenCV</p>
                                    <p>5.有指令集优化经验者优先</p>
                                    <p>6.熟悉Matlab，有一定的建模和算法预演能力者优先</p>
                                    <el-button type="primary"><a href="mailto:kay.chen@nantytech.com?subject=职位申请：算法工程师" style="color: #fff;">申请职位</a></el-button>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="3">
                                <template slot="title">
                                    <div class="box">
                                    销售经理
                                    <span class="title-left">了解详情</span>
                                    </div>
                                </template>
                                <div class="content-wrapper">
                                    <div class="c-title">职位描述</div>
                                    <p class="m-title">岗位职责:</p>
                                    <p>1、制定有效的销售策略及业务拓展计划，收集市场和行业信息；</p>
                                    <p>2、负责销售区域内销售活动的策划和执行，完成销售指标；</p>
                                    <p>3、开发与维护公司客户及新客户关系，建立长期，良好，稳固的客户关系；</p>
                                    <p>4、针对不同渠道的客户，提供不同的支持和服务，包括提供产品演示和讲解，协作客户完成产品导入；</p>
                                    <p>5、建立客户档案、管理，跟踪及货款的回收等；</p>
                                    <p class="m-title">任职要求：</p>
                                    <p>1、大专及以上学历，市场营销、计算机相关专业，有1-3年同行业销售工作经验优先。</p>
                                    <p>2、善于与客户进行面对面沟通。</p>
                                    <p>3、对网络产品了解熟悉者优先。</p>
                                    <p>4、熟悉系统集成项目工作优先；</p>
                                    <el-button type="primary"><a href="mailto:kay.chen@nantytech.com?subject=职位申请：销售经理" style="color: #fff;">申请职位</a></el-button>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="4">
                                <template slot="title">
                                    <div class="box">
                                    销售总监
                                    <span class="title-left">了解详情</span>
                                    </div>
                                </template>
                                <div class="content-wrapper">
                                    <div class="c-title">职位描述</div>
                                    <p class="m-title">岗位职责:</p>
                                    <p>1.依据公司整体战略，组织制定营销战略，组织市场销售推广工作。</p>
                                    <p>2.规划公司销售系统的整体运营，建立、健全各项规章制度，推动公司销售系统管理的规范化。</p>
                                    <p>3.参与制定公司销售中长期规划，依据公司整体销售目标年度销售计划和方案，年度销售预算、计划方案,监督实施销售全过程，完成销售任务。</p>
                                    <p class="m-title">任职要求：</p>
                                    <p>1、本科及以上学历，有互联网产品销售工作经验。</p>
                                    <p>2、有5年及以上互联网行业销售部总监相关职务的工作经验</p>
                                    <p>3、熟悉商务拓展流程，擅于抓住客户需求，有较强的客户服务意识；</p>
                                    <p>4、形象佳、出色的沟通能力、商务谈判能力和会议宣讲能力；</p>
                                    <p>5、具备较强的市场分析、营销、推广能力和良好的人际沟通、协调能力，分析和解决问题的能力</p>
                                    <el-button type="primary"><a href="mailto:kay.chen@nantytech.com?subject=职位申请：销售总监" style="color: #fff;">申请职位</a></el-button>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="5">
                                <template slot="title">
                                    <div class="box">
                                    销售
                                    <span class="title-left">了解详情</span>
                                    </div>
                                </template>
                                <div class="content-wrapper">
                                    <div class="c-title">职位描述</div>
                                    <p class="m-title">岗位职责:</p>
                                    <p>1、销售人员职位，在上级的领导和监督下定期完成量化的工作要求，并能独立处理和解决所负责的任务</p>
                                    <p>2、管理客户关系，完成销售任务；</p>
                                    <p>3、了解和发掘客户需求及购买愿望，介绍自己产品的优点和特色；</p>
                                    <p class="m-title">任职要求：</p>
                                    <p>1、大专及以上学历；</p>
                                    <p>2、性格外向、反应敏捷、表达能力强，具有较强的沟通能力及交际技巧，具有亲和力；</p>
                                    <p>3、具备一定的市场分析及判断能力，良好的客户服务意识；</p>
                                    <el-button type="primary"><a href="mailto:kay.chen@nantytech.com?subject=职位申请：销售" style="color: #fff;">申请职位</a></el-button>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="6">
                                <template slot="title">
                                    <div class="box">
                                    管理实习生培训岗
                                    <span class="title-left">了解详情</span>
                                    </div>
                                </template>
                                <div class="content-wrapper">
                                    <div class="c-title">职位描述</div>
                                    <p class="m-title">岗位职责:</p>
                                    <p>1、接受公司相关培训，学习和理解公司产品、销售业务技能、运营管理，商业管理等知识；</p>
                                    <p>2、完成公司基本考核任务及协助主管处理相关事宜；</p>
                                    <p class="m-title">任职要求：</p>
                                    <p>1.熟练运用各种办公软件</p>
                                    <p>2.具备较好的沟通、协调及执行能力</p>
                                    <p>3.工作踏实认真、应对快捷敏锐，责任心强</p>
                                    <p>4.应届毕业生，实习生优先</p>
                                    <el-button type="primary"><a href="mailto:kay.chen@nantytech.com?subject=职位申请：管理实习生培训岗" style="color: #fff;">申请职位</a></el-button>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script type="text/ecmascript-6">
import Footer from "@/components/Footer";
import Banner from "@/components/banner";
import img from "../assets/img/joinUs/information_banner.jpg";
import { mapMutations } from "vuex";
import "../assets/css/base.less";

export default {
  data() {
    return {
      url: img,
      activeNames: ["1"]
    };
  },
  components: {
    Footer,
    Banner
  },
  created: function() {
    this.SET_THEME("light");
  },
  methods: {},
  ...mapMutations(["SET_THEME"])
};
</script>

<style scoped type="text/less" lang="less">
.box {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
}

/*wrapper*/
.wrapper {
  text-align: center;
}

/*welfare-box*/
.wrapper .welfare-box {
  width: 900px;
  margin: 0 auto;
  padding: 100px 0;
}

.wrapper .welfare-box .w-title {
  font-size: 50px;
  margin-bottom: 20px;
  color: #666;
}

.wrapper .welfare-box .w-title-b {
  font-size: 16px;
  color: #888;
  white-space: nowrap;
  letter-spacing: 2px;
}

.wrapper .welfare-box .w-list {
  margin-top: 70px;
  display: inline-block;
}

.wrapper .welfare-box .w-list .w-item {
  float: left;
  margin: 0 50px;
}

.wrapper .welfare-box .w-list .w-item .icon-img {
  display: block;
  width: 120px;
  height: 120px;
  background-image: url("../assets/img/joinUs/icon_test.png");
  background-repeat: no-repeat;
  margin-bottom: 20px;
}

.wrapper .welfare-box .w-list .w-item .icon-img.icon-t1 {
  background-position: -8px -8px;
  background-image: url("../assets/img/joinUs/icon_t1.png");
}

.wrapper .welfare-box .w-list .w-item .icon-img.icon-t2 {
  background: center center / cover url("../assets/img/joinUs/icon_c2.png");
}

.wrapper .welfare-box .w-list .w-item .icon-img.icon-t3 {
  background: center center/cover url("../assets/img/joinUs/icon_c.png");
}

.wrapper .welfare-box .w-list .w-item .icon-img.icon-t4 {
  background: center center/cover url("../assets/img/joinUs/icon_book.png");
}

.wrapper .welfare-box .w-list .w-item .w-item-text {
  color: #666;
  /* font-weight: bold; */
}

/*recruit-title*/
.wrapper .recruit-title {
  height: 300px;
  width: 100%;
  font-size: 54px;
  letter-spacing: 6px;
  color: #fff;
  line-height: 300px;
  background-color: #7dbbfe;
}

.wrapper .recruit-content {
  height: auto !important;
  min-height: 200px;
  width: 0;
  position: relative;
  margin: 0 auto;
}

.wrapper .recruit-content .recruit-box {
  text-align: left;
  position: relative;
  width: 850px;
  left: 0;
  top: -100px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
  transform: translateX(-50%);
  background-color: #fff;

  .source {
    padding: 40px;
    border-bottom: none;
  }
}

.wrapper .recruit-content .recruit-box .recruit-m-title {
  text-align: left;
  font-size: 14px;
  color: #999;
  padding: 25px 40px;
  border-bottom: 1px solid #ebeef5;
}

.wrapper .recruit-content .recruit-box .m-collapse {
  .el-collapse-item__header {
    height: 80px !important;
    line-height: 80px !important;
    font-size: 16px !important;

    &.is-active {
      border-bottom: 1px solid #ebeef5;
    }
  }

  .el-collapse-item__arrow {
    line-height: 80px;
  }

  .title-left {
    margin-right: 20px !important;
    color: #7dbbfe !important;
  }
}

.wrapper .recruit-content .recruit-box .m-collapse .content-wrapper {
  padding: 10px;
}

.wrapper .recruit-content .recruit-box .m-collapse .content-wrapper .c-title {
  color: #000;
  font-size: 14px;
}

.wrapper .recruit-content .recruit-box .m-collapse .content-wrapper .m-title {
  margin-top: 10px;
}

.wrapper .recruit-content .recruit-box .m-collapse .content-wrapper .m-btn {
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  padding: 10px 15px;
  margin-top: 20px;
  background-color: #7dbbfe;
  border: 1px solid #7dbbfe;

  &:hover {
    background-color: #66acf7;
  }
}
</style>
