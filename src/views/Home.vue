<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ChatApp />
  </div>
</template>

<script>
// @ is an alias to /src
import ChatApp from "@/components/ChatApp.vue";

export default {
  name: "home",
  components: {
    ChatApp
  }
};
</script>
