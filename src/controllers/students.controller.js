const Student = require("../models/students.model")


//fat model skinny controller

const getAll = (req, res) => {
    res.json('lista de alumnos')
}

const create = async (req, res) => {
    //req.body: name, surnmane. phone, email
    const newStudent = await Student.create(req.body)
    res.json(newStudent)
}

module.exports = { getAll, create }