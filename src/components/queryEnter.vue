<template>
  <div class="queryEnterWrapper">
    <div
      v-for="(item, index) in queryArr"
      :key="index"
      class="queryEnter"
      :class="queryEnterAction == index ? 'queryEnterAction' : ''"
      @click="clickEnter(item, index)"
    >{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: {
    queryEnterAction: {
      type: Number,
      defalut: 0
    },
    queryArr:{
      type:Array,
      defalut:[],
    }
  },
  methods: {
    clickEnter(item, index) {
      this.$router.push(item.href);
      window.scrollTo(0, 0)
      this.$emit('clickEnter', index)
    }
  }
};
</script>

<style lang="less" scoped>
.queryEnterWrapper {
  display: flex;
  align-items: center;
}

.queryEnter {
  // height: 46px;
  // line-height: 46px;
  padding: 15px 20px;
  font-size: 22px;
  font-weight: 500;
  box-sizing: border-box;
  color: #333333;
  box-sizing: border-box;
  cursor: pointer;
}

.queryEnterAction {
  // width: 175px;
  color: #ffffff;
  box-sizing: border-box;
  padding: 15px 20px;
  // height: 46px;
  background: #1158e8;
  border-radius: 55px;
  box-shadow: 0px 1px 18px 0px rgba(17, 88, 232, 0.65);
}
</style>