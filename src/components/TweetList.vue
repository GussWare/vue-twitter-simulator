<template>
  <div class="container">
    <h1 class="text-center">Listado de Tweets</h1>
    <p v-if="tweets.length == 0">No has tweeteado todavia</p>
    <div v-if="tweets.length > 0">
      <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
        <p class="tweet__title">{{ tweet.userName }}</p>
        <p class="tweet__text">{{ tweet.tweet }}</p>
        <span>{{ formatDate(tweet.created) }}</span>
        <Close @click="deleteTweet(tweet.id)" />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "moment/locale/es";
import { Close } from "@/components/icons/index";
import TweetService from "@/services/tweet.service";

export default {
  props: {
    tweets: Array,
    realoadTweets: Function,
  },
  components: {
    Close,
  },
  setup(props) {
    const formatDate = (d) => {
      return moment(d).fromNow();
    };

    const deleteTweet = (id) => {
      TweetService.remove(id);
      props.realoadTweets();
    };

    return {
      formatDate,
      deleteTweet,
    };
  },
};
</script>

<style>
.tweet {
  position: relative;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tweet p {
  margin: 0;
}

.tweet .tweet__title {
  position: absolute;
  top: -12px;
  left: 10px;
  background-color: #fff;
  padding: 0 10px;
  font-weight: bold;
}
.tweet .tweet__text {
  color: grey;
}

.tweet span {
  position: absolute;
  right: 10px;
  font-size: 12px;
  color: grey;
  bottom: -9px;
  background-color: #fff;
  padding: 0 20px;
  border: 1px solid #ccc;
}

.tweet svg {
  height: 20px;
  width: 20px;
}

.tweet svg:hover {
  color: red;
}
</style>