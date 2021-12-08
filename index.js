const express = require("express");
require('dotenv').config()
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mailAPI = require("./routes/mail.js");
app.use(cors());
app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     limit: "50mb",
//     extended: false,
//     parameterLimit: 50000
//   })
// );

app.use("/api/v1", mailAPI);

const port = process.env.PORT || 4444;

app.listen(port, function () {
  console.log(`listening to the port ${port} .....`);
});
    
