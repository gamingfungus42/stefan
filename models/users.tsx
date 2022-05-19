const mongoose = require("mongoose");

  const userSchema = {
    firstname: {
      type: String,
      required: [true, "Please add a first name"]
    },
    lastname: {
      type: String,
      required: [true, "Please add a last name"]
    },
    username: {
      type: String,
      required: [true, "Please add a username"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"]
    }
  }

const User = mongoose.model("User", userSchema);


module.exports = {
  userSchema,
  User
};
