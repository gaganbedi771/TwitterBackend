const Tweet = require("../models/tweet");

exports.create = async (data,session) => {
  try {
    const [tweet] = await Tweet.create([data],{session});
    return tweet;
  } catch (error) {
    console.log("Error in repository layer ", error);
  }
};

exports.get = async (id) => {
  try {
    const tweet = await Tweet.findById(id).populate({path:"comments"});
    return tweet;
  } catch (error) {
    console.log("Error in repository layer ", error.message);
  }
};


exports.delete = async (id) => {
  try {
    await Tweet.findByIdAndRemove(id);
    return true;
  } catch (error) {
    console.log("Error in repository layer ", error.message);
  }
};
