<template>
  <div class="top-0 right-0 fixed bg-neutral-700 w-full h-full z-50">
    <div class="w-[400px] p-5 my-36 mx-auto bg-white rounded-xl relative">
      <div class="close" @click="closeModal">X</div>
      <h1>{{ heading }}</h1>
      <BankForm :buttonText="buttonText" :submitForm="submitForm" />
    </div>
  </div>
</template>

<script>
import BankForm from "./BankForm.vue";
export default {
  props: ["heading", "submitForm", "buttonText", "type"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
  components: { BankForm },
};
</script>

<style>
.close {
  position: absolute;
  right: -5px;
  top: -7px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background: #f48668;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
}
.backdrop {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal h1 {
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}
</style>
