<template>
  <div class="container">
    <div class="row">
      <div
        class="col-md-12"
        style="font-size: 32px; margin-bottom: 16px; font-weight: 600">
        Website Assessment
        <div style="font-size: 14px; margin-top: 8px; font-weight: 600">
          System/Process Owner: Alex Duru
        </div>
      </div>
      <div style="font-size: 17px" class="col-md-8">
        A comprehensive website assessment is the first step in any successful
        web project. Orbit assesses the strengths and weaknesses of your current
        site and outputs recommendations
      </div>
      <div class="col-md-4"></div>

      <question-card id="1" name="Screening Questions" completed="true" />
      <question-card id="2" name="Context Questions" completed="false" />
      <question-card id="3" name="Principle Questions" completed="false" />
      <question-card id="4" name="Data Protection" completed="false" />
      <question-card id="5" name="Rights of Subject" completed="false" />
      <question-card id="6" name="Privacy Risks" completed="false" />
      <question-card id="7" name="Likelihood Impact" completed="false" />
    </div>

  </div>
</template>

<script>
import QuestionCard from "@/components/QuestionCard";
export default {
  components: {
    QuestionCard,
  },
};
</script>
