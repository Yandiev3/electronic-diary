const Student = require("../models/Student");

class StudentController {
  async addStud(req, res) {
    try {
      const { name, lastname, patronymic, email, number, group } = req.body;

      if (!name || !lastname || !group) {
        return res.status(400).json({ message: "Обязательные поля: имя, фамилия и группа" });
      }

      const student = new Student({
        name,
        lastname,
        patronymic,
        email,
        number,
        group,
        roles: ["student"]
      });

      await student.save();
      res.status(201).json({ message: "Студент добавлен", student });
    } catch (error) {
      res.status(500).json({ message: "Ошибка сервера", error: error.message });
    }
  }

  async getStud(req, res) {
    try {
      const students = await Student.find();
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ message: "Ошибка сервера", error: error.message });
    }
  }
}

module.exports = new StudentController();