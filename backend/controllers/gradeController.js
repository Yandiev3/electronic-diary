const GradeJournal = require("../models/GradeJournal");
const Student = require("../models/Student");

class GradeController {
  async addGrade(req, res) {
    try {
      const { studentId, subject, grade, comment } = req.body;
      
      if (!studentId || !subject || !grade) {
        return res.status(400).json({ message: "Необходимо указать studentId, subject и grade" });
      }

      const gradeEntry = new GradeJournal({
        studentId,
        subject,
        grade,
        comment,
        teacherId: req.user.id
      });

      await gradeEntry.save();
      res.status(201).json(gradeEntry);
    } catch (e) {
      res.status(500).json({ message: "Ошибка сервера", error: e.message });
    }
  }

  async getStudentGrades(req, res) {
    try {
      const { studentId } = req.params;
      const grades = await GradeJournal.find({ studentId })
        .populate('studentId', 'name lastname group');
      
      res.json(grades);
    } catch (e) {
      res.status(500).json({ message: "Ошибка сервера", error: e.message });
    }
  }

  async getSubjectGrades(req, res) {
    try {
      const { subject } = req.params;
      const grades = await GradeJournal.find({ subject })
        .populate('studentId', 'name lastname group')
        .sort({ date: -1 });
      
      res.json(grades);
    } catch (e) {
      res.status(500).json({ message: "Ошибка сервера", error: e.message });
    }
  }
}

module.exports = new GradeController();