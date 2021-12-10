<template>
  <Menu :openShowFormTweet="openShowFormTweet" :showFormTweet="showFormTweet" />
  <Formulario :openShowFormTweet="openShowFormTweet" :showFormTweet="showFormTweet" :realoadTweets="realoadTweets"/>
  <TweetList :tweets="tweets" :realoadTweets="realoadTweets"/>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";

import Menu from "@/components/Menu";
import Formulario from "@/components/Formulario";
import TweetList from "@/components/TweetList";
import useFormTweet from "@/hooks/useFormTweet";
import TweetService from "@/services/tweet.service";

export default {
  name: "Home",
  components: {
    Menu,
    Formulario,
    TweetList,
  },
  setup() {
    let tweets = ref(TweetService.getTweets().reverse());

    const realoadTweets = () => {
      tweets.value = TweetService.getTweets().reverse()
    }

    return {
      ...useFormTweet(),
      tweets,
      realoadTweets
    };
  },
};
</script>
