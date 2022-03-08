<template>
  <div class="bg-gray-800 w-full text-white h-14">
    <div class="max-w-7xl m-auto flex justify-between items-center h-full">
      <div class="cursor-pointer">Logo</div>
      <div class="flex gap-x-4 cursor-pointer">
        <div v-if="$auth.loggedIn">
          {{ $auth.user }}
          <button>Logout</button>
        </div>
        {{ loggedIn }}
        {{ user }}
        <!-- <button class="cursor-pointer">Logout</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // a computed getter
    loggedIn: function () {
      // `this` points to the vm instance
      return this.$auth.loggedIn;
    },
    user: function () {
      return this.$auth.user;
    },
  },
};
</script>

<style></style>
