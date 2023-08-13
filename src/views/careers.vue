<template>
  <div>
    <div class="topLogo">
      <div class="joinUs">JOIN US</div>
      <div class="servcicesItemSmegma"></div>

      <img src="../img/cooperate.png" alt="">


    </div>
    <div class="careersWrapper" v-for="(item, index) in careersArr" :key="index">
      <div class="careersTitleWrapper">
        <div class="careersTitle">{{ item.title }}</div>
        <div class="persionWrapper">
          <img src="../img/persion.png" alt="" class="persionIcon">
          {{ item.peopleNum }}
        </div>
        <div class="localWrapper">
          <img src="../img/local.png" alt="" class="localIcon">
          {{ item.loacl }}
        </div>
      </div>
      <div class="careersDescription">Job Description</div>
      <br />
      <div class="careersDesc" v-html="item.desc"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      careersArr: [
        {
          title: "Foreign trade salesman",
          loacl: "Beijing, China",
          peopleNum: 5,
          desc: `<div>Responsibilities: </div> 
                <div>Responsible for the technical design of products related to oil drilling tools.</div> 
                </br>
                <div>Requirements:</div> 
                <div>1.Bachelor degree or above, majoring in machining process, machinery manufacturing or other related majors.</div> 
                <div>2.Familiar with mechanical design principles, skilled in using CAD, soilworks and other drawing software.</div> 
                <div>3.Independent in technical support work, strong willingness to learn.</div> 
                <div>4.Experience in oil drilling tools related industry is preferred.</div> 
                <div>5.Proactive in work, with strong teamwork ability, responsibility and commitment.</div> 
                <div>6.Physically fit and of good character.</div> 
                </br>
                <div>Job benefits</div> 
                <div>Five-year insurance, one gold, welfare awards.</div> `
        },
        {
          title: "Technical Engineer",
          loacl: "Beijing, China",
          peopleNum: 2,
          desc: `<div>Responsibilities: </div> 
                <div>1 Responsible for the development of foreign oilfield markets, petroleum equipment agents and petroleum equipment traders.</div> 
                <div>2.Responsible for communication and negotiation with foreign users, facilitating cooperation orders, supervising and tracking the return of payment.</div> 
                <div>3.Responsible for the implementation of foreign trade contracts and risk control in the trade process.</div> 
                <div>4.Responsible for the development and maintenance of customers.</div> 
                </br>
                <div>Job Requirements.
                <div>1.Excellent social skills in foreign language (fluent in reading, writing and listening).</div> 
                <div>2.Bachelor degree or above in e-commerce, foreign language, marketing, international trade or other related majors (freshers accepted).</div> 
                <div>3.Strong language communication skills, down-to-earth and good at learning.</div> 
                <div>4.like sales, have a passion for sales. Dare to challenge themselves, strong anti-stress ability.</div> 
                <div>Salary scale:Negotiable, fixed salary + performance salary.</div> `
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
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

.careersTitle {
  font-size: 24px;
  
  font-weight: bolder;
  color: #000000;
  width: 40%;
}

.persionWrapper {
  width: 20%;
}

.persionIcon {
  width: 27px;
  height: 31px;
  transform: translateY(25%);
}

.localIcon {
  width: 24px;
  height: 31px;
  transform: translateY(30%);

}

.careersWrapper {
  margin: auto;
  width: 1445px;
  background: #efefef;
  padding: 40px 73px;
  margin-bottom: 67px;
  text-align: left;
  color: #000;
  font-size: 16px;
  
  font-weight: bolder;
  letter-spacing: 1.5px;
}
.careersDescription {
  font-size: 16px;
  margin-top: 36px;
  
  font-weight: bolder;
}
.careersDesc {
  font-size: 14px;
  line-height: 24px;
}
.careersTitleWrapper {
  display: flex;

  align-items: center;
}
</style>