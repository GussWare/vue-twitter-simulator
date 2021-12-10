import { ref } from "vue";

export default function useFormTweet() {
    const showFormTweet = ref(false);

    const openShowFormTweet = () => {
        showFormTweet.value = !showFormTweet.value; 
    }

    return {
        showFormTweet,
        openShowFormTweet
    }
}