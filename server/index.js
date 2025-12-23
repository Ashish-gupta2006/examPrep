const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const url ="mongodb+srv://ashishgupta16082_db_user:tAwmAArvDoQ1AH7n@cluster0.w5izady.mongodb.net/examPrep?appName=Cluster0";
mongoose
  .connect(url)
  .then(() => {
    console.log("Successfully connected");
  })
  .catch((err) => {
    console.log(`Error is ${err}`);
  });

//  API started
app.use("/api/examinee", require("./routes/examineeRoute"));

// admin route
app.use("/api/admin", require("./routes/adminRoute"));

// session api
app.use("/api/session", require("./routes/sessionRoute"));

// subject Api
app.use("/api/subject", require("./routes/subjectRoute"));

// question API
app.use("/api/question", require("./routes/questionRoute"));
// eami api
app.use("/api/exams", require("./routes/examinationRoute"));
// message API 
app.use("/api/message", require('./routes/messageRoute'));
// API ended
app.listen(5000, () => {
  console.log("Server is Conneted on http://localhost:5000");
});
