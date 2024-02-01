const express = require("express");
const router = express.Router();

router.route("/").post();
router.route("/:taskId").get().put().delete();

module.exports = router;
