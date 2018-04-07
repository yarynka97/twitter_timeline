const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const Twit = require('twit');

const config = require('../../etc/config');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(express.static(__dirname + './../../client/dist'));

app.get('/twits', (req, res) => {
    const Twitter = new Twit(config.twitterLogin);
    var userName = req.query.user_name;
    var options = {
            screen_name: userName,
            count: 100
    }

    Twitter.get('statuses/user_timeline', options, (err, data, response) => {
        if (!err && response.statusCode === 200) {
            res.send(data);
            console.log(data);
            } else {
                res.send(err);
            }
        });
});

const server = app.listen(config.serverPort, function () {
    console.log(`Server is up and running on port ${config.serverPort}`);
});  