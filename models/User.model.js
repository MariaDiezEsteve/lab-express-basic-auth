const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    rquired: true
  },
  admin: {
    type: Boolean,
    default: false  
  }
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
