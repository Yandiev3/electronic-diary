const {Schema, model} = require("mongoose");

const Student = new Schema({
  name: { type: String},
  lastname: { type: String},
  patronymic: {type: String},
  email: { type: String},
  number: { type: String},
  group: { type: String},
  password: { type: String },
  roles: [{type: String, default: "student"}], 
});

module.exports = model("Student", Student);