const router = require("express").Router();
const studentsController = require("../../controllers/students.controller");

//Get Routes
router.get("/", studentsController.getAll);

//Post Routes
router.post("/", studentsController.create);

module.exports = router;
