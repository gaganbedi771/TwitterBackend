const { Hashtag } = require("../models/index");

exports.create = async (data, session) => {
  try {
    const [hashtag] = await Hashtag.create([data], { session });
    return hashtag;
  } catch (error) {
    console.log("Error in repository layer ", error.message);
    throw error;
  }
};

exports.bulkCreate = async (data, session) => {
  try {
    const hashtags = await Hashtag.insertMany(data, { session });
    return hashtags;
  } catch (error) {
    console.log("Error in repository layer ", error.message);
    throw error;
  }
};

exports.bulkUpdate = async (filter, tweetId, session) => {
  try {
    const hashtags = await Hashtag.updateMany(
      { _id: { $in: filter } },
      { $addToSet: { tweets: tweetId } },
      { session }
    );
    return hashtags;
  } catch (error) {
    console.log("Error in repository layer ", error);
    throw error;
  }
};

exports.get = async (id) => {
  try {
    const hashtag = await Hashtag.findById(id);
    return hashtag;
  } catch (error) {
    console.log("Error in repository layer ", error.message);
    throw error;
  }
};

exports.getTagByName = async (data, session) => {
  try {
    const hashtags = await Hashtag.find({ title: data }, null, { session });
    return hashtags;
  } catch (error) {
    console.log("Error in repository layer ", error.message);
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    await Hashtag.findByIdAndRemove(id);
    return true;
  } catch (error) {
    console.log("Error in repository layer ", error.message);
    throw error;
  }
};
