<template>
  <div class="mt-10">
    <div v-if="showCreditModal">
      <Modal
        @close="toggleCreditModal"
        heading="Add Credit"
        buttonText="Submit Credit"
        :submitForm="handleSubmitOfCredit"
      />
    </div>
    <div v-if="showDebitModal">
      <Modal
        @close="toggleDebitModal"
        heading="Add Debit"
        buttonText="Submit Debit"
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
    <div>
      <DashboardTable
        :values="nuxtBank.value"
        :total="nuxtBank.total"
        @clear="clearValue"
      />
    </div>
  </div>
</template>

<script>
import Modal from "../../components/Modal.vue";
import DashboardTable from "../../components/DashboardTable.vue";
export default {
  layout: "dashboard",
  data() {
    return {
      nuxtBank: {
        value: [],
        total: 0,
      },
      showCreditModal: false,
      showDebitModal: false,
    };
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("nuxtBank"))) {
      this.nuxtBank = JSON.parse(localStorage.getItem("nuxtBank"));
    }
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
    handleSubmitOfCredit(creditInfo) {
      let nextId = this.nuxtBank.value.length;
      this.nuxtBank = {
        value: [
          ...this.nuxtBank.value,
          {
            amount: creditInfo.amount,
            date: creditInfo.date,
            remarks: creditInfo.remarks,
            type: "credit",
            id: nextId,
          },
        ],
        total: parseInt(creditInfo.amount) + this.nuxtBank.total,
      };
      localStorage.setItem("nuxtBank", JSON.stringify(this.nuxtBank));
      this.toggleCreditModal();
    },
    handleSubmitOfDebit(debitInfo) {
      let nextId = this.nuxtBank.value.length;
      this.nuxtBank = {
        value: [
          ...this.nuxtBank.value,
          {
            amount: debitInfo.amount,
            date: debitInfo.date,
            remarks: debitInfo.remarks,
            type: "debit",
            id: nextId,
          },
        ],
        total: this.nuxtBank.total - parseInt(debitInfo.amount),
      };
      localStorage.setItem("nuxtBank", JSON.stringify(this.nuxtBank));
      this.toggleDebitModal();
    },
    clearValue() {
      localStorage.removeItem("nuxtBank");
      this.nuxtBank = {
        value: [],
        total: 0,
      };
    },
  },
  components: { Modal, DashboardTable },
};
</script>

<style></style>
