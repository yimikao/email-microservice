const express = require("express");
const router = express.Router();
const sendSingleMail = require("../controllers/single-mail");
const sendBulkMail = require("../controllers/bulk-mail");
const sendTemplateMail = require("../controllers/template-mail");


router.post("/sendmail/single", sendSingleMail)

router.post("sendmail/bulk", sendBulkMail)

router.post("sendmail/template", sendTemplateMail)

module.exports = router;