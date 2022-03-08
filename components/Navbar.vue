<template>
  <div class="bg-gray-800 w-full text-white h-14">
    <div class="max-w-7xl m-auto flex justify-between items-center h-full">
      <div class="cursor-pointer">Logo</div>
      <div>
        <div v-if="$auth.loggedIn" class="flex gap-x-7">
          {{ user }}
          <Logout />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logout from "./Logout.vue";
export default {
  computed: {
    user: function () {
      return this.$auth.$storage.getUniversal("user");
    },
  },
  components: { Logout },
};
</script>

<style></style>
