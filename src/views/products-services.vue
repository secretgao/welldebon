<template>
  <div>
    <div class="topLogo">
      <div class="topText">Products & Services</div>
      <div class="servcicesItemSmegma"></div>
      <img src="../img/newsCenterLogo.png" alt="">
    </div>
    <div class="productsSquareWrapper">
      <div v-for="(item, index) in productsArr" class="productsSquare wow" @click='servcicesItemMore(item)'
        :class="index % 2 == 0 ? 'bounceInLeft' : 'bounceInRight'" data-wow-duration="1s" data-wow-delay="0s"
        data-wow-offset="10" data-wow-iteration="1">
        <img :src="item.img" alt="" class="productsSquareImg">
        <div class="productsSquareText">
          <div class="productsSquareTextTitle">{{ item.title }}</div>
          <div class="productsSquareTextClick">
            Click to learn more >>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
  
<script>
import serviceManufacturing from '../img/manufacturingSquare.png'
import serviceSales from '../img/salesSquare.png'
import serviceLeasing from '../img/leasingSquare.png'
import serviceLast from '../img/servicesSquare.png'
export default {
  data() {
    return {
      productsArr: [
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
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      new this.$wow.WOW().init();
    });
  },
  methods: {
    servcicesItemMore(item) {
      this.$router.push(item.toPath)
      window.scrollTo(0, 0)
    }
  }
};
</script>
  
<style lang="less" scoped>
.productsSquareWrapper {
  margin: 160px auto 70px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.productsSquare {
  width: 677px;
  height: 384px;
  background: #000000;
  margin-bottom: 120px;
  position: relative;
  cursor: pointer;
}

.productsSquareText {
  position: absolute;
  bottom: 16%;
  left: 9%;
  color: #FFFFFF;
  text-align: left;
}

.productsSquareTextTitle {
  font-size: 48px;
  
  font-weight: 500;
  color: #FFFFFF;
  margin-bottom: 30px;
}

.productsSquareTextClick {
  font-size: 24px;
  
  font-weight: normal;
  color: #FFFFFF;

}

.productsSquareImg {
  width: 100%;
  height: 100%;
}

.servcicesItemSmegma {
  width: 100%;
  height: 100%;
  z-index: 2;
  background: #17457C;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
}

.topText {
  font-size: 60px;
  
  font-weight: 500;
  color: #FFFFFF;
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