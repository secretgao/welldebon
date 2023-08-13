<template>
    <div>
        <div class="topLogo">
            <div class="joinUs">ENTER THE PRESS CENTER</div>
            <div class="servcicesItemSmegma"></div>

            <img src="../img/newsCenterLogo.png" alt="">
        </div>
        <div class="detailsMain">
            <h1 class="detailsTitle">{{ title }}</h1>
            <div class="detailsTime">2022.05.01</div>
            <div v-html="details" class="detailsContent"></div>
            <img :src="imgUrl || '@/img/companyImg.png'" alt="" @error="nofind()" class="detailsImg" v-if="showImg">
        </div>
    </div>
</template>
  
<script>
import img from '../img/companyImg.png'
import { newsDetail } from '@/api/index';
export default {
    data() {
        return {
            details: '',
            imgUrl: '',
            title: '',
            showImg: true
        }
    },
    mounted() {
        this.getDetails()
    },
    methods: {
        getDetails() {
            newsDetail({ id: this.$route.params.id }).then(res => {
                if (res && res.code == 1) {
                    this.title = res.data.title
                    this.details = res.data.detail
                    this.imgUrl = res.data.avatar
                }
            })
        },
        nofind() {
            this.imgUrl = img
            this.showImg = false
            this.$nextTick(() => {
                this.showImg = true
            })
        }
    }
};
</script>


<style lang="less" scoped>
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

.detailsMain {
    padding: 0 240px 250px 240px;
    color: black;
    text-align: left;

    .detailsTitle {
        text-align: center;
        font-size: 60px;
        
        font-weight: 500;
        color: #333333;
        line-height: 13px;
    }

    .detailsTime {
        margin-top: 10px;
        margin-bottom: 20px;
        text-align: right;
        font-size: 30px;
        
        font-weight: normal;
        color: #333333;
    }

    .detailsContent {
        text-align: justify;
        font-size: 24px;
        
        font-weight: normal;
        color: #000000;
        line-height: 36px;
    }

    .detailsImg {
        width: 1440px;
        height: 880px;
        margin-top: 100px;
    }
}
</style>