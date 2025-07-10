const router = require("express").Router();
const studentsController = require("../../controllers/students.controller");

//Get Routes
router.get("/", studentsController.getAll);

//Post Routes
router.post("/", studentsController.create);

//Put Routes
router.put("/:studentId", studentsController.updateUser);

//Delete Routes
router.delete("/:studentId", studentsController.deleteUser);

module.exports = router;
