<template>
  <div>
    <div class="topLogo">
      <div class="topText">MANUFACTURING</div>
      <div class="servcicesItemSmegma"></div>
      <img src="../img/manufacturing.png" alt />
    </div>

    <div class="contentWrapper">
      <div class="leafMenu">
        <div v-for="(item, index) in leafMenuList" :class="currentMenu == index ? 'active' : ''" class="leafMenuItem"
          @click="changeCurrentMenu(item, index)" :key="index">{{ item.title || '' }}</div>
      </div>
      <div class="rightContent">
        <div class="contentTitle" v-if="leafMenuList[currentMenu] && leafMenuList[currentMenu].title">
          {{
            leafMenuList[currentMenu].title || '' }}
        </div>
        <el-divider class="titleDivider"></el-divider>
        <div class="contentDesc" v-if="centerArr != [] && centerArr.options && centerArr.options.length > 0">
          <div class="contentDescImgWrapper" v-for="(item, index) in centerArr.options" :key="index"
            @click="toProductsDetails(item)">
            <img class="contentDescImg" :src="item.img || '../img/companyImg.png'" @error="showdefaultImg(item)" alt
              v-if="showImg" />
            <div class="contentDescTitle">{{ item.title || '' }}</div>
          </div>
        </div>
        <el-pagination background :layout="'prev, pager, next'" class="pagiation" :prev-text="'prev'" :next-text="'next'"
          @current-change="currentChange" :total="totalcount" :page-size="12"
          v-if="centerArr != [] && centerArr.options && centerArr.options.length > 0"></el-pagination>
      </div>
    </div>
  </div>
</template>
    
<script>
import salesSquare from "../img/salesSquare.png";
import { product, cate } from "@/api/index";

export default {
  data() {
    return {
      leafMenuList: [],
      centerArr: {},
      currentMenu: 0,
      defaultImg: "../img/companyImg.png",
      showImg: true,
      totalcount: 0,
      page: 1
    };
  },
  async mounted() {
    await this.getcateList();

    for (let i = 0; i < this.leafMenuList.length; i++) {
      if (this.leafMenuList[i].id == this.$route.query.type) {
        this.currentMenu = i;
      }
    }
    await this.getproductList();
    this.currentChange(1);
  },

  methods: {
    async changeCurrentMenu(item, index) {
      this.$router.push({
        query: {
          type: item.type
        }
      });
      this.currentMenu = index;
      await this.getproductList();

      this.currentChange(1);
    },
    toProductsDetails(item) {
      this.$router.push(
        `/manufacturing?type=${this.centerArr.type}&id=${item.id}`
      );
      window.scrollTo(0, 0);
    },
    async currentChange(value) {
      this.page = value;
      await this.getproductList();
      document.body.scrollTop = document.documentElement.scrollTop = 0;

    },
    getproductList() {
      let that = this;
      let params = {
        cate: that.leafMenuList[that.currentMenu].id,
        page: this.page,
        page_size: 12
      };
      return new Promise(function (resolve, reject) {
        product(params).then(res => {
          if (res && res.code == 1) {
            let { list } = res.data;
            that.centerArr = {};
            that.centerArr.type = that.leafMenuList[that.currentMenu].type;
            that.centerArr.options = list;
            that.totalcount = res.data.count;
            resolve();
          }
        });
      });
    },
    getcateList() {
      return new Promise((resolve, reject) => {
        cate().then(res => {
          if (res && res.code == 1) {
            let { data } = res;
            this.leafMenuList = data.map(item => {
              return {
                ...item,
                title: item.name,
                type: item.id,
                options: []
              };
            });
            resolve();
          }
        });
      });
    },
    showdefaultImg(item) {
      item.img = salesSquare;
      this.showImg = false;
      this.$nextTick(() => {
        this.showImg = true;
      });
    }
  }
};
</script>
    
<style lang="less" scoped>
.pagiation {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}

::v-deep .pagiation .el-pagination button,
.el-pagination span:not([class*=suffix]) {
  font-size: 20px;
}

.servcicesItemSmegma {
  width: 100%;
  height: 100%;
  z-index: 2;
  background: #17457c;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
}

.contentWrapper {
  padding: 0 140px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.leafMenu {
  // position: fixed;
  margin-right: 110px;
}

.contentDesc {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.leafMenuItem {
  width: 316px;
  min-height: 54px;
  margin-bottom: 20px;
  font-size: 24px;
  //
  font-weight: 400;
  color: #ffffff;
  background-color: rgb(17, 88, 232);
  text-align: center;
  line-height: 54px;
  cursor: pointer;
}

.leafMenuItem:hover {
  background-color: rgba(17, 88, 232, 0.5);
}

.active {
  background-color: rgba(0, 0, 0, 0.3);
}

.active:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.contentDescTitle {
  font-size: 22px;
  font-weight: bolder;
  color: #000000;
  text-align: left;
  hyphens: auto;
  overflow-wrap: anywhere;
}

.contentDescImgWrapper {
  width: 350px;
  margin-right: 67px;
  margin-bottom: 36px;
  cursor: pointer;
  padding: 5px;
  box-sizing: border-box;
  transition: all 0.5s;
}

.contentDescImgWrapper:hover .contentDescImg {
  box-shadow: 0 0 20px rgba(50, 50, 50, 0.3);
}

.contentDescImgWrapper:nth-of-type(3n) {
  margin-right: 0;
}

.contentDescImg {
  width: 100%;
  height: 245px;
  margin-bottom: 18px;
  box-shadow: 0 0 10px rgba(50, 50, 50, 0.1);
  transition: all 0.5s;
}

.rightContent {
  flex: 1;
  padding-bottom: 400px;
  position: relative;
}

.titleDivider {
  margin: 11px 0 60px 0;
  height: 3px;
  background-color: #1158e8;
}

.contentTitle {
  font-size: 36px;
  font-weight: 400;
  color: #000000;
  text-align: left;
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

.topLogo {
  width: 1920px;
  height: 331px;
  background: #17457c;
  margin-bottom: 103px;
  position: relative;
}
</style>