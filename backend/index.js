const express = require("express");
const cors = require('cors');
const { default: mongoose } = require("mongoose");
const authRouter = require("./routes/authRouter");
const studRouter = require("./routes/studentRouter")
const gradeRouter = require("./routes/gradeRouter")

const authMiddleware = require("./middlewares/authMiddleware");


const PORT = process.env.PORT || 5000;
const app = express({ limit: "100mb" });

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);
app.use('/uploads', express.static('uploads'));
app.use('/student', studRouter)
app.use('/grade', gradeRouter)
const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Diary');
    app.listen(PORT, () => {
      console.clear();
      console.log(`Сервер запущен на порту ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();