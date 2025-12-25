const { User } = require("../models/index");

exports.create = async (data) => {
  try {
    const user = await User.create(data);
    return user;
  } catch (error) {
    console.log("Error in User repository layer ", error);
    throw error;
  }
};
