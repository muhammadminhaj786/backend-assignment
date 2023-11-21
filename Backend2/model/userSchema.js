const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone_no:{
    type: String,
    required: true
  },
  user_type:{
    type: String,
    required: true
  }
});

const UserModel = mongoose.model("myuser", schema);

module.exports = UserModel;