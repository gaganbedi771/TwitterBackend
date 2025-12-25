const { Comment } = require("../models/index");

exports.create = async (data) => {
  try {
    const comment = await Comment.create(data);
    return comment;
  } catch (error) {
    console.log("Error in Comment repository layer ", error);
    throw error;
  }
};

exports.get = async (id) => {
  try {
    const tweet = await Comment.findById(id);
    return tweet;
  } catch (error) {
    console.log("Error in Tweet repository layer ", error.message);
    throw error;
  }
};

exports.getByNameModelIdModel = async (data) => {
  try {
    const comment = await Comment.findOne(data);
    return comment;
  } catch (error) {
    console.log("Error in Comment repository layer ", error.message);
    throw error;
  }
};

exports.getAll = async (id) => {
  try {
    const comments = await Comment.find({});
    return comments;
  } catch (error) {
    console.log("Error in Comment repository layer ", error.message);
    throw error;
  }
};

exports.update = async (id, data) => {
  try {
    const comment = await Comment.findByIdAndUpdate(id, data, { new: true });
    return comment;
  } catch (error) {
    console.log("Error in Comment repository layer ", error.message);
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const comment = await Comment.findByIdAndDelete(id);
    return comment;
  } catch (error) {
    console.log("Error in Comment repository layer ", error.message);
    throw error;
  }
};
