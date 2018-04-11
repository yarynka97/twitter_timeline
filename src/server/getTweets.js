const Twit = require('twit');

const keys = require('../config').twitterKeys;

const getTweets = function (userName, response) {
    const Twitter = new Twit(keys);
    var userName = userName;
    var options = {
        screen_name: userName,
        count: 100
    }

    return Twitter.get('statuses/user_timeline', options);
}

const filterTweets = function (tweets) {
    return tweets.map(tweet => {
        var imgUrl = [];
        if (tweet.entities.media) {
            tweet.entities.media.forEach(img => {
                imgUrl.push(img.media_url);
            });
        }
        return {
            id: tweet.id,
            screenName: tweet.user.screen_name,
            date: tweet.created_at,
            text: tweet.text,
            imgUrl
        };
    });
}

module.exports = {
    getTweets,
    filterTweets
}