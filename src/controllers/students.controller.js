const Student = require("../models/students.model");

//fat model skinny controller

const getAll = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

const create = async (req, res) => {
  //req.body: name, surnmane. phone, email
  const newStudent = await Student.create(req.body);
  res.json(newStudent);
};

const updateUser = async (req, res) => {
  const { studentId } = req.params;

  const uptadeData = await Student.findByIdAndUpdate(studentId, req.body, {
    new: true,
  });
  res.json(uptadeData);
};

const deleteUser = async (req, res) => {
  const { studentId } = req.params;

  const deleteUser = await Student.findByIdAndDelete(studentId);
  res.json({
    message: `El estudiante: ${deleteUser.name} ${deleteUser.surname} fue borrado`,
  });
};

module.exports = { getAll, create, updateUser, deleteUser };
