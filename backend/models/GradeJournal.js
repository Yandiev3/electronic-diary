const {Schema, model} = require("mongoose");

const GradeSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  subject: { type: String, required: true },
  date: { type: Date, default: Date.now },
  grade: { type: Number, required: true },
  teacherId: { type: Schema.Types.ObjectId, ref: 'User' },
  comment: { type: String }
});


module.exports = model("Grade", GradeSchema);