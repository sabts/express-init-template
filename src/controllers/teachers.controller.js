const Teacher = require("../models/teachers.model");

const getAll = async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
};

const create = async (req, res) => {
  try {
    const newTeacher = await Teacher.create(req.body);
    res.json(newTeacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAll, create };
