const router = require('express').Router();
const studentsController = require('../../controllers/students.controller')

router.get('/', studentsController.getAll)
router.post('/', studentsController.create)

module.exports = router;