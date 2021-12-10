const short = require('short-uuid');
const _ = require("lodash");

class TweetService {

    constructor (){
        
    }

    async create(userName, tweet) {
        const tweets = this.getTweets();

        const tweetSave = {
            id: short.generate(), 
            userName, 
            tweet, 
            created: new Date()
        }

        tweets.push(tweetSave);

        localStorage.setItem("tweets", JSON.stringify(tweets));
    }

     getTweets () {
        let tweets = localStorage.getItem("tweets");

        if(!tweets) return [];

        tweets = JSON.parse(tweets);

        return tweets;
    }

    remove (id) {
        const tweets = this.getTweets();

        _.remove(tweets, (tweet) => {
            return tweet.id === id;
        });

        localStorage.setItem("tweets", JSON.stringify(tweets));
    }

}

export default new TweetService();