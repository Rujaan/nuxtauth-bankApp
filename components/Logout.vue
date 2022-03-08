<template>
  <button @click="logout">Logout</button>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
      //   this.$auth.$storage.removeUniversal("loggedIn");
      this.$auth.$storage.removeUniversal("user");
      //   this.$router.push({ name: "login" });
    },
  },
};
</script>

<style></style>
