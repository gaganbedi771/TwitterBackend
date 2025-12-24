const express = require("express");

const { PORT } = require("./config/serverConfig");
const connect = require("./config/database");
const {TweetRepository,HashtagRepository} = require("./repository/index");
const TweetService = require("./services/tweetService");
const Comment=require("./models/comment");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, async () => {
  console.log("Twitter is running on port:", PORT);
  await connect();
  const tweet = await TweetService.create({content:"Tweet with #comment #Hash2",userEmail:"x@y.com"});

//   const comment=await Comment.create({content:"New comment"});
//   tweet.comments.push(comment);
//   await tweet.save();
// const tweet=await TweetRepository.get("6946d02db832a1ea7047330a");
//   console.log(tweet);

// const hastag=await HashtagRepository.bulkCreate([
//   {
//     title:"Hash1",
//     tweets:[]
//   },
//    {
//     title:"Hash2",
//     tweets:[]
//   },
//    {
//     title:"Hash3",
//     tweets:[]
//   },
//    {
//     title:"Hash4",
//     tweets:[]
//   },
// ])

// console.log(hastag);



});
