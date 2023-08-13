<template>
    <div>
        <div class="topLogo">
            <div class="topText">{{ topText }}</div>
            <div class="servcicesItemSmegma"></div>

            <img :src="imgSrc" alt="">
        </div>
        <div class="destailsContent">
            <div v-html="formattedText">

            </div>
            <!-- {{ contentText }} -->
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            imgSrc: '',
            topText: '',
            contentText: '',
        };
    },
    mounted() {
        this.changeMounted()
    },
    updated() {
        this.changeMounted()
    },
    computed: {
        formattedText() {
            return this.contentText.replace(/\n/g, '<br>'); // 将换行符替换为 <br> 标签
        },
    },
    watch: {
        '$route.params.name': function (newName) {
            this.changeMounted()
        }
    },
    methods: {
        changeMounted() {
            this.topText = this.$route.params.name.toUpperCase()
            let newImgSrc = require(`../img/${this.$route.params.name}.png`)
            this.imgSrc = newImgSrc
            switch (this.$route.params.name) {
                case 'leasing':
                    this.contentText = `Well Debon Technology Co., Ltd. provides customers with leasing services for petroleum drilling tool products such as jars, screw drilling tools, fishing tools, etc. to reduce customer capital costs, drilling costs, and maintenance costs, and meet their various needs for drilling tools.`;
                    break;
                case 'sales':
                    this.contentText = 'The main products sold by Well Debon Technology Co., Ltd. are: high-efficiency screw, rotary steering screw, all metal screw, downhole jar while drilling, special multi-purpose drilling tools, fishing tools, etc. The main customers in China are PetroChina, Sinopec, CNOOC, etc. The international customers are mainly located in the Middle East, Southeast Asia and other regions. At the same time, the company acts as an agent for the sales of high-tech products from multiple well-known international oil drilling equipment companies in China.';
                    break;
                case 'services':
                    this.contentText = `Directional well services
                            Well Debon Technology Co., Ltd. provides comprehensive specialized drilling services such as directional drilling and salvage. Based on the well structure design, geological conditions and lithology data of the construction block, as well as the drilling usage data of adjacent blocks, the company applies strata analysis software technology, combined with the design characteristics of various types of drilling tools and previous use results, to provide fast and accurate directional drilling services.

                            Testing services
                            From individual welds to comprehensive drilling rig inspections, the team can meet your specific needs. DIS has multiple domestic inspection agencies and is equipped with experienced and certified ASNT SNT-TC-1A Level 2 inspectors, covering a wide range of inspection services. Our certified inspectors are equipped with calibrated advanced non-destructive testing (NDT) equipment. We are able to provide analysis, maintenance, and repair serv`
                    break;
                default:
                    this.contentText = 'Beijing Well Debon Technology Ltd. is a comprehensive oilfield service company mainly engaged in the research and development, manufacture of oil drilling tools and provision of various drilling services. Our main products include: high efficiency screw, rotary guide screw, all-metal screw, downhole drilling shocker, special multi-purpose drilling tools, fishingtools, etc. Our main customers are PetroChina, Sinopec, CNOOC and other companies in the Middle East and Southeast Asia, and we also provide directional well, drilling speed and salvage services for PetroChina, Sinopec and CNOOC.Well Debon adheres to the business philosophy of "leading technology, service first, honesty based, and sincere cooperation", providing customers with high-quality products and services. We are willing to cooperate with our domestic and foreign counterparts, leverage our respective advantages, and develop and grow together.';
                    break;
            }
        }
    }
};
</script>
  
<style lang="less" scoped>
.topLogo {
    width: 1920px;
    height: 331px;
    background: #17457c;
    margin-bottom: 103px;
    position: relative;
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

.servcicesItemSmegma {
    width: 100%;
    height: 100%;
    z-index: 2;
    background: #17457C;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
}

.destailsContent {
    width: 75%;
    height: auto;
    font-size: 24px;

    font-weight: normal;
    color: #000000;
    line-height: 36px;
    margin: 140px auto 300px auto;
    text-align: justify;
}
</style>