<template >
  <div class="container">
    <div class="row">
      <div class="col-md-2"></div>
      <div
        class="col-md-8"
        style="
          font-size: 28px;
          margin-bottom: 16px;
          font-weight: 600;
          text-align: center;
        "
      >
        Question {{ currentStep }}/{{ steps }}
        <div style="font-size: 22px; margin-top: 16px; font-weight: 400">
          {{ questions[currentStep] }}
        </div>
      </div>
      <div class="col-md-2"></div>

      <div class="col-md-4"></div>
      <div class="col-md-4">
        <br />
        <center>
          <div style="width: 100%" class="btn-group" role="group">
            <button
              @click="no"
              type="button"
              class="btn btn-primary btn-lg"
              style="border: none"
              v-bind:style="{ background: btnColor2 }"
            >
              NO
            </button>
            <button
              @click="yes"
              type="button"
              class="btn btn-primary btn-lg"
              style="border: none"
              v-bind:style="{ background: btnColor1 }"
            >
              YES
            </button>
          </div>
        </center>
      </div>
      <div class="col-md-4"> <div>{{ answer }}</div> </div>
      
      <div
        v-if="showOptions"
        style="font-size: 15px; font-weight: 600; margin-top: 32px"
        class="col-md-12"
      >
        <center>
          <button @click="nextStep" class="navbtn">NEXT QUESTION</button>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../components/Button.vue";
export default {
  components: { Button },
  data() {
    return {
      currentStep: 1,
      steps: 17,
      showOptions: false,
      answer: "",
      btnColor1: "#79a3b1",
      btnColor2: "#79a3b1",
      questions: [
        "",
        "Will the process/system involve the collection of new information about individuals?",
        "Will the process/system compel individuals to provide information about themselves?",
        "Will information be disclosed to parties who have not previously had routine access to the information?",
        "Are you using information about individuals for a purpose it is not currently used for?",
        "Does the process/system involve you using technology which might be perceived as being privacy intrusive?",
        "Will the process/system result in making decisions or taking action against individuals in significant ways?",
        "Is the information about individuals of a kind particularly likely to raise privacy concerns or expectations?",
        "Will the process/system require you to contact individuals in ways which they may find intrusive?",
        "Will evaluation or scoring be performed, including profiling and predicting?",
        "Will automated-decision making with legal or similar significant effect take place?",
        "Will systematic monitoring be performed?",
        "Will sensitive data be processed?",
        "Is data processed on a large scale?",
        "Will data concerning vulnerable data subjects be processed?",
        "Will innovative use or applying technological or organisational solutions be used?",
        "Is data transfered outside Nigeria?",
        "Will the processing in itself “prevent data subjects from exercising a right or using a service or a contract”?",
      ],
    };
  },
  methods: {
    nextStep: function () {
      this.currentStep++;
      // Reset Question
      this.answer = "";
      this.btnColor1 = "#79a3b1";
      this.btnColor2 = "#79a3b1";
      this.showOptions = false;
    },
    yes: function () {
      this.answer = "yes";
      this.btnColor1 = "#456268";
      this.btnColor2 = "#79a3b1";
      this.showOptions = true;
    },
    no: function () {
      this.answer = "no";
      this.btnColor1 = "#79a3b1";
      this.btnColor2 = "#456268";
      this.showOptions = true;
    },
  },
};
</script>

<style>
.navbtn {
  text-decoration: underline;
  border: none;
  color: #456268;
  font-weight: bold;
  font-size: 14px;
}
</style>