const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs');

const usersSchema = new mongoose.Schema(
    {
      fullname: {
        type: String,
        trim: true,
        required: [true, "The fullname field must be required"],
      },
      email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "The email field must be required"],
      },
      password: {
        type: String,
        trim: true,
        required: [true, "The password field must be required"],
      }
    }
  ); 
const Users = mongoose.model("Users", usersSchema);
  
module.exports = Users;