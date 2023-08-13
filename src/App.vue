<template>
  <div id="app">

    <el-backtop></el-backtop>

    <el-container>
      <el-header class="containerHeader">
        <div class="headerLogoWrapper">
          <img class="headerLogo" src="./img/logo.png" @click="logoClick" />

        </div>
        <queryEnter :queryEnterAction="queryEnterAction" @clickEnter="clickEnter" :queryArr="queryArr" class="queryEnter">
        </queryEnter>
        <el-select v-model="language" class="langSelect">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-header>
      <el-main>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />

      </el-main>
      <el-footer class="containerFooter">
        <footComponents @leftClick="leftClick"></footComponents>
      </el-footer>
    </el-container>
  </div>
</template>


<script>
import footComponents from "./components/footComponents.vue";
import queryEnter from "@/components/queryEnter";
export default {
  data() {
    return {
      queryEnterAction: 0,
      language: 'en',
      options: [{
        value: 'en',
        label: 'EN'
      }],
      queryArr: [
        {
          title: "ABOUT US",
          href: "/",
          children: []
        },
        {
          title: "PRODUCTS&SERVICES",
          href: "/products-services",
          children: ['/products', '/manufacturing', '/details'],
        },
        {
          title: "NEWS CENTER",
          href: "/newsCenter",
          children: ['/newsCenterDetails'],
        },
        {
          title: "CAREERS",
          href: "/careers",
          children: []
        },
        {
          title: "CONTACT US",
          href: "/contactUs",
          children: []
        }
      ],
    }
  },
  created() {

    for (let i = 0; i < this.queryArr.length; i++) {
      if (this.$route.path.indexOf(this.queryArr[i].href) >= 0) {
        this.queryEnterAction = i
      } else {
        if (this.queryArr[i].children && this.queryArr[i].children.length > 0) {
          for (let j = 0; j < this.queryArr[i].children.length; j++) {
            if (this.$route.path.indexOf(this.queryArr[i].children[j]) >= 0) {
              this.queryEnterAction = i
            }
          }
        }
      }
    }
  },
  mounted() {
    document.cookie = null
  },
  watch: {
    $route(to, from) {
      if (to.path.indexOf('/details') >= 0 || to.path.indexOf('/products') >= 0 || to.path.indexOf('/manufacturing') >= 0) {
        this.clickEnter(1)
      }
    }
  },
  components: {
    queryEnter,
    footComponents
  },
  methods: {
    leftClick(item) {
      const queryString = item.path.split('?')[1];
      const params = new URLSearchParams(queryString);
      const ref = params.get('ref');
      if (this.$route.path == '/' && item.path.indexOf('?ref') >= 0) {
        this.$router.push({
          query: {
            ref: ref
          }
        })
        this.$nextTick(() => {
          this.$router.push({
            query: {
              ref: ref
            }
          })
        })
        if (ref == this.$route.query.ref) {
          this.$router.push({
            query: {
            }
          })
          this.$nextTick(() => {
            this.$router.push({
              query: {
                ref: ref
              }
            })
          })
        }

      }
      else {
        this.$router.push(`/${item.path}`)
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.queryEnterAction = item.indexId
        if (item.path.indexOf('?ref') >= 0) {
          this.$router.push({
            query: {
              ref: ''
            }
          })
          this.$nextTick(() => {
            this.$router.push({
              query: {
                ref: ref
              }
            })
          })
        }

      }

    },
    clickEnter(index) {
      this.queryEnterAction = index;
    },
    logoClick() {
      this.queryEnterAction = 0
      if (this.$route.path.indexOf('/home') < 0) {
        this.$router.push('/home')

        window.scrollTo({
          top: 0,
        })
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth"

        })
      }

    }
  }
};
</script>

<style lang="less">
* {
  font-family: "Helvetica";
}

::-webkit-scrollbar {
  width: 0;

}

.el-backtop {
  background-color: rgba(2, 50, 141, 1) !important;
  color: #fff !important;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 137px !important;
}

.el-container {
  min-height: 100vh;
}

.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #fff;
  color: #fff;
  text-align: center;
  padding: 0 !important;
  overflow-x: hidden !important;
}
</style>


<style lang="less" scoped>
.langSelect {
  min-width: 60px;
  max-width: 100px;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;

}

::v-deep .langSelect .el-input__inner {
  border: none;
  padding: 0;
  font-size: 24px;
  font-weight: 500;
  color: #023A8E;
}

::v-deep .langSelect .el-input {
  display: flex;
}

::v-deep .langSelect .el-input__suffix {
  position: static;

}

.containerHeader {
  display: flex;
  height: 137px !important;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.queryEnter::after {
  content: '';
  margin-left: 5px;
  height: 74px;
  border: 1px solid #F0F0F0;
}

.headerLogo {
  margin-left: 150px;
  margin-right: 250px;
  width: 300px;
  height: 30px;
  cursor: pointer;

}

.headerLogoWrapper {
  display: flex;
  align-items: center;
}

.containerFooter {
  width: 100%;
  height: 346px !important;
  background-color: rgba(153, 153, 153, 1);
  padding: 71px 217px 85px 241px;
  box-sizing: border-box;
}
</style>