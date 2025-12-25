const express = require("express");
const {
  TweetController,
  UserController,
  LikeController,
  CommentController,
} = require("../../controllers/index");

const router = express.Router();

router.post("/tweet", TweetController.create);
router.get("/tweet/:id", TweetController.get);

router.post("/user", UserController.create);

router.post("/like", LikeController.toggleLike);

router.post("/comment", CommentController.create);
module.exports = router;
