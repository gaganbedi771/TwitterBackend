const { UserRepository } = require("../repository/index");

exports.create = async (data) => {
  try {
    const user = await UserRepository.create(data);
    return user;
  } catch (error) {
    console.log("Error in User repository layer ", error);
    throw error;
  }
};
