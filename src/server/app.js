const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { getTweets, filterTweets } = require('./getTweets');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(express.static(__dirname + './../../dist'));

app.get('*', (req, res) => {
    if (req.url === '/api/tweets') {
        var userName = req.query.user_name;

        getTweets(userName).then(response => {
            res.status(200).send(filterTweets(response.data));
        });
    }else
        res.sendFile(path.resolve(__dirname, '../..', 'dist', 'index.html'));
});

module.exports = app;