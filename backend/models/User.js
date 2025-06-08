const { Schema, model } = require("mongoose");

const User = new Schema({
  username: { type: String, unique: true},
  lastname: { type: String, default: "Lastname"},
  email: { type: String, default: ""},
  password: { type: String },
  registrationDate: { type: Date, default: Date.now },
  roles: [{type: String, ref: "Role"}],
  name: { type: String, default: "Name" },
});

module.exports = model("User", User);