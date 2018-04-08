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
                response.send(data);
            } else {
                response.send(err);
            }
    });
}

module.exports = Tweet;