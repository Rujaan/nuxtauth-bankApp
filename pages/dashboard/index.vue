<template>
  <div class="mt-10">
    <div v-if="showCreditModal">
      <Modal
        @close="toggleCreditModal"
        @added="updateTable"
        heading="Add Credit"
        buttonText="Submit Credit"
        type="credit"
        :submitForm="handleSubmitOfCredit"
      />
    </div>
    <div v-if="showDebitModal">
      <Modal
        @close="toggleDebitModal"
        @added="updateTable"
        heading="Add Debit"
        buttonText="Submit Debit"
        type="debit"
        :submitForm="handleSubmitOfDebit"
      />
    </div>

    <div class="text-3xl font-semibold uppercase">Dashboard</div>
    <div class="mt-10 flex gap-x-3 z-10 relative">
      <button
        @click="toggleCreditModal"
        class="relative inline-flex items-center justify-center px-6 py-4 overflow-hidden font-mono font-medium tracking-tighter text-black border-2 border-cyan-800 bg-transparent rounded-lg group hover:shadow-lg"
      >
        <span
          class="absolute w-0 h-0 transition-all duration-500 ease-out bg-cyan-800 rounded-full group-focus:w-56 group-focus:h-56"
        ></span>
        <span class="relative group-focus:text-white">Add credit</span>
      </button>
      <button
        @click="toggleDebitModal"
        class="relative inline-flex items-center justify-center px-6 py-4 overflow-hidden font-mono font-medium tracking-tighter text-black border-2 border-cyan-800 bg-transparent rounded-lg group hover:shadow-lg"
      >
        <span
          class="absolute w-0 h-0 transition-all duration-500 ease-out bg-cyan-800 rounded-full group-focus:w-56 group-focus:h-56"
        ></span>
        <span class="relative group-focus:text-white">Add Debit</span>
      </button>
    </div>
  </div>
</template>

<script>
import Modal from "../../components/Modal.vue";
export default {
  layout: "dashboard",
  data() {
    return {
      username: null,
      showCreditModal: false,
      showDebitModal: false,
      componentKey: 0,
    };
  },
  middleware({ $auth, redirect }) {
    if (!$auth.loggedIn) {
      return redirect("/login");
    }
  },
  methods: {
    toggleCreditModal() {
      this.showCreditModal = !this.showCreditModal;
    },
    toggleDebitModal() {
      this.showDebitModal = !this.showDebitModal;
    },
    updateTable() {
      this.componentKey += 1;
    },
    handleSubmitOfCredit(creditInfo) {
      console.log(creditInfo);
    },
    handleSubmitOfDebit(debitInfo) {
      console.log(debitInfo);
    },
  },
  components: { Modal },
};
</script>

<style></style>
