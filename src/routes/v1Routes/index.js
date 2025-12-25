const express = require("express");
const {
  TweetController,
  UserController,
  LikeController,
} = require("../../controllers/index");

const router = express.Router();

router.post("/tweet", TweetController.create);

router.post("/user", UserController.create);

router.post("/like", LikeController.toggleLike);
module.exports = router;
