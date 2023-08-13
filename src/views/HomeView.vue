<template>
  <div class="home">
    <el-carousel trigger="click" height="80vh" class="carouselWrapper">
      <el-carousel-item v-for="(item, index) in headImg" :key="index">
        <img class="carouselImg" alt="加载中" data-src="../img/oilWall.png" :src="item.url || '../img/oilWall.png'"
          v-if="showCarousel">
      </el-carousel-item>
    </el-carousel>
    <div>
      <div class="subTitle companyProfile" ref="profile">
        <div>COMPANY</div>
        <div>PROFILE</div>
      </div>
      <div class="companyProfileDes ">
        <div class="companyProfileDetails">Beijing Well Debon Technology Ltd. is a comprehensive oilfield service company
          mainly engaged in the research and development, manufacture of oil drilling tools and provision of various
          drilling services. Our main products include: high efficiency screw, rotary guide screw, all-metal screw,
          downhole drilling shocker, special multi-purpose drilling tools, fishingtools, etc. Our main customers are
          PetroChina, Sinopec, CNOOC and other companies in the Middle East and Southeast Asia, and we also provide
          directional well, drilling speed and salvage services for PetroChina, Sinopec and CNOOC.Well Debon adheres to
          the business philosophy of "leading technology, service first, honesty based, and sincere cooperation",
          providing customers with high-quality products and services. We are willing to cooperate with our domestic and
          foreign counterparts, leverage our respective advantages, and develop and grow together.
        </div>
        <img class="companyProfileImg " src="../img/companyImg.png" alt="">

      </div>
    </div>
    <div>
      <div class=" subTitle">
        <div>SERVICES</div>
      </div>
      <div class="servcicesWrapper">
        <div v-for="(item, index) in servicesArr" :key="index" class="servcicesItem" @click='servcicesItemMore(item)'>
          <div class="servcicesItemSmegma"></div>

          <img :src='item.img' alt="">
          <div class="servcicesItemTitle">
            <div class="servcicesItemBig">{{ item.title }}</div>
            <div class="servcicesItemMore">
              Click to learn more >>
            </div>

          </div>

        </div>

      </div>
    </div>

    <div>
      <div class="subTitle">
        <div>COOPERATIVE</div>
        <div>PARTNER</div>
      </div>

      <div class="cooperativeWrapper">
        <div v-for="(item, index) in cooperativeArr" :key="item.id" class="cooperativeImgWrapper">
          <img :src="item.img" alt="" class="cooperativeImg">
        </div>


      </div>

    </div>


    <div>
      <div class="subTitle" ref='culture'>
        <div>CORPORATE</div>
        <div>CULTURE</div>
      </div>
      <div class="bottomDesWrapper">
        <div class="bottomDes">
          Technology Leadership
        </div>
        <div class="bottomDes">
          Quality Assurance
        </div>
        <div class="bottomDes">
          Honesty and trustworthiness
        </div>
        <div class="bottomDes">
          Abide by the contract
        </div>
      </div>
      <div class="welldebonImgWrapper">
        <!-- <img src="../img/welldebonBack.png" alt=""> -->
        <img src="../img/opacity.png" alt="" class="welldebonImgMain">

      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import serviceManufacturing from '../img/serviceManufacturing.png'
import serviceSales from '../img/serviceSales.png'
import serviceLeasing from '../img/serviceLeasing.png'
import serviceLast from '../img/serviceLast.png'
import petroChina from '../img/petroChina.png'
import sinopec1 from '../img/sinopec1.png'
import cnooc from '../img/cnooc.png'
import sinopec from '../img/sinopec.png'
import yanchangPetroleum from '../img/yanchangPetroleum.png'
export default {
  name: 'HomeView',
  data() {
    return {
      servicesArr: [
        {
          title: 'Manufacturing ',
          img: serviceManufacturing,
          toPath: '/products?type=3',
        },
        {
          title: 'Sales',
          img: serviceSales,
          toPath: '/details/sales',
        },
        {
          title: 'Leasing',
          img: serviceLeasing,
          toPath: '/details/leasing',
        },
        {
          title: 'Services',
          img: serviceLast,
          toPath: '/details/services',
        },
      ],
      cooperativeArr: [
        {
          id: 1,
          img: petroChina,
        },
        {
          id: 2,
          img: sinopec1,
        },
        {
          id: 3,
          img: cnooc,
        },
        {
          id: 4,
          img: sinopec,
        },
        {
          id: 5,
          img: yanchangPetroleum,
        }
      ],
      currentScroll: 0,
      headImg: [
        {
          filename: '默认图片',
          thumb_style: "",
          url: require('../img/oilWall.png')
        }
      ],
      showCarousel: true,
    }
  },
  components: {

  },
  watch: {
    $route(to, from) {
      if (to.path == from.path && to.query && to.query.ref) {
        window.scrollTo({
          top: this.$refs[this.$route.query.ref].offsetTop - this.$refs[this.$route.query.ref].offsetHeight,
          behavior: "smooth"
        })
      }
    }
  },
  created() {
    this.loadImges()

  },
  mounted() {
    if (this.$route.query && this.$route.query.ref) {
      window.scrollTo({
        top: this.$refs[this.$route.query.ref].offsetTop - this.$refs[this.$route.query.ref].offsetHeight,
        behavior: "smooth"
      })
    }
    this.$nextTick(() => {
      new this.$wow.WOW().init();
    });
  },
  methods: {
    servcicesItemMore(item) {
      this.$router.push(item.toPath)
      window.scrollTo(0, 0)
    },
    // async getHeadingImg() {
    //   headingImg().then(res => {
    //     if (res && res.code == 1) {
    //       this.headImg = JSON.parse(JSON.stringify(res.data))
    //     }
    //   })
    // },
    loadImges() {
      return new Promise(async (resolve, reject) => {
        try {
          const response = await fetch('http://admin.welldebon.com/api/content/headimg'); // 发起接口请求获取图片数据
          const data = await response.json();
          let imgArr = data.data
          const promises = imgArr.map((item, index) => {
            return new Promise((resolve) => {
              const img = new Image();
              img.onload = resolve;
              img.src = item.url;
            });
          });

          await Promise.all(promises);
          this.headImg = imgArr;
          this.showCarousel = false
          this.$nextTick(() => {
            this.showCarousel = true
          })
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    // replaceImage(event, item) {
    //   const img = event.target;
    //   img.src = item.url;
    // },

  }
}
</script>
<style>
img {
  width: 100%;
  height: 100%;
}
</style>

<style lang="less" scoped>
.carouselWrapper {
  margin-bottom: 153px;
}

// ::v-deep .carouselWrapper .el-carousel__container {
//   background-image: url('../img/oilWall.png');
//   background-repeat: no-repeat;
//   background-position: center center;
//   background-size: 100% 100%;
//   background-origin: content-box;
//   background-clip: border-box;
// }

.carouselImg {
  height: 100%;
  width: 100%;
  background-image: url('../img/oilWall.png');

  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  background-origin: content-box;
  background-clip: border-box;
}

.subTitle {
  font-size: 60px;

  font-weight: 500;
  color: #1158E8;
  line-height: 60px;
  padding-bottom: 45px;
  position: relative;
}

.subTitle::after {
  content: '';
  width: 106px;

  height: 5px;
  background: #1158E8;
  text-align: center;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 45px;
}

.bottomDesWrapper {
  margin-top: 130px;
  margin-bottom: 115px;
}

.bottomDes {
  font-size: 48px;
  font-weight: 500;
  color: #464646;
  margin-top: 42px;
}

.bottomDes:nth-of-type(1) {
  margin-top: 0;
}

.welldebonImgWrapper {
  position: relative;
  width: 1038px;
  height: 106px;
  margin: auto;
  margin-bottom: 222px;
  transition: all 0.5s;
  overflow: hidden;
}

.welldebonImgWrapper:hover {
  .welldebonImgBack {
    opacity: 1;
  }
}


.welldebonImgMain,
.welldebonImgBack {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s;
}

.welldebonImgBack {
  z-index: 1;
  opacity: 0.5;

  // transform: translate(-100%, 0%);
}



.welldebonImgMain {
  width: 100%;
  height: 100%;
  z-index: 2;
  background-image: url('@/img/welldebonBack.png');
  background-color: #FFFFFF;
  background-repeat: no-repeat;
  background-position: center center;
  // background-size: 100% 100%;
  // background-origin: content-box;
  background-clip: border-box;
  position: absolute;
  background-attachment: fixed;
  background-size: cover;
  // border: none;
  clip-path: inset(2px 2px 2px 2px);
  -webkit-clip-path: inset(2px 2px 2px 2px);
}


.companyProfileDes {
  margin-bottom: 164px;
}

.companyProfileDes {
  margin-top: 164px;
  margin-bottom: 188px;
  font-size: 18px;

  font-weight: normal;
  color: #000000;
  padding: 0 213px 0 240px;
  display: flex;
}

.companyProfileDetails {
  flex: 1;
  margin-right: 82px;
  line-height: 1.5em;
  text-align: justify;
  font-size: 22px;
}

.servcicesWrapper {
  display: flex;
  padding: 0 141px;
  justify-content: space-between;
  margin-top: 127px;
  margin-bottom: 188px;
}

.servcicesItem {
  width: 388px;
  height: 684px;
  // background: rgba(0, 0, 0, 0.4);
  position: relative;
  // opacity: 0.4;
  background: #000000;
  cursor: pointer;
  overflow: hidden;
}

.servcicesItem:hover {
  box-shadow: 0px 3px 8px 8px rgba(222, 221, 225, 0.3);

  .servcicesItemSmegma {
    top: -50%;
    left: -50%;

  }
}

.servcicesItemSmegma {
  width: 200%;
  height: 200%;
  position: absolute;
  top: -200%;
  left: -200%;
  overflow: hidden;
  background: #000000;
  transform: rotate(45deg);
  z-index: 2;
  opacity: 0.4;
  transition: all 0.5s;

}


.servcicesItemTitle {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 480px;
  font-size: 40px;

  font-weight: 500;
  color: #FFFFFF;
  z-index: 3;
}

.servcicesItemBig {}

.servcicesItemMore {
  margin: auto;
  width: max-content;
  margin-top: 44px;
  font-size: 18px;

  font-weight: normal;
  color: #FFFFFF;

}

.servcicesItemMore::after {
  content: '';
  width: 100%;
  height: 1px;
  margin-top: 10px;
  background-color: #ffffff;
  display: block;

}

.cooperativeWrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 130px;
  margin-bottom: 203px;
  padding: 0 141px;
}

.companyProfileImg {
  width: 612px;
  height: 535px;
}

.cooperativeImg {
  height: 92px;

}

.cooperativeImgWrapper {
  padding-right: 30px;
  box-sizing: border-box;
}

.cooperativeImgWrapper:nth-last-child(1) {
  padding-right: 0;
}
</style>
