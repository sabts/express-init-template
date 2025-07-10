const router = require("express").Router();
const teachersController = require("../../controllers/teachers.controller");

//Get Routes
router.get("/", teachersController.getAll);

//Post Routes
router.post("/", teachersController.create);

module.exports = router;
