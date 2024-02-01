const express = require("express");
const router = express.Router();

router.route("/").post();
router.route("/:userId").get().put();

module.exports = router;
