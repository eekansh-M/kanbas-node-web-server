import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  title: String,
  course: String,
  OutAt: String,
  Due: String,
  pts: String,
  Description: String
}, {
  collection: "assignments"
});

export default assignmentSchema;