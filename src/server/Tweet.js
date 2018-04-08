const Twit = require('twit');
const config = require('../../etc/config');

var Tweet = function (userName, response) {
    const Twitter = new Twit(config.twitterLogin);
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