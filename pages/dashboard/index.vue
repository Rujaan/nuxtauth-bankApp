<template>
  <div class="mt-10">
    <div>Dashboard</div>
    {{ $auth.$storage.getUniversal("user") }}
  </div>
</template>

<script>
export default {
  layout: "dashboard",
};
</script>

<style></style>
