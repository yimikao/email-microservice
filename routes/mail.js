const express = require("express");
const router = express.Router();
const sendSingleMail = require("../controllers/single-mail");
const sendBulkMail = require("../controllers/single-mail");


router.post("/sendmail/single", sendSingleMail)

router.post("sendmail/bulk", sendBulkMail)

module.exports = router;