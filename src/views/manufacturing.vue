<template>
  <div>
    <div class="topLogo">
      <div class="topText">MANUFACTURING</div>
      <div class="servcicesItemSmegma"></div>

      <img src="../img/manufacturing.png" alt />
    </div>
    <div class="queryEnterWrapper">
      <div v-for="(item, index) in queryArr" :key="index" class="queryEnter"
        :class="queryEnterAction == index ? 'queryEnterAction' : ''" @click="clickEnter(item, index)">
        {{ item.title
        }}
      </div>
    </div>
    <div class="contentWrapper">
      <!-- <div class="contentTop">
                <el-carousel class="carousel" indicator-position="outside" :trigger="'click'" :autoplay="false">
                    <el-carousel-item class="carouselItem" v-for="item in 4" :key="item">
                        <img src="../img/salesSquare.png" alt="">
                    </el-carousel-item>
                </el-carousel>
                <div class="introductionWrapper">
                    <div class="introductionTitle">High performance Downhole Motor</div>
                    <div class="introductionContent">Tianhe Downhole motor design d on the most advanced international
                        design technology. We have a
                        Closely cooperating with domestic, surgical research institutes, universities and oilfield drilling
                        companies, and through careful research and development of R & D center in Canada, the design of
                        technical parameters and structure can meet the most demanding oil drilling needs. Tianhe downhole
                        motor is designed for durability and longer service life for different use conditions, with the most
                        stringent specific tolerances for design and manufacturing standards.</div>
                </div>
      </div>-->
      <div class="contentMain">
        <div class="contentMainTop">
          <img :src="descImg" alt class="contentImg" />
          <div class="contentMse">
            <div class="littleTotal-nopx">{{ litetitle }}</div>
            <div class="contentFontSize-nopx">{{ mes }}</div>
          </div>
        </div>
        <div class="contentMainDesc" v-html="desc"></div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { productDetail, cate } from "@/api/index";

export default {
  data() {
    return {
      queryEnterAction: 0,
      queryArr: [],
      desc: ``,
      descImg: "",
      mes: "",
      litetitle: ""
    };
  },
  async mounted() {
    await this.getcateList();
    this.getproductDetail();
    for (let i = 0; i < this.queryArr.length; i++) {
      if (this.queryArr[i].id == this.$route.query.type) {
        this.queryEnterAction = i;
      }
    }
  },
  computed: {},
  methods: {
    clickEnter(item, index) {
      this.queryEnterAction = index;
      this.$router.push(item.href);
    },
    getproductDetail() {
      productDetail({ id: this.$route.query.id }).then(res => {
        if (res && res.code == 1) {
          this.desc = res.data.detail;
          if (res.data.mes_avatar == "http://www.welldebon.com") {
            this.descImg = `${res.data.mes_avatar}${res.data.avatar}`;
          } else {
            this.descImg = `${res.data.mes_avatar}`;
          }
          this.mes = res.data.mes;
          this.litetitle = res.data.litetitle;
        }
      });
    },
    getcateList() {
      return new Promise((resolve, reject) => {
        cate().then(res => {
          if (res && res.code == 1) {
            let { data } = res;
            this.queryArr = data.map(item => {
              return {
                ...item,
                title: item.name,
                type: item.id,
                href: `/products?type=${item.id}`
              };
            });
            resolve();
          }
        });
      });
    }
  }
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  /* line-height: 300px; */
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<style lang="less" scoped>
.topLogo {
  width: 1920px;
  height: 331px;
  background: #17457c;
  position: relative;
}

.topText {
  font-size: 60px;

  font-weight: 500;
  color: #ffffff;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.servcicesItemSmegma {
  width: 100%;
  height: 100%;
  z-index: 2;
  background: #17457c;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
}

.queryEnterWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e1e1e1;
  flex-wrap: nowrap;
  padding: 0 0px;
  height: 54px;
  margin-bottom: 100px;
}

.queryEnter {
  // line-height: 46px;
  padding: 0 28px;
  font-size: 26px;
  font-weight: 500;
  box-sizing: border-box;
  color: #333333;
  box-sizing: border-box;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
}

.queryEnterAction {
  height: 100%;
  color: #ffffff;
  box-sizing: border-box;
  padding: 0 28px;

  // height: 46px;
  background: #1158e8;
  // border-radius: 55px;
  // box-shadow: 0px 1px 18px 0px rgba(17, 88, 232, 0.65);
}

.contentTop {
  display: flex;
  justify-content: space-between;
  /* align-items: stretch; */
  flex-wrap: nowrap;
  margin-bottom: 100px;
}

.carousel {
  width: 640px;
  height: 450px;
}

::v-deep .contentWrapper .el-carousel__button {
  width: 12px !important;
  height: 12px !important;
  border-radius: 50%;
}

::v-deep .contentWrapper .el-carousel__container {
  height: 413px !important;
}

.contentWrapper {
  padding: 0 240px;
}

.introductionWrapper {
  text-align: justify;
}

.introductionTitle {
  height: 35px;
  font-size: 36px;

  font-weight: 600;
  color: #ff0000;
  margin-bottom: 43px;
}

.introductionContent {
  width: 730px;
  font-size: 18px;

  font-weight: normal;
  color: #000000;
  line-height: 30px;
}

.contentMainTitle {
  font-size: 30px;

  font-weight: 500;
  color: #1158e8;
  line-height: 13px;
  text-align: left;
  margin-bottom: 50px;
}

.contentMainDesc {
  font-size: 20px;

  font-weight: normal;
  color: #000000;
  line-height: 30px;
  text-align: left;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  *word-wrap: break-word;
  *white-space: normal;
  margin-bottom: 50px;
}

.contentMain {
  margin-bottom: 100px;
}

.contentMainTop {
  display: flex;
  margin-bottom: 30px;
  flex-wrap: wrap;

  .contentImg {
    width: 642px;
    height: 642px;
    margin-right: 80px;
  }

  .contentFontSize-nopx {
    font-size: 16px;
  }

  .contentMse {
    color: #000000;
    flex: 1;
    text-align: justify;
  }
}

.littleTotal-nopx {
  font-size: 28px;
  text-align: left;
  font-weight: bolder;
  color: #1158e8;
  margin-bottom: 20px;
}
</style>