const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

mongoose.connect("mongodb+srv://atchayamohan05:rDK01GXhREvtYCRW@cluster0.y0rqs.mongodb.net/mcqDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const QuestionSchema = new mongoose.Schema({
  level: Number,
  question: String,
  options: [String],
  answer: String,
});

const Question = mongoose.model("Question", QuestionSchema);

// Route to fetch questions by level
app.get("/questions/:level", async (req, res) => {
  const questions = await Question.find({ level: req.params.level });
  res.json(questions);
});

app.listen(3000, () => console.log("Server running on port 3000"));
