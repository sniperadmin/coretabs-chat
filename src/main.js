import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import VueChatScroll from "vue-chat-scroll";

Vue.use(VueChatScroll);

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyA6Ez3-5dlCLicWYBCRmh55U37YW0U6zqE",
  authDomain: "chat-app-f412a.firebaseapp.com",
  databaseURL: "https://chat-app-f412a.firebaseio.com",
  projectId: "chat-app-f412a",
  storageBucket: "",
  messagingSenderId: "32699626357",
  appId: "1:32699626357:web:9f6c7040e60de8ee"
};
firebase.initializeApp(firebaseConfig);

require("firebase/firestore");

export const db = firebase.firestore();

window.db = db;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
