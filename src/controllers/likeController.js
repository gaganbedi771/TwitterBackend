const { LikeService } = require("../services/index");

exports.toggleLike = async (req, res) => {
  try {
    const modelId = req.query.modelId;
    const modelType = req.query.modelType;
    const userId = req.body.userId;
    const toggleLike = await LikeService.toggleLike(modelId, modelType, userId);
    res.status(201).json({
      data: toggleLike,
      success: true,
      error: {},
      message: "Like toggled successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      error: error.message,
      message: "Something went wrong. Cannot toggle like",
    });
  }
};
