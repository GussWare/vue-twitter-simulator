import { ref } from "vue";

export default function useDataTweet() {
    let userName = ref("");
    let tweet = ref("");

    return {
        userName, 
        tweet
    }
}