const { UserService } = require("../services/index");

exports.create = async (req, res) => {
  try {
    const data = req.body;
    const user = await UserService.create(data);
    res.status(201).json({
      data: user,
      success: true,
      error: {},
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      error: error.message,
      message: "Something went wrong. Cannot create User",
    });
  }
};
