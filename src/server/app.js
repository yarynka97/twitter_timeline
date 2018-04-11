const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getTweets, filterTweets } = require('./getTweets');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(express.static(__dirname + './../../dist'));

app.get('/api/tweets', (req, res) => {
    var userName = req.query.user_name;

    getTweets(userName).then(response => {
        response.data.errors ?
            res.status(404).send("No user") :
            res.status(200).send(filterTweets(response.data));
    });
});
module.exports = app;