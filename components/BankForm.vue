<template>
  <form class="flex flex-col mt-10 gap-y-4">
    <span class="flex flex-col gap-y-1 p-2 group">
      <label for="date" class="group-focus-within:text-cyan-800">Date</label>
      <input
        type="date"
        v-model="amountInfo.date"
        class="bg-transparent border-b-2 border-black focus:outline-none p-1 focus:border-cyan-800"
      />
    </span>

    <span class="flex flex-col gap-y-1 p-2 group">
      <label for="amount" class="group-focus-within:text-cyan-800"
        >Amount</label
      >
      <input
        type="number"
        v-model="amountInfo.amount"
        class="bg-transparent border-b-2 border-black focus:outline-none p-1 focus:border-cyan-800"
      />
    </span>

    <span class="flex flex-col gap-y-1 p-2 group">
      <label for="remarks" class="group-focus-within:text-cyan-800"
        >Remarks</label
      >
      <input
        type="text"
        v-model="amountInfo.remarks"
        class="bg-transparent border-b-2 border-black focus:outline-none p-1 focus:border-cyan-800"
      />
    </span>

    <button
      @click.prevent="submitForm(amountInfo)"
      class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-cyan-800 border border-cyan-900 rounded-full shadow-sm hover:bg-cyan-900 focus:outline-none focus:shadow-lg mt-10"
    >
      {{ buttonText }}
    </button>
  </form>
</template>

<script>
export default {
  props: ["buttonText", "type"],
  data() {
    return {
      amountInfo: {
        date: new Date().toISOString().slice(0, 10),
        amount: "",
        remarks: "",
      },
    };
  },
  methods: {
    handleFormSubmit() {
      this.$emit("submitted");
    },
  },
  props: ["submitForm", "buttonText"],
};
</script>

<style></style>
