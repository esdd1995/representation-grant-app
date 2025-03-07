<template>
    <b-card v-if="pageReady" id="landing-page" class="wrap fill-body" border-variant="white">
       
        <b-row>
            <b-col>
                <b-row class="h1 justify-content-center" style="color: black; margin-bottom: 0 !important;">Represent Someone Who Died (also known as Probate)</b-row>
                <b-card style="border: none; color: black;" bg-variant="transparent">
                    
                    <b-row style="margin-left: 15rem;margin-right: 15rem;" class="info-section">
                        <b-col cols="12" class="text-center"><div class="h4 text-center mt-1">This service will help you fill out the court forms required to apply for a <tooltip class="ml-1" size="xl" :index="0" title='Representation Grant'/> 
                            from the Supreme Court of British Columbia when the deceased did not leave a will. </div>
                        </b-col>
                        <b-col cols="6" style="padding-left: 1rem;">
                            <div class="mt-1">Presently, this service <b>can only be used if:</b></div>
                            <div><b-icon icon="check-circle-fill" variant="success" class="mr-2"></b-icon>The deceased <b>did not leave a will.</b></div>
                            <div><b-icon icon="check-circle-fill" variant="success" class="mr-2"></b-icon><b>Only one person</b> is applying for the Representation Grant.</div>
                            <div><b-icon icon="check-circle-fill" variant="success" class="mr-2"></b-icon>You are <b>one of the following:</b></div>
                            <ul class="mt-1">    
                                <li>
                                    The <b>spouse</b> of the deceased
                                </li>
                                <li>
                                    A <b>child</b> of the deceased
                                </li>
                                <li>
                                    A <b>legal guardian, nominee, or personal representative</b> acting for someone listed above
                                </li>
                            </ul>
                        </b-col>
                        <b-col cols="6" style="padding-left: 1rem;">
                            <div><b>This service CANNOT be used if:</b></div>
                            <div><b-icon icon="x-circle-fill" variant="danger" class="mr-2"></b-icon>One of the deceased's <b>children passed away before them</b> and that child has children of their own.</div>
                            <div><b-icon icon="x-circle-fill" variant="danger" class="mr-2"></b-icon>There is <b>no surviving spouse, descendant, or creditor</b> (other than yourself) who can be identified at this time.</div>
                        </b-col>
                    </b-row>
                    
                    
                    
                    <b-row style="margin-left: 15rem;margin-right: 15rem;" class="info-section-blue mt-2">
                        <b-col cols="12" class="text-center mt-1">
                            <h3>How it Works?</h3>
                        </b-col>
                        <b-col cols="6" style="padding-left: 1rem;">
                            <p style="font-weight: bold; margin-bottom: 0;">Step 1: Register or Login</p>
                            <p class="mb-3">
                                You will need a Basic BCeID account. If you do not currently have a Basic BCeID account you can register for one.
                            </p>                            
                            <p style="font-weight: bold; margin-bottom: 0;">Step 2: Pre-qualifying Questions</p>
                            <p>
                                Once logged in, click Begin New Session to answer questions to ensure that this service is appropriate for you to use.
                            </p>
                        </b-col>
                        <b-col cols="6" style="padding-left: 1rem;">
                            <p style="font-weight: bold; margin-bottom: 0;">Step 3: Answer Questions</p>
                            <p>
                                Our secure online questionnaire uses your answers to fill out the court forms required. 
                                You can save your work so you can proceed at your own pace, any time.
                            </p>
                            <p style="font-weight: bold; margin-bottom: 0;">Step 4: Print Your Forms</p>
                            <p>
                                Once you're done with the questionnaire, you will need to print your court forms and 
                                file them at your local 
                                <a style="color: white;"
                                    href="https://www2.gov.bc.ca/gov/content/justice/courthouse-services/courthouse-locations"
                                    target="_blank">
                                    Supreme Court registry
                                </a>.
                            </p>
                        </b-col>                           
                    </b-row>

                    <b-card v-if="!isLoggedIn" style="border: none; margin-left: 15rem;margin-right: 15rem;" bg-variant="transparent">
                        <b-row class="how-works-section">
                            <b-col style="padding: 0;"> 
                                <b-row class="user-type justify-content-center">
                                    New Users
                                </b-row>
                                <div class="row justify-content-center">                       
                                    <a class="btn btn-primary btn-lg text-white btn-lg register-button" style="padding-left: 3.5rem; padding-right: 3.5rem;" @click="navigate('new')">
                                        Register for a <strong>Basic</strong> BCeID
                                    </a>                        
                                </div>
                            </b-col>

                            <b-col style="padding: 0;">
                                <b-row class="user-type">
                                    Returning Users
                                </b-row>
                                <div class="row justify-content-center">
                                    <a class="btn btn-primary btn-lg bg-warning login-button" style="padding-left: 3.5rem; padding-right: 3.5rem;" @click="navigate('returning')">
                                        Use an existing <strong>Basic</strong> BCeID                                                                               
                                    </a>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-card>
            </b-col>
        </b-row>

        <b-modal size="xl" v-model="openInfoModal" header-class="bg-primary text-white">
            <template v-slot:modal-title>
                <h1 class="mb-0">Pre-qualifying Information</h1>
            </template>
            <div class="m-3">
                This service has only been developed for situations where:
                <ul class="mt-3">    
                    <li>Only a single person is applying for the Representation Grant; and</li>
                    <li>You are one of the following:</li>
                    <ul>
                        <li>A <b>spouse</b> of the deceased,</li>
                        <li>A <b>child</b> of the deceased,</li>
                        <li>You can also be a <b>legal guardian, nominee</b> or <b>personal representative</b> for someone listed above.</li>
                    </ul>
                    <li>Even if you are one of the people listed above, this service can <b>NOT</b> help you if one of the deceased's children has died before them and that child has children of their own.</li>
                </ul>
                <b>Note:</b> If there is no surviving spouse, descendant or creditor identified, other than yourself, this service cannot help you apply for a Representation Grant. For more information on who may need to be notified, refer to <a href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/168_2009_03_1#subrule_d1e33580" target="_blank" >Supreme Court Civil Rule 25-2(2)</a>
            </div>
            <template v-slot:modal-footer>
                <b-button variant="secondary" @click="openInfoModal = false">Close</b-button>
                <b-button variant="primary" @click="goToLoginPage()">Continue</b-button>
            </template>
            <template v-slot:modal-header-close>
                <b-button
                    variant="primary"
                    class="closeButton"
                    @click="openInfoModal = false">&times;
                </b-button>
            </template>
        </b-modal>

    </b-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SessionManager } from "@/components/utils/utils";
import Tooltip from "@/components/survey/Tooltip.vue"
import { getBCEIDUrl } from "@/components/utils/utils";

@Component({
    components:{
        Tooltip
    }
})
export default class LandingPage extends Vue {
    
    isLoggedIn= false;
    pageReady = false;
    openInfoModal = false;
      
    async mounted() {
        this.pageReady = false;
        this.openInfoModal = false;
        await SessionManager.getUserInfo(this.$store);
        if(this.$store.state.Common.userId !== ""){
            this.isLoggedIn = true;
            this.confirmLogin();
            // this.determineUserType();
            
        }else{
            this.isLoggedIn = false;
            this.pageReady = true;
        } 
    }
  
    public navigate(userType) {
        if (userType === "new") {
            //Register a BCeID
            window.location.replace(getBCEIDUrl());
        } else if (userType === "returning") {
            //Login BCeID
            this.$router.push({ name: "surveys" });
        }  
    }  

    public confirmLogin(){
        this.openInfoModal = false;
        this.$router.push({ name: "applicant-status" });
    }
    public goToLoginPage(){
        this.openInfoModal = false;
        this.$router.push({ name: "qualified" });
    }

    public determineUserType () {
      
        this.$http.get('/app-list/')
        .then((response) => {
            if(response.data.length>0) {
                this.confirmLogin();
            }else{
                this.navigate("new");
            }        
        
        },(err) => console.log(err));
    }
  
};
</script>

<style scoped lang="scss">
    @import "src/styles/common";

    .list-group-item {
        border-color: white;
        border: 2px solid rgba($gov-pale-grey, 0.3);
        border-radius: 18px;
        background-color: rgba($gov-mid-blue, 0.6);
        margin-top: 0.5rem;
        color: $gov-white;
    } 
   
    .register-button {
        color: black;
        border: 2px solid rgba($gov-pale-grey, 0.3);
        margin-top: 1rem;
        &:hover,
        &:focus {
            color: rgb(247, 214, 126);
        }
        &:active {
            border: 2px solid rgba($gov-white, 0.8);
        }
    }
    .login-button {        
        color: black;
        margin-top: 1rem;
        border: 2px solid rgb(231, 231, 231);
        &:hover,
        &:focus {
            color: blue;
            border-color: rgba(17, 60, 139, 0.904);
        }
        &:active {
            border: 2px solid rgba($gov-white, 0.8);
        }
    }

    .wrap {
        position: relative;
    }

    .wrap:before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.7;
        background-image: url('../../../public/images/legislature-dome.jpg');
        background-size: cover;
    }

    .content  {
        position: relative;
    }

    .info-section {
        border: 2px solid rgba($gov-pale-grey, 0.8);
        border-radius: 18px;
        margin-top: 0.5rem;
        background-color: rgba($gov-pale-grey, 0.75);
        color: black;
    }
    .info-section-blue {
        border: 2px solid rgba($gov-pale-blue, 0.8);
        border-radius: 18px;
        margin-top: 0.5rem;
        background-color: rgba($gov-pale-blue, 0.75);
        color: white;
    }

    .user-type {
        justify-content: center;
        font-weight: 700;
        font-size: 24px;
        color: rgba($gov-white, 1)
    }

    .how-works-section {
        font-size: 18px;
        p {
            margin: 0 0 0 0;
        }
    }

    .closeButton {
        background-color: transparent !important;
        color: white;
        border: white;
        font-weight: 700;
        font-size: 2rem;
        padding-top: 0;
        margin-top: 0;
    }

</style>
