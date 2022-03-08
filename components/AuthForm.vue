<template>
  <form class="flex flex-col mt-10 gap-y-4">
    <span class="flex flex-col gap-y-1 p-2 group">
      <label for="Email" class="group-focus-within:text-cyan-800">Email</label>
      <input
        type="email"
        v-model="userInfo.email"
        class="bg-transparent border-b-2 border-black focus:outline-none p-1 focus:border-cyan-800"
      />
    </span>

    <span class="flex flex-col gap-y-1 p-2 group">
      <label for="Password" class="group-focus-within:text-cyan-800"
        >Password</label
      >
      <input
        type="password"
        v-model="userInfo.password"
        class="bg-transparent border-b-2 border-black focus:outline-none p-1 focus:border-cyan-800"
      />
    </span>

    <button
      @click.prevent="submitForm(userInfo)"
      class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-cyan-800 border border-cyan-900 rounded-full shadow-sm hover:bg-cyan-900 focus:outline-none focus:shadow-lg mt-10"
    >
      {{ buttonText }}
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        email: "rujan@reconwithme.com",
        password: "",
      },
    };
  },
  methods: {
    handleFormSubmit() {
      this.$emit("submitted");
    },
  },
  props: ["submitForm", "buttonText", "hasName"],
};
</script>

<style></style>
