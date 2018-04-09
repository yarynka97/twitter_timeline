const Twit = require('twit');

const keys = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCES_TOKEN,
    access_token_secret: process.env.ACCES_TOKEN_SECRET
}

var Tweet = function (userName, response) {
    const Twitter = new Twit(keys);
    var userName = userName;
    var options = {
        screen_name: userName,
        count: 100
    }

    Twitter.get('statuses/user_timeline', options, (err, data, res) => {
        if (!err && res.statusCode === 200) {
            response.send(filterTweets(data));
        } else {
            console.log("error"+err);
            if (err.code === 34) {
                response.send([{
                    statusCode: 404,
                    message: "Sorry, that user doesn't exist or the page is private"
                }]);
            } else {
                response.send([{
                    statusCode: 404,
                    message: err.message
                }]);
            }
        }
    });

    function filterTweets(tweets) {
        return tweets.map(tweet => {
            var imgUrl = [];
            if (tweet.entities.media) {
                tweet.entities.media.forEach(img => {
                    imgUrl.push(img.media_url);
                });
            }
            return {
                statusCode: 200,
                id: tweet.id,
                screenName: tweet.user.screen_name,
                date: tweet.created_at,
                text: tweet.text,
                imgUrl
            };
        });
    }
}

module.exports = Tweet;