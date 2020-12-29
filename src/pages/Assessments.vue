<template>
  <div style="padding-left: 16px; padding-right: 16px">
    <div class="row">
      <div class="col-md-9"></div>
      <div class="col-md-3">
        <div style="width: 100%">
          <router-link to="/add/dpia">
            <p-button round outline block
              ><i
                style="margin-right: 8px; font-size: 10px"
                class="ti-plus"
              ></i>
              Create DPIA</p-button
            >
          </router-link>
        </div>
      </div>
    </div>
    <table style="margin-top: 16px" class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Ref</th>
          <th scope="col">Name</th>
          <th scope="col">Date Created</th>
          <th scope="col">Risk Level</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in tableData" :key="data.ref">
          <td>{{ data.ref }}</td>
          <td style="font-weight: bold">
            <router-link
              :to="{ name: 'assessment detail', params: {ref: data.ref}}"
            >
              {{ data.name }}
            </router-link>
          </td>
          <td>{{ data.date }}</td>
          <td v-if="data.risk == 'high'">
            <span
              style="font-size: 12px; padding: 8px"
              class="badge badge-danger"
              >High Risk</span
            >
          </td>
          <td v-else-if="data.risk == 'moderate'">
            <span
              style="font-size: 12px; padding: 8px"
              class="badge badge-warning"
              >Moderate Risk</span
            >
          </td>
          <td v-else-if="data.risk == 'low'">
            <span style="font-size: 12px; padding: 8px" class="badge badge-info"
              >Low Risk</span
            >
          </td>
          <td v-else>- - - -</td>

          <td v-if="data.completed == true">
            <span
              style="font-size: 12px; padding: 8px"
              class="badge badge-success"
              >Completed</span
            >
          </td>
          <td v-else>
            <span
              style="font-size: 12px; padding: 8px"
              class="badge badge-secondary"
              >In Progress</span
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          ref: "110124",
          name: "Website Assessment",
          date: "May 21",
          risk: "high",
          completed: true,
        },
        {
          ref: "102410",
          name: "Employee Medical Process",
          date: "June 7",
          risk: "moderate",
          completed: true,
        },
        {
          ref: "201422",
          name: "Mobile App Assessment",
          date: "June 18",
          risk: "high",
          completed: false,
        },
        {
          ref: "101524",
          name: "HR Recruitment Software",
          date: "July 1",
          risk: "low",
          completed: true,
        },
      ],
    };
  },
};
</script>
<style>
</style>
