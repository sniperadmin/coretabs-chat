<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="logout" class="btn btn-danger">
      <i class="fas fa-power-off"></i>
      Logout
    </button>
    <ChatApp />
  </div>
</template>

<script>
// @ is an alias to /src
import ChatApp from "@/components/ChatApp.vue";
import firebase from "firebase";

export default {
  name: "home",
  components: {
    ChatApp
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          // Sign-out successful.
          console.log("logged out!");
        })
        .catch(function() {
          // An error happened.
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // eslint-disable-next-line callback-return

          next();
        } else {
          vm.$router.push("/login");
        }
      });
    });
  }
};
</script>
