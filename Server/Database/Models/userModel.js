const { Schema, model } = require("mongoose");
const validator = require("validator");

const userSchema = new Schema({
  userName: {
    required: [true, "Username is Required!"],
    type: [String, "Username Must be String!"],
    maxlength: [50, "Username Must be less then 50 character long!"],
    minlength: [10, "Username is too small!"],
    validate: [validator.isAlphanumeric, "Username must be alphanumeric!"],
  },
  email: {
    required: [true, "Email is Required!"],
    type: [String, "Email must be String!"],
    validate: [validator.isEmail, "Email is not valid!"],
  },
  emailVarified: {
    required: [true, "Varification not found!"],
    type: [Boolean, "Invalid email Varification Type!"],
  },
  address: {
    type: [String, "Adress must be String!"],
    maxlength: [256, "Address is too long!"],
  },
  password: {
    required: [true, "Password is required!"],
    type: [String, "Password must be a String!"],
  },
  phoneNo: {
    required: [true, "Phone must be required!"],
    type: [String, "Phone number should be string!"],
  },
  phoneVarified: {
    required: true,
    type: [Boolean, "Invalid phone varification type!"],
  },
});

module.exports = model("user", userSchema);
