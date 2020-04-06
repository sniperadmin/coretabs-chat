import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

import { Server, Factory, Model, trait } from "miragejs";
import faker from "faker";

export default new Server({
  models: {
    // note: Model,
    customer: Model.extend({
      // notes: hasMany()
    })
  },

  factories: {
    note: Factory.extend({
      displayText() {
        return faker.lorem.sentence(4);
      },
      date() {
        return faker.date.past().toLocaleDateString();
      },
      by() {
        return faker.internet.email();
      }
    }),
    customer: Factory.extend({
      withNotes: trait({
        afterCreate(customer, server) {
          customer.update({
            notes: server.createList("note", 2)
          });
        }
      })
    })
  },

  seeds(server) {
    server.createList("customer", 3, "withNotes");
  },

  routes() {
    this.get("/customers");
  }
});

var firebaseConfig = {
  apiKey: "AIzaSyAOwB50aH23_cYPi_xo1eWRwY_KqBO85Zk",
  authDomain: "coretabs-chat1.firebaseapp.com",
  databaseURL: "https://coretabs-chat1.firebaseio.com",
  projectId: "coretabs-chat1",
  storageBucket: "coretabs-chat1.appspot.com",
  messagingSenderId: "289644421217",
  appId: "1:289644421217:web:39721d76a2b7a107bf0a20"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

require("firebase/firestore");

export const db = firebase.firestore();

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
