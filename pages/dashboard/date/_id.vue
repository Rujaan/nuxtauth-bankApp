<template>
  <div class="mt-14">
    <div class="text-3xl font-semibold uppercase">Dashboard</div>
    <br />
    <div>
      ALL data for <span class="text-cyan-800">{{ date }}</span>
    </div>
    <client-only>
      <DashboardTable :values="filteredDate" />
    </client-only>
  </div>
</template>

<script>
export default {
  computed: {
    filteredDate: function () {
      if (process.browser) {
        var values = JSON.parse(localStorage.getItem("nuxtBank")).value;
        var found = values.filter(
          (value) => value.date === this.$route.params.id
        );
        return found;
      }
    },
    date: function () {
      return this.$route.params.id;
    },
  },
  middleware({ $auth, redirect }) {
    if (!$auth.loggedIn) {
      return redirect("/login");
    }
  },
};
</script>

<style></style>
