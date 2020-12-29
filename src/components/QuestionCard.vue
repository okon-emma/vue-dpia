<template>
  <div class="col-md-3" style="padding-right: 16px">
    <button
      @click="openQuestion()"
      class="btn btn-primary cardQuestion"
      v-bind:class="{ 'btn-outline-primary': completed == 'false' }"
      style="padding-top: 16px;"
    >
      <center>
        <i
          v-if="completed == 'false'"
          style="font-size: 16px"
          class="ti-plus"
        ></i>
        <i
          v-if="completed == 'true'"
          style="font-size: 20px;"
          class="ti-check-box"
        ></i>
        <div style="margin-bottom: 8px; margin-top: 8px; font-size: 15px;">
          {{ name }}
        </div>
      </center>
    </button>
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  name: "question-card",
  props: ["id", "name", "completed"],
  methods: {
    openQuestion() {
      if (this.$props.id == "1") {
        this.$router.push({
          name: "screening questions",
          params: { ref: "xxxx" },
        });
      }
      if (this.$props.id == "2") {
        this.$router.push({
          name: "context questions",
          params: { ref: "xxxx" },
        });
      }
      if (this.$props.id == "3") {
        this.$router.push({
          name: "principle questions",
          params: { ref: "xxxx" },
        });
      }
      if (this.$props.id == "4") {
        this.$router.push({ name: "data protection", params: { ref: "xxxx" } });
      }
      if (this.$props.id == "5") {
        this.$router.push({
          name: "rights of data subject",
          params: { ref: "xxxx" },
        });
      }
      if (this.$props.id == "6") {
        this.$router.push({ name: "privacy risks", params: { ref: "xxxx" } });
      }
      if (this.$props.id == "7") {
        this.$router.push({
          name: "likelihood impact",
          params: { ref: "xxxx" },
        });
      } else {
        console.log("selection error..");
      }
    },
  },
};
</script>
<style>
.cardQuestion {
  width: 100%;
  margin-top: 28px;
}
</style>
