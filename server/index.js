const Twit = require('twit');
const http = require('http');
const Url = require('url');
const config = require('./twitterconfig');

const server = http.createServer();
const port = 8080;
console.log("Server is running");

server.on("request", (request, response) => {
    var { method, url } = request;
    var parsed = Url.parse(request.url, true);

    if (parsed.query.user_name) {
        var Twitter = new Twit(config);
        var userName = parsed.query.user_name;
        var options = {
            screen_name: userName,
            count: 2
        }

        Twitter.get('statuses/user_timeline', options, (err, data, res) => {
            if (!err && res.statusCode === 200) {
                response.statusCode = 200;
                response.write(JSON.stringify(data));
            } else {
                response.write(err);
            }
        });
    } else {
        response.write("Wrong url. Right one: '/user_name={userName}'");
    }
    
});

server.listen(port);