<template>
  <div class="tweet-form container" :class="{ open: showFormTweet }">
    <form @submit.prevent="sendTweet">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Tu nombre</label>
        <input type="text" class="form-control" id="name" v-model="userName" />
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Tweet</label>
        <textarea
          name="tweet"
          id=""
          cols="30"
          rows="5"
          class="form-control"
          v-model="tweet"
        ></textarea>
      </div>

      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-primary">Enviar Tweet</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import TweetService from "@/services/tweet.service";

export default {
  props: {
    showFormTweet: Boolean,
    realoadTweets: Function,
    openShowFormTweet:Function
  },
  setup(props) {
    let userName = ref("");
    let tweet = ref("");

    const sendTweet = async () => {
      console.log("Enviando Formulario");

      await TweetService.create(userName.value, tweet.value);

      userName.value = "";
      tweet.value = "";

      props.openShowFormTweet();
      props.realoadTweets();
    };

    return {
      sendTweet,
      userName,
      tweet,
    };
  },
};
</script>

<style scoped>
.tweet-form {
  margin-top: 20px;
  overflow: hidden;
  height: 0;
}

.tweet-form.open {
  height: auto;
}
</style>