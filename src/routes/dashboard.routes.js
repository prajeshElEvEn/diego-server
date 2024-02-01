const express = require("express");
const router = express.Router();

router.route("/:userId").get();

module.exports = router;
