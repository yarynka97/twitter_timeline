# Twitter Timeline

Web application to search for chosen users tweets. It's designed using React.js, Node.js + Express.js.

## Installation & Build

To download project use git clone and npm install to get all required modules

```bash
git clone git@github.com:yarynka97/twitter_timeline.git
cd twitter_timeline
npm install
```

After all modules installed, build project with command

```bash
npm run build
```

 **Note!!!** App requires Twitter authorization keys, which you can get at [Twitter Apps](https://apps.twitter.com/), after short login process. Then just copy your keys into the file `src/config.js`

That's all, your project is ready for use!

## Run App

To run server enter

```bash
npm start
```

When notification appears, open web page at http://localhost:8080


## Heruko

This app is also deployed at Heruko (https://timeline-for-tweets.herokuapp.com/). App automatically deploys after every merge to master at GitHub.
