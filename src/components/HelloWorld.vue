<template>
  <div class="hello">
    <!-- code here -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
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
                          <label id="support_label">Lorem support</label>
                        </div>
                      </div>
                    </div>
                    <div class="card-block">
                      <form style="border: 1px solid grey">
                        <div class="form-group" style="text-align: left;">
                          <span class="fa fa-lg fa-user pb-chat-fa-user"></span>
                          <span
                            class="tag label-default pb-chat-labels pb-chat-labels-left"
                          >
                            Hi, how are you?
                          </span>
                        </div>
                        <hr />
                        <div
                          class="form-group float-xs-right pb-chat-labels-right"
                        >
                          <span
                            class="tag label-primary pb-chat-labels pb-chat-labels-primary"
                            >Hi, i'm fine, you?</span
                          ><span
                            class="fa fa-lg fa-user pb-chat-fa-user"
                          ></span>
                        </div>
                        <div class="clearfix"></div>
                        <hr />
                      </form>
                    </div>
                    <div class="card-footer">
                      <div class="row">
                        <div class="col-md-11">
                          <textarea
                            class="form-control pb-chat-textarea"
                            placeholder="Type your message here..."
                          ></textarea>
                        </div>
                        <div class="col-xs-2 pb-btn-circle-div">
                          <button
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
export default {
  name: "HelloWorld"
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
  margin-bottom: 0;
  margin-right: 5px;
  text-align: right;
}

.pb-chat-labels-left {
  margin-bottom: 0;
  margin-left: 10px;
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
  /* resize: none; */
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
</style>
