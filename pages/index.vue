<template>
  <div
    class="h-screen w-screen flex flex-col justify-center items-center gap-y-6"
  >
    <div v-if="loggedIn">
      <h1 class="text-4xl">
        Seems like you're already
        <strong class="text-cyan-700">Logged</strong> in
      </h1>
      <NuxtLink to="/dashboard">
        <div
          class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-cyan-800 transition duration-1000 ease-out group w-full"
        >
          <span
            class="absolute inset-0 flex items-center justify-center w-full h-full text-cyan-800 duration-1000 -translate-x-full group-hover:translate-x-0 ease"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span
            class="absolute flex items-center justify-center w-full h-full text-cyan-800 transition-all duration-1000 transform group-hover:translate-x-full ease"
          >
            Let's Go
            <svg
              class="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path></svg
          ></span>
          <span class="relative invisible">
            Let's Go
            <svg
              class="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
        </div>
      </NuxtLink>
    </div>
    <div v-else>
      <h1 class="text-4xl">
        Welcome to
        <strong class="text-cyan-700">THE</strong> banking solution
      </h1>
      <NuxtLink to="/login">
        <div
          class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-cyan-800 transition duration-1000 ease-out group w-full"
        >
          <span
            class="absolute inset-0 flex items-center justify-center w-full h-full text-cyan-800 duration-1000 -translate-x-full group-hover:translate-x-0 ease"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span
            class="absolute flex items-center justify-center w-full h-full text-cyan-800 transition-all duration-1000 transform group-hover:translate-x-full ease"
          >
            Let's Get Started
            <svg
              class="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path></svg
          ></span>
          <span class="relative invisible">
            Let's Get Started
            <svg
              class="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "login",
  computed: {
    loggedIn: function () {
      return this.$auth.loggedIn;
    },
  },
};
</script>
