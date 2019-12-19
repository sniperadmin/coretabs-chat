<template>
  <div class="hello">
    <!-- code here -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- row title -->
          <div class="row justify-content-center">
            <h4 class="text-md-center">Responsive Chat Template</h4>
          </div>
          <div class="row">
            <div class="col">
              <ul>
                <li style="list-style: none;">
                  <div class="card card-info pb-chat-panel">
                    <div class="card card-header pb-chat-panel-heading">
                      <div class="row">
                        <div class="col-xs-12">
                          <label id="support_label">app title</label>
                        </div>
                      </div>
                    </div>
                    <div class="card-block">
                      <form v-chat-scroll style="border: 1px solid grey">
                        <!-- div message -->
                        <div
                          v-for="(message, index) in messages"
                          :key="index"
                          class="form-group"
                          :class="[
                            message.author === authUser.displayName
                              ? 'pb-chat-labels-right'
                              : 'pb-chat-labels-left'
                          ]"
                        >
                          <span
                            v-if="message.author !== authUser.displayName"
                            class="fa fa-lg fa-user pb-chat-fa-user"
                          ></span>
                          <span
                            :class="[
                              message.author !== authUser.displayName
                                ? 'tag label-default pb-chat-labels'
                                : 'tag label-primary pb-chat-labels pb-chat-labels-primary'
                            ]"
                          >
                            {{ message.message }}
                          </span>
                          <span
                            v-if="message.author === authUser.displayName"
                            class="fa fa-lg fa-user pb-chat-fa-user"
                          ></span>
                          <p>
                            <small>{{ message.author }}</small>
                          </p>
                          <hr />
                        </div>
                        <!-- <div class="form-group pb-chat-labels-right">
                          <span
                            class="tag label-primary pb-chat-labels pb-chat-labels-primary"
                            >Hi, i'm fine, you?</span
                          ><span
                            class="fa fa-lg fa-user pb-chat-fa-user"
                          ></span>
                        </div> -->
                        <!-- <div class="clearfix"></div> -->
                        <!-- <hr /> -->
                      </form>
                    </div>
                    <div class="card-footer">
                      <div class="row">
                        <div class="col-md-11">
                          <textarea
                            v-model="message"
                            class="form-control pb-chat-textarea"
                            placeholder="Type your message here..."
                            @keydown.prevent.enter="saveMsg"
                          ></textarea>
                        </div>
                        <div class="col-xs-2 pb-btn-circle-div">
                          <button
                            @click="saveMsg"
                            class="btn btn-primary btn-circle pb-chat-btn-circle"
                          >
                            <span class="fa fa-chevron-right"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "../main";

export default {
  name: "HelloWorld",
  data() {
    return {
      messages: [],
      users: [],
      message: "",
      isActive: false,
      authUser: {}
    };
  },
  methods: {
    saveMsg() {
      // save to fs
      db.collection("chat").add({
        message: this.message.toString(),
        author: this.authUser.displayName,
        createdAt: new Date()
      });

      this.message = "";
    },

    fetchMsg() {
      db.collection("chat")
        .orderBy("createdAt")
        .onSnapshot(querySnapShot => {
          const allMsgs = [];

          querySnapShot.forEach(doc => {
            allMsgs.push(doc.data());
          });

          this.messages = allMsgs;
        });
    }
  },
  created() {
    let user = firebase.auth().currentUser;
    if (user) {
      const cashedUser = user;
      this.authUser = cashedUser;
      console.log(this.authUser);
      // const allUsers = [];
      // allUsers.push(user);
      // this.users = allUsers;
    } else {
      this.authUser = {};
    }

    this.fetchMsg();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pb-chat-panel {
  border: none;
  margin-bottom: -5px;
}

.pb-chat-panel-heading {
  margin-top: -5px;
}

.pb-chat-top-icons {
  margin-top: 4px;
}

#support_label {
  color: #999;
}

.pb-chat-labels {
  font-size: 15px;
}

.pb-chat-labels-right {
  margin-right: 5px;
  text-align: right;
}

.pb-chat-labels-left {
  margin-left: 5px;
  text-align: left;
}

.pb-chat-labels-primary {
  margin-right: 5px;
}

.pb-chat-fa-user {
  border: 1px solid blue;
  padding: 5px;
  border-radius: 50%;
  margin: 5px;
}

.pb-chat-textarea {
  resize: none;
  width: 100%;
}

.pb-chat-dropdown {
  width: 300px;
}

.pb-chat-btn-circle {
  border-radius: 35px;
}

.pb-btn-circle-div {
  padding-left: 0px;
  margin-top: 12px;
}
form {
  overflow-y: scroll;
  height: 300px;
}
</style>
