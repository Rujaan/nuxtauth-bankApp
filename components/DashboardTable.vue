<template>
  <div v-if="values">
    <span class="my-10 text-2xl flex gap-x-3"
      ><h4>Total :</h4>
      <h3>{{ total }}</h3>
    </span>
    <table class="w-full mt-10">
      <tr class="bg-gray-100">
        <th>Id</th>
        <th>Date</th>
        <th>Amount</th>
        <th>Remarks</th>
        <th>Type</th>
      </tr>
      <tr
        v-for="value in values"
        :key="value.id"
        :class="
          value.type == 'credit'
            ? ' bg-green-200 hover:bg-green-300'
            : 'bg-red-200 hover:bg-red-300'
        "
      >
        <td>{{ value.id }}</td>
        <td>
          {{ value.date }}
        </td>
        <td>{{ value.amount }}</td>
        <td>{{ value.remarks }}</td>
        <td>{{ value.type }}</td>
      </tr>
    </table>
  </div>
  <div v-else class="mt-20">
    <p>Add credit or balance to get started..</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: null,
      total: 0,
    };
  },
  methods: {
    getCredits() {
      if (localStorage.getItem("nuxtBank")) {
        this.values = JSON.parse(localStorage.getItem("nuxtBank")).value;
        this.total = JSON.parse(localStorage.getItem("nuxtBank")).total;
      } else {
        this.values = null;
      }
    },
  },
  mounted() {
    this.getCredits();
  },
};
</script>

<style scoped>
td,
th {
  text-align: left;
  padding: 8px;
}
</style>
