const Router = require("express");
const router = new Router();
const controller = require("../controllers/gradeController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/add", authMiddleware, controller.addGrade);
router.get("/student/:studentId", authMiddleware, controller.getStudentGrades);
router.get("/subject/:subject", authMiddleware, controller.getSubjectGrades);

module.exports = router;