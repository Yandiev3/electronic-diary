const Router = require("express");
const router = new Router();
const controller = require("../controllers/studentController");
const { check } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../middlewares/upload");


 router.post("/add",  controller.addStud);
 router.get("/users",  controller.getStud);

 //router.get("/profile/:id", authMiddleware, controller.Profile); //Переход на страницу профиля пользователя

module.exports = router;