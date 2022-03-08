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
    <DashboardTable :key="componentKey" />
  </div>
</template>

<script>
import Modal from "../../components/Modal.vue";
import DashboardTable from "../../components/DashboardTable.vue";
export default {
  layout: "dashboard",
  data() {
    return {
      nuxtBank: null,
      total: null,
      showCreditModal: false,
      showDebitModal: false,
      componentKey: 0,
      id: null,
    };
  },
  mounted() {
    console.log("mounted");
    if (JSON.parse(localStorage.getItem("nuxtBank"))) {
      this.nuxtBank = JSON.parse(localStorage.getItem("nuxtBank"));
    } else {
      this.nuxtBank = {};
      this.total = 0;
    }
    if (JSON.parse(localStorage.getItem("nuxtBank"))) {
      this.nuxtBank.amount = JSON.parse(
        localStorage.getItem("nuxtBank")
      ).amount;
    }

    if (!this.nuxtBank.value) {
      this.nuxtBank.value = [];
    }

    if (!this.nuxtBank.value.id) {
      this.nuxtBank.value.id = 0;
    } else {
      this.nuxtBank.value.id = JSON.parse(
        localStorage.getItem("nuxtBank")
      ).value.id;
    }

    if (!this.nuxtBank.total) {
      this.nuxtBank.total = 0;
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
    updateTable() {
      this.componentKey += 1;
    },

    handleSubmitOfCredit(creditInfo) {
      console.log(creditInfo);
      var value = JSON.parse(localStorage.getItem("nuxtBank")).value;
      if (process.browser && value) {
        var bigId = Math.max.apply(
          Math,
          value.map(function (o) {
            return o.id;
          })
        );
      } else {
        bigId = 0;
      }
      this.nuxtBank.value.push({
        amount: creditInfo.amount,
        date: creditInfo.date,
        remarks: creditInfo.remarks,
        type: "credit",
        id: bigId + 1,
      });
      this.nuxtBank.total += parseInt(creditInfo.amount);
      localStorage.setItem("nuxtBank", JSON.stringify(this.nuxtBank));
      this.componentKey += 1;
    },

    handleSubmitOfDebit(debitInfo) {
      console.log(debitInfo);
      var value = JSON.parse(localStorage.getItem("nuxtBank")).value;
      if (process.browser && value) {
        var bigId = Math.max.apply(
          Math,
          value.map(function (o) {
            return o.id;
          })
        );
      } else {
        bigId = 0;
      }
      this.nuxtBank.value.push({
        amount: debitInfo.amount,
        date: debitInfo.date,
        remarks: debitInfo.remarks,
        type: "debit",
        id: bigId + 1,
      });
      this.nuxtBank.total -= parseInt(debitInfo.amount);
      localStorage.setItem("nuxtBank", JSON.stringify(this.nuxtBank));
      this.componentKey += 1;
    },
  },
  components: { Modal, DashboardTable },
};
</script>

<style></style>
