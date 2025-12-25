const { Tweet } = require("../models/index");

exports.create = async (data, session) => {
  try {
    const [tweet] = await Tweet.create([data], { session });
    return tweet;
  } catch (error) {
    console.log("Error in Tweet repository layer ", error);
    throw error;
  }
};

exports.get = async (id) => {
  try {
    const tweet = await Tweet.findById(id);
    return tweet;
  } catch (error) {
    console.log("Error in Tweet repository layer ", error.message);
    throw error;
  }
};

exports.getAll = async (offset, limit) => {
  try {
    const tweets = await Tweet.find({}).skip(offset).limit(limit);
    return tweets;
  } catch (error) {
    console.log("Error in Tweet repository layer ", error.message);
    throw error;
  }
};
