const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Tweet = require('./Tweet');

const config = require('../../etc/config');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(express.static(__dirname + './../../dist'));

app.get('/twits', (req, res) => {
    var userName = req.query.user_name;

    Tweet(userName, res);

});

const server = app.listen(config.serverPort, function () {
    console.log(`Server is up and running on port ${config.serverPort}`);
});  