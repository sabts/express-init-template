const { model, Schema } = require("mongoose");

const teacherSchema = new Schema(
  {
    name: String,
    surname: String,
    age: {
      type: Number,
      min: 20,
      max: 65,
    },
    available: Boolean,
  },
  { timestamps: true, versionKey: false }
);

const Teacher = model("teacher", teacherSchema);
module.exports = Teacher;
