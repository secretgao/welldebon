<template>
    <div>
        <div class="topLogo">
            <div class="joinUs">CIBTACT US</div>
            <div class="servcicesItemSmegma"></div>
            <img src="../img/contactUsLogo.png" alt="">
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
        <div class="mapWrapper">
            <img src="../img/map.png" alt="" class="mapImg">

        </div>
        <div class="talkWrapper">
            <div class="talkTitle">Hello.Let's talk</div>
            <el-form ref="ruleForm" :model="talkInput" :rules="rules">
                <el-form-item prop="name">
                    <el-input v-model="talkInput.name" placeholder="Name*" class="inputName"></el-input>
                </el-form-item>
                <el-form-item prop="email">
                    <el-input v-model="talkInput.email" placeholder="E-mail*" class="inputEmail"></el-input>

                </el-form-item>

                <div>
                    <div class="messageTitle">Message*</div>
                    <el-form-item prop="message">

                        <el-input type="textarea" class="messageWrapper" v-model="talkInput.message">
                        </el-input>
                    </el-form-item>

                </div>
                <div style="text-align: left"><el-button class="talkBtn" @click="talkClick"
                        :loading="bntLoading">OK</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>
  
<script>
import { submitMessage } from "@/api/index"
export default {
    data() {
        return {
            talkInput: {
                name: '',
                email: '',
                message: '',
            },
            rules: {
                name: [
                    { required: true, message: 'Please enter a name', trigger: 'blur' },
                ],
                email: [
                    { required: true, message: 'Please enter your email address', trigger: 'blur' },
                    { type: 'email', message: 'Please enter the correct email address', trigger: ['blur', 'change'] }
                ],
                message: [
                    { required: true, message: 'Please enter your message', trigger: 'blur' }
                ],
            },
            bntLoading: false,
        };
    },
    methods: {
        talkClick() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.bntLoading = true
                    submitMessage({ ...this.talkInput }).then((res) => {
                        if (res && res.code == 1) {
                            this.$message({
                                message: 'Submitted successfully',
                                type: 'success'
                            });
                        } else {
                            this.$message.error('Submission failed');
                        }
                        this.bntLoading = false
                    })
                } else {

                }
            });
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

.inputName,
.inputEmail {
    border: none;
    border-bottom: 1px solid #6B6B6B;
}

::v-deep .inputName .el-input__inner {
    background-color: #E6E6E6 !important;
    border: none;
    height: 70px;
    padding: 0;
    font-size: 18px;
}

::v-deep .inputName .el-input__inner::placeholder {
    margin-bottom: 20px;
    font-size: 18px;

    font-weight: normal;
    color: #808080;
}

::v-deep .inputEmail .el-input__inner {
    background-color: #E6E6E6 !important;
    border: none;
    padding: 0;
    height: 70px;
    font-size: 18px;
}

::v-deep .inputEmail .el-input__inner::placeholder {
    margin-bottom: 20px;
    font-size: 18px;

    font-weight: normal;
    color: #808080;
}

.desWrapper {
    width: 1442px;
    margin: auto;
    text-align: left;
    font-size: 19px;

    font-weight: normal;
    color: #5A5A5A;
    margin-top: 132px;
    margin-bottom: 65px;
}

.desContent {
    line-height: 40px;
    margin-top: 50px;
}

.desWrapperTitle {
    font-size: 29px;

    font-weight: normal;
    color: #1158E8;
}

.mapWrapper {
    margin: auto;
    width: 1442px;
    height: 665px;
}

.mapImg {
    width: 100%;
    height: 100%;
}

.talkWrapper {
    margin: auto;
    width: 1444px;
    background: #E6E6E6;
    border-radius: 12px;
    margin-top: 93px;
    margin-bottom: 231px;
    padding: 40px 190px;
    box-sizing: border-box;
}

.talkTitle {
    font-size: 36px;

    font-weight: 400;
    color: #4D4D4D;
    text-align: left;
    margin-bottom: 55px;
}

.desContentLeft {
    display: inline-block;
    width: 5.5em;
}

.desContentRight {
    display: inline-block;
}

.messageWrapper {
    height: 280px;
}

::v-deep .messageWrapper .el-textarea__inner {
    height: 100%;
    font-size: 18px;
}




.messageTitle {
    font-size: 22px;

    font-weight: normal;
    color: #808080;
    margin-top: 48px;
    margin-bottom: 14px;
    text-align: left;
}

.talkBtn {
    width: 140px;
    height: 60px;
    background: #404040;
    border-radius: 30px;
    font-size: 24px;

    font-weight: 500;
    color: #FFFFFF;
    margin-top: 70px;
}

::v-deep .el-button:focus {
    border-color: #404040;
    background-color: #404040;
    color: #FFFFFF;
}

::v-deep .el-button:hover {
    border-color: #404040;
    background-color: #404040;
    color: #FFFFFF;

}
</style>