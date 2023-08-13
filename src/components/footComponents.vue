<template>
    <div class="footComponentsWrapper">
        <div class="left">
            <div class="leftTitle">About us</div>
            <div v-for="(item, index) in routerArr" :key="index" :class="active == item.indexId ? 'active' : ''"
                class="leftItem" @click="leftClick(item)">
                <div>{{ item.title }}</div>
            </div>
        </div>
        <div class="middle">
            <div class="middleTitle">Businesses ares</div>

            <div v-for="(item, index) in businessesArr" :class="active == item.indexId ? 'active' : ''" :key="index"
                class="middleItem" @click="leftClick(item)">
                <div>{{ item.title }}</div>
            </div>
        </div>

        <div class="desWrapper">
            <div class="desWrapperTitle"> Beijing Well DebonTechnology Ltd.</div>
            <div class="desContent">
                <div>
                    <div class="desContentLeft">E-mail：</div>
                    <div class="desContentRight">bjwelldebon@welldebon.com</div>
                </div>
                <div>
                    <div class="desContentLeft">tel：</div>
                    <div class="desContentRight">+86-13582883885</div>

                </div>
                <div>
                    <div class="desContentLeft">Website：</div>
                    <div class="desContentRight">www.welldebon.com</div>


                </div>
                <div>
                    <div class="desContentLeft">Address：</div>
                    <div class="desContentRight">No. 18, Construction Road, Kaixuan Street, Liangshan District, Fangshan
                        District, Beijing -
                        D19596</div>

                </div>
            </div>

        </div>
        <img src="../img/newlogo.png" class="newlogoImg">
    </div>
</template>


<script>
export default {
    data() {
        return {
            routerArr: [{
                title: 'Company profile',
                path: '?ref=profile',
                indexId: 0,
            },
            {
                title: 'Corporate culture',
                path: '?ref=culture',
                indexId: 1,
            },
            {
                title: 'Careers',
                path: 'careers',
                indexId: 3
            },
            {
                title: 'News Center',
                path: 'newsCenter',
                indexId: 2
            },],
            businessesArr: [{
                title: 'Manufacturing',
                path: 'products?type=3',
                indexId: 4,
            },
            {
                title: 'Sales',
                path: 'details/sales',
                indexId: 5,
            },
            {
                title: 'Leasing',
                path: 'details/leasing',
                indexId: 6
            },
            {
                title: 'Services',
                path: 'details/services',
                indexId: 7
            },],
            descArr: [],
            active: -1,
            hasActive: false,
        }
    },
    created() {
        this.detectionAction(this.$route)
    },
    watch: {
        $route(to, from) {
            this.detectionAction(to)
        }
    },
    methods: {
        detectionAction(route) {
            this.hasActive = false
            if (route.query && route.query.ref) {
                if (route.query.ref == 'profile') {
                    this.active = 0
                    this.hasActive = true
                    return
                }
                if (route.query.ref == 'culture') {
                    this.active = 1
                    this.hasActive = true
                    return
                }
            }
            for (let i = 0; i < this.routerArr.length; i++) {
                if(this.$route.path == '/'){
                    this.active = -1
                    return
                }
                if (this.$route.path.indexOf(this.routerArr[i].path) >= 0) {
                    this.active = this.routerArr[i].indexId
                    this.hasActive = true
                } else {
                    for (let index = 0; index < this.businessesArr.length; index++) {
                        let showPath = `/${this.businessesArr[i].path}`
                        if (showPath.indexOf(this.$route.path) >= 0) {
                            this.active = this.businessesArr[i].indexId
                            this.hasActive = true
                        }
                    }
                }
            }


            if (!this.hasActive) {
                this.active = -1
            }

        },
        leftClick(item) {
            this.$emit('leftClick', item)
        }
    }
};
</script>

<style lang="less" scoped>
.leftTitle,
.middleTitle {
    font-size: 24px;

    font-weight: 500;
    color: #000000;
    margin-bottom: 11px;
}

.left,
.middle {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

}

.active {
    color: #fff;
}

.leftItem,
.middleItem {
    cursor: pointer;
    font-size: 18px;

    font-weight: 400;
}

.footComponentsWrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
}

.desWrapper {
    margin-top: auto;
    // height: 160px;
    font-size: 19px;

    font-weight: 400;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.desContent {
    line-height: 27px;
    margin-top: 30px;
}

.desWrapperTitle {
    font-size: 29px;

    color: #000000;
}

.desContentLeft {
    display: inline-block;
    width: 5em;
}

.desContentRight {
    display: inline-block;
}

.newlogoImg {
    width: 221px;
    height: 58px;
    position: absolute;
    top: 0;
    right: 0;
}
</style>