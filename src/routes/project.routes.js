const express = require("express");
const router = express.Router();

router.route("/").post();
router.route("/:projectId").get().put();
router.route("/:projectId/tasks").get();

module.exports = router;
