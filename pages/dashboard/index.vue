<template>
  <div class="mt-10">
    <div>Dashboard</div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  middleware({ $auth, redirect }) {
    if (!$auth.loggedIn) {
      return redirect("/login");
    }
  },
};
</script>

<style></style>
