<template>
    <div>
        <div class="topLogo">
            <div class="joinUs">ENTER THE PRESS CENTER</div>
            <div class="servcicesItemSmegma"></div>

            <img src="../img/newsCenterLogo.png" alt="">
        </div>

        <div class="newsCenterWrapper" v-for="(item, index) in centerArr" :key="index">
            <div class="newsCenterImg wow slideInLeft" data-wow-duration="1s" data-wow-delay="0s" data-wow-offset="10"
                data-wow-iteration="1">
                <img :src="item.avatar || '../img/companyImg.png'" alt="" @error="showdefaultImg(item)" v-if="showImg">

            </div>
            <div class="newsCenter wow slideInRight" data-wow-duration="1s" data-wow-delay="0s" data-wow-offset="10"
                data-wow-iteration="1">
                <div class="newsCenterTitle">
                    <div class="newsCenterTitleText">{{ item.title }}</div>
                    <div class="newsCenterTime">{{ item.time }}</div>
                </div>
                <div class="newsCenterDesc">
                    <div v-html="item.detail"></div>
                </div>
                <button class="newCenterBtn" @click="toDetails(item)">View Now >></button>
            </div>
        </div>
        <el-pagination background layout="prev, pager, next" class="pagiation" @current-change="currentChange"
            :total="newsCenterArr.length">
        </el-pagination>
    </div>
</template>
  
<script>
import companyImg from '../img/companyImg.png'
import { news } from "@/api/index"

export default {
    data() {
        return {
            newsCenterArr: [],
            centerArr: [],
            currentPage: 1,
            showImg: true,
        }
    },
    async mounted() {
        await this.getnewsList()
        this.currentChange(1)
        this.$nextTick(() => {
            new this.$wow.WOW().init();
        });
    },
    computed: {
    },
    methods: {
        currentChange(value) {
            this.centerArr = []
            this.centerArr = this.newsCenterArr.slice(value - 1, 10)
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        },
        toDetails(item) {
            this.$router.push(`/newsCenterDetails/${item.id}`)
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        },
        getnewsList() {
            return new Promise((resolve, reject) => {
                news().then(res => {
                    if (res && res.code == 1) {
                        let newsCenterArrs = []
                        newsCenterArrs = res.data.list.map((item, index) => {
                            return {
                                ...item,
                                // id: index,
                            }
                        })
                        this.newsCenterArr = JSON.parse(JSON.stringify(newsCenterArrs))
                        resolve()
                    }
                })


            })


        },
        showdefaultImg(item) {
            item.avatar = companyImg
            this.showImg = false
            this.$nextTick(() => {
                this.showImg = true
            })
        }
    }
};
</script>
  


<style lang="less">
.pagiation {
    margin-bottom: 181px;
    padding-top: 100px !important;

    .el-icon-arrow-left:before {
        content: '上一页';
        font-size: 30px;
        font-family: 59;
        font-weight: 400;
    }

    .el-icon-arrow-right:before {
        content: '下一页';
        font-size: 30px;
        font-family: 59;
        font-weight: 400;
    }

    .btn-prev,
    .btn-next {
        width: 130px;
        height: 64px;

    }

    .number,
    .more {
        line-height: 64px;
        font-size: 30px;
        font-family: 59;
        font-weight: 400;
        color: #FFFFFF;
        width: 64px;
        height: 64px;
    }

    .more::before {
        line-height: 64px !important;
    }
}
</style>

<style lang="less" scoped>
.newsCenterTitle {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 50px;
    font-weight: bolder;
}

.newsCenterTitleText {
    font-size: 48px;
    color: #333333;
}

.newsCenterTime {
    font-size: 30px;
    font-weight: normal;
    color: #333333;
}

.newsCenterDesc {
    font-size: 22px;
    font-weight: normal;
    color: #888888;
    line-height: 28px;
    overflow: hidden;
    text-align: justify;
    max-height: 168px;
    // white-space: normal  !important;
    // display: -webkit-box !important;
    // -webkit-line-clamp: 5 !important;
    // text-overflow: ellipsis !important;
    // -o-text-overflow: ellipsis !important;
    // -webkit-box-orient: vertical !important;;
    display: -webkit-box;
    /*! autoprefixer: off; */     
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
}

.newCenterBtn {
    border: none;
    width: 229px;
    height: 74px;
    background: #1158E8;
    box-shadow: 0px 3px 10px 0px rgba(17, 88, 232, 0.75);
    font-size: 24px;
    font-weight: normal;
    color: #FFFFFF;
    line-height: 24px;
    margin-top: 60px;
    cursor: pointer;
}

.newsCenter {
    width: 722px;
    text-align: left;
}

.newsCenterWrapper {
    display: flex;
    color: black;
    padding: 0 241px 0 141px;
    box-sizing: border-box;
    flex-wrap: wrap;
    margin-bottom: 103px;
}

.newsCenterImg {
    display: inline-block;
    width: 713px;
    height: 431px;
    margin-right: 103px;
}

.servcicesItemSmegma {
    width: 100%;
    height: 100%;
    z-index: 2;
    background: #17457C;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
}

.joinUs {
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