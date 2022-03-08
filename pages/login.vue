<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center">
    <div class="bg-gray-200 shadow-md w-96 p-10">
      <div class="text-3xl">Log in</div>

      <AuthForm buttonText="Login User" :submitForm="handleSubmit" />
      <p class="p-2 text-sm mt-5">
        Don't have an account ?
        <span class="text-cyan-800 cursor-pointer">Sad : (</span>
      </p>
    </div>
  </div>
</template>

<script>
import AuthForm from "~/components/AuthForm.vue";
export default {
  layout: "login",
  components: { AuthForm },
  data() {
    return {};
  },
  methods: {
    async handleSubmit(loginInfo) {
      console.log(loginInfo);
      try {
        let response = await this.$auth.loginWith("local", { data: loginInfo });
        this.$auth.$storage.setUniversal(
          "user",
          response.data.iam.username,
          true
        );
        // this.$auth.$storage.setUniversal("loggedIn", "true", true);
        // Only runs once, resets on refresh so
        this.$auth.setUser(response.data.iam.username);
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  middleware({ $auth, redirect }) {
    if ($auth.loggedIn) {
      return redirect("/dashboard");
    }
  },
};
</script>

<style></style>
