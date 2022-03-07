<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center">
    <div class="bg-gray-200 shadow-md w-96 p-10">
      <div class="text-3xl">Log in</div>

      <AuthForm buttonText="Login User" :submitForm="handleSubmit" />
      <p class="p-2 text-sm">
        Don't have an account ?
        <NuxtLink to="/register">
          <span class="text-cyan-800 cursor-pointer">Register</span>
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script>
import AuthForm from "~/components/AuthForm.vue";
export default {
  components: { AuthForm },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
