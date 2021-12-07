const express = require("express");
const router = express.Router();
const singleMail = require("../controllers/single-mail");


router.post("/sendmail/single", singleMail)

// router.post("sendmail/bulk", )

module.exports = router;