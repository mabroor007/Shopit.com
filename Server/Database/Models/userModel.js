const { Schema, model } = require("mongoose");
const validator = require("validator");

const userSchema = new Schema({
  userName: {
    required: true,
    type: String,
    maxlength: [50, "Username Must be less then 50 character long!"],
    minlength: [10, "Username is too small!"],
    validate: [validator.isAlphanumeric, "Username must be alphanumeric!"],
  },
  email: {
    unique: [true, "Account for this email already Exists!"],
    required: true,
    type: String,
    validate: [validator.isEmail, "Email is not valid!"],
  },
  emailVarified: {
    required: true,
    type: Boolean,
  },
  address: {
    required: true,
    type: String,
    maxlength: [256, "Address is too long!"],
  },
  password: {
    required: true,
    type: String,
    minlength: [10, "Minimum length should be 8 Character"],
  },
  phoneNo: {
    required: true,
    type: String,
  },
  phoneVarified: {
    required: true,
    type: Boolean,
  },
});

module.exports = model("user", userSchema);
