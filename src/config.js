module.exports={
  "mistakeImg": "http://i2.cdn.turner.com/money/dam/assets/141224103109-investor-mistake-1024x576.jpg",
  "logo": "http://logos-download.com/wp-content/uploads/2016/02/Twitter_logo_bird_transparent_png-700x568.png",
  "serverUrl": "http://localhost:8080/api/tweets",
  "extra": "https://timeline-for-tweets.herokuapp.com/api/tweets",
  "twitterKeys": {
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token: process.env.ACCES_TOKEN,
      access_token_secret: process.env.ACCES_TOKEN_SECRET
  }
};
