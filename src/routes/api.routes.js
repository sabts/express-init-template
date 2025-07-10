const router = require("express").Router();

router.use("/students", require("./api/students.routes"));
router.use("/teachers", require("./api/teachers.routes"));

module.exports = router;
