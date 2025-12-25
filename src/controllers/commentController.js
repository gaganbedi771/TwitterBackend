const { CommentService } = require("../services/index");

exports.create = async (req, res) => {
  try {
    const modelId = req.query.modelId;
    const modelType = req.query.modelType;
    const userId = req.body.userId;
    const content = req.body.content;
    const toggleComment = await CommentService.create(
      modelId,
      modelType,
      userId,
      content
    );
    res.status(201).json({
      data: toggleComment,
      success: true,
      error: {},
      message: "Comment successfully created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      error: error.message,
      message: "Something went wrong. Cannot create comment",
    });
  }
};
