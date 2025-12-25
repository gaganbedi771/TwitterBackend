const { LikeRepository, TweetRepository } = require("../repository/index");

exports.toggleLike = async (modelId, modelType, userId) => {
  try {
    if (modelType === "Tweet") {
      var tweet = await TweetRepository.get(modelId);
    } else if (modelType === "Comment") {
    } else {
      throw new Error("Unknown model type");
    }

    const likeIfExists = await LikeRepository.getByNameModelIdModel({
      onModel: modelType,
      likeable: modelId,
      user: userId,
    });
    if (likeIfExists) {
      tweet.likes.pull(likeIfExists.id);
      await tweet.save();
      await likeIfExists.deleteOne();
    } else {
      const newLike = await LikeRepository.create({
        onModel: modelType,
        likeable: modelId,
        user: userId,
      });
      tweet.likes.push(newLike);
      await tweet.save();
    }
    return true;
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
