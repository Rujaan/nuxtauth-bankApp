<template>
  <div v-if="values.length > 0">
    <div class="flex justify-between items-center">
      <div class="my-10 text-2xl flex gap-x-3" v-if="total">
        <h4>Total :</h4>
        <h3>{{ total }}</h3>
      </div>
      <div><button @click="clearValue">Clear ALL</button></div>
    </div>
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
        <td class="text-blue-900">
          <NuxtLink
            :to="`/dashboard/date/${value.date}`"
            class="cursor-pointer"
            >{{ value.date }}</NuxtLink
          >
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
  props: ["values", "total"],
  methods: {
    clearValue() {
      this.$emit("clear");
    },
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
