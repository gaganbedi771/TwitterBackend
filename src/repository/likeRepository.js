const { Like } = require("../models/index");

exports.create = async (data) => {
  try {
    const like = await Like.create(data);
    return like;
  } catch (error) {
    console.log("Error in Like repository layer ", error);
    throw error;
  }
};

exports.get = async (id) => {
  try {
    const like = await Like.findById(id).populate("likeable");
    return like;
  } catch (error) {
    console.log("Error in Like repository layer ", error.message);
    throw error;
  }
};

exports.getByNameModelIdModel = async (data) => {
  try {
    const like = await Like.findOne(data);
    return like;
  } catch (error) {
    console.log("Error in Like repository layer ", error.message);
    throw error;
  }
};

exports.getAll = async (id) => {
  try {
    const likes = await Like.find({});
    return likes;
  } catch (error) {
    console.log("Error in Like repository layer ", error.message);
    throw error;
  }
};

exports.update = async (id, data) => {
  try {
    const like = await Like.findByIdAndUpdate(id, data, { new: true });
    return like;
  } catch (error) {
    console.log("Error in Like repository layer ", error.message);
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const like = await Like.findByIdAndDelete(id);
    return like;
  } catch (error) {
    console.log("Error in Like repository layer ", error.message);
    throw error;
  }
};
