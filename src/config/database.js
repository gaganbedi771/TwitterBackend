const mongoose = require("mongoose");
const { DB_URL } = require("./serverConfig");


const connect = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(DB_URL);
    console.log("connected to db");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connect;
