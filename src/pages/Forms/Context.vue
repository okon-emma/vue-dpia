<template>
  <div class="container">
    <section v-if="currentStep == 1" class="row">
      <div class="sectionHeader col-md-12">Section 1/5</div>
      <div class="col-md-12">
        <FormulateInput
          type="textarea"
          label="Description of the Data Processing"
          help="Explain what the project aims to achieve, what the benefits will be to the 
            organization, to individuals, to other parties."
        />
        <FormulateInput
          type="textarea"
          label="Identify the data subjects whose data is being processed"
          help="e.g., employees, contractors, B2B marketing leads, people applying for jobs"
        />
        <FormulateInput
          type="textarea"
          label="Who needs to be involved in this DPIA?"
          help="List of stakeholders"
        />
      </div>
    </section>

    <section v-if="currentStep == 2" class="row">
      <div class="sectionHeader col-md-12">Section 2/5</div>
      <div class="col-md-12">
        <div style="margin-bottom: 10px">
          <FormulateInput
            type="text"
            label="Who is the Data Controller?"
            help="Who determines the purpose and means of the processing?"
          />
          <FormulateInput
            type="text"
            label="Who are the Data Processors?"
            help="Who process the personal data on behalf of the Data Controller?"
          />
          <FormulateInput
            :options="{
              yes: 'Yes',
              no: 'No',
              unsure: 'Unsure',
            }"
            type="select"
            placeholder="Select an option"
            label="Does the Data Processor use Subprocessors?"
          />

          <FormulateInput
            type="textarea"
            label="How is the Personal Data collected?"
          />
        </div>
      </div>
    </section>

    <section v-if="currentStep == 3" class="row">
      <div class="sectionHeader col-md-12">Section 3/5</div>
      <div class="col-md-4">
        <div class="checkboxHeader">
          What Personally Identifiable Information is collected?
        </div>
        <FormulateInput
          :options="{
            1: 'Name',
            2: 'Phone Number',
            3: 'Address',
            4: 'Personal Email',
            5: 'Work Email',
            6: 'Username',
            7: 'Govt. Issued ID',
            8: 'Sensitive Employment Data',
            9: 'IP Address',
            10: 'User Experience (tracking or replay)',
            11: 'Geographic Location',
            12: 'Profiling Data',
            13: 'Credit/Debit Card Information',
            14: 'Financial/Banking Details',
            15: 'Health Information',
          }"
          type="checkbox"
        />
      </div>
      <div class="col-md-4">
        <div class="checkboxHeader">
          Are any "Special Categories" of personal data collected?
        </div>
        <FormulateInput
          :options="{
            1: 'Racial or Ethnic Region',
            2: 'Political Opinions',
            3: 'Religious Beliefs',
            4: 'Trade-Union Membership',
            5: 'Genetic Data',
            6: 'Biometric Data',
            7: 'Health Data',
            8: 'Sex Life',
            9: 'Criminal History',
          }"
          type="checkbox"
        />
      </div>
      <div class="col-md-4">
        <div class="checkboxHeader">
          What kind of processing activities are performed?
        </div>
        <FormulateInput
          :options="{
            1: 'Collection',
            2: 'Recording',
            3: 'Organization of',
            4: 'Storage',
            5: 'Modification',
            6: 'Retrieval',
            7: 'Use',
            8: 'Disclosure by transmission',
            9: 'Dissemination',
            10: 'Alignment or combination or aggregation',
            11: 'Restriction',
            12: 'Erasure or destruction',
          }"
          type="checkbox"
        />
      </div>
    </section>

    <section v-if="currentStep == 4" class="row">
      <div class="sectionHeader col-md-12">Section 4/5</div>
      <div style="margin-bottom: 16px" class="col-md-12">
        <FormulateInput
          type="text"
          label="How much data do you collect?"
          help="Estimated number, rate (e.g.,  nnn/month), or other measure of volume"
        />
      </div>
      <div class="col-md-6">
        <div class="checkboxHeader">Who has access to the data?</div>
        <FormulateInput
          :options="{
            1: 'Sales',
            2: 'Marketing',
            3: 'Finance / Accounting',
            4: 'Customer Support',
            5: 'Technical Support',
            6: 'Product Team',
            7: 'IT Operations',
            8: 'Human Resources',
            9: 'Contractors',
            10: 'Partners hired by the customer',
          }"
          type="checkbox"
        />
      </div>
      <div class="col-md-6">
        <div class="checkboxHeader">
          What data formats are used for storing data?
        </div>
        <FormulateInput
          :options="{
            1: 'Plain text - paper',
            2: 'Plain text - digital',
            3: 'Documnets',
            4: 'Audio',
            5: 'Video',
            6: 'Picture',
            7: 'Database',
            8: 'Spreadsheet, document, presentation',
          }"
          type="checkbox"
        />
      </div>
    </section>

    <section v-if="currentStep == 5" class="row">
      <div class="sectionHeader col-md-12">Section 5/5</div>
      <div class="col-md-6">
        <FormulateInput
          :options="{
            1: 'Yes',
            2: 'No',
          }"
          type="select"
          placeholder="Select an option"
          label="Will third parties or data processors be involved?"
        />
        <FormulateInput
          :options="{
            1: 'Yes',
            2: 'No',
          }"
          type="select"
          placeholder="Select an option"
          label="Will data transfer across country boundaries?"
        />
      </div>
      <div class="col-md-6">
        <div class="checkboxHeader">
          What data formats are used for storing data?
        </div>
        <FormulateInput
          :options="{
            1: 'Adequacy ruling',
            2: 'Standard Data Protection Clauses',
            3: 'Binding Corporate Rules',
            4: 'Derogation for specific situation',
          }"
          type="checkbox"
        />
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="row">
          <div @click="previousStep" style="margin-top: 32px" class="col-6">
            <p-button style="color: #456268; border-color: #456268; background: none;" round outline block>BACK</p-button>
          </div>
          <div style="margin-top: 32px" class="col-6">
            <p-button style="background: #456268; border-color: #456268;" round block>Complete</p-button>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </section>

    <section v-if="currentStep != steps" style="margin-top: 16px" class="row">
      <div class="col-md-9"></div>
      <div class="col-md-3">
        <div v-if="currentStep == 1" class="row">
          <div class="col-sm-6"></div>
          <div @click="nextStep" style="float: left" class="col-sm-6">
            <p-button style="background: #456268; border-color: #456268;" round block>NEXT</p-button>
          </div>
        </div>
        <div v-if="currentStep != 1" class="row">
          <div @click="previousStep" class="col-sm-6">
            <p-button style="color: #456268; border-color: #456268; background: none;" round outline block>BACK</p-button>
          </div>
          <div @click="nextStep" style="float: left" class="col-sm-6">
            <p-button style="background: #456268; border-color: #456268;" round block>NEXT</p-button>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      steps: 5,
    };
  },
  methods: {
    nextStep: function () {
      this.currentStep++;
    },
    previousStep: function () {
      this.currentStep--;
    },
  },
};
</script>

<style>
.sectionHeader {
  font-size: 28px;
  margin-bottom: 24px;
  font-weight: 600;
  text-align: center;
}

.checkboxHeader {
  font-size: 22px;
  margin-bottom: 16px;
}
</style>
