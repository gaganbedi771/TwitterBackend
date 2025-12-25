const { CommentRepository, TweetRepository } = require("../repository/index");

exports.create = async (modelId, modelType, userId, content) => {
  try {
    if (modelType === "Tweet") {
      var target = await TweetRepository.get(modelId);
    } else if (modelType === "Comment") {
      var target = await CommentRepository.get(modelId);
    } else {
      throw new Error("Unknown model type");
    }

    const newComment = await CommentRepository.create({
      content,
      user: userId,
      onModel: modelType,
      commentable: modelId,
      comments: [],
    });

    target.comments.push(newComment);
    await target.save();

    return newComment;
  } catch (error) {
    console.log("Error at service layer ", error);
    throw error.message;
  }
};

exports.delete = async () => {
  try {
  } catch (error) {
    console.log("Error at service layer ", error);
    throw error.message;
  }
};

exports.x = async () => {
  try {
  } catch (error) {
    console.log("Error at service layer ", error);
    throw error.message;
  }
};
