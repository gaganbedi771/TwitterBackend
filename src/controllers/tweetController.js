const { TweetService } = require("../services/index");

exports.create = async (req, res) => {
  try {
    const data = { content: req.body.content };
    const tweet = await TweetService.create(data);
    res.status(201).json({
      data: tweet,
      success: true,
      error: {},
      message: "Tweet created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      error: error.message,
      message: "Something went wrong",
    });
  }
};

// exports.create = async (req,res) => {
//   try {
//     res.status(201).json({
//       data: d,
//       success: true,
//       error: {},
//       message: "Tweet created successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       data: {},
//       success: false,
//       error: error.message,
//       message: "Something went wrong",
//     });
//   }
// };
// exports.create = async (req,res) => {
//   try {
//     res.status(201).json({
//       data: d,
//       success: true,
//       error: {},
//       message: "Tweet created successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       data: {},
//       success: false,
//       error: error.message,
//       message: "Something went wrong",
//     });
//   }
// };
// exports.create = async (req,res) => {
//   try {
//     res.status(201).json({
//       data: d,
//       success: true,
//       error: {},
//       message: "Tweet created successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       data: {},
//       success: false,
//       error: error.message,
//       message: "Something went wrong",
//     });
//   }
// };
