<template>
  <div class="row">
    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div class="card card-signin my-5">
        <div class="card-body">
          <img
            class="mb-3"
            src="https://forums.coretabs.net/uploads/default/original/1X/39441587eb3d89a75b179466bac1f98fd4adc18e.png"
          />
          <h5 class="card-title text-center">Coretabs Chat Sign In</h5>
          <hr class="my-4" />
          <button
            @click="loginGoogle"
            class="btn btn-danger mb-4"
            type="submit"
          >
            <span class="mr-2">
              <i class="fab fa-google"></i>
            </span>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  methods: {
    loginGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();

      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.

          const token = result.credential.accessToken;
          console.log(token);

          // The signed-in user info.

          const { user } = result;
          console.log(user);

          this.$router.push("/");
        })
        .catch(error => {
          // Handle Errors here.
          console.log(error);
        });
    }
  }
};
</script>
