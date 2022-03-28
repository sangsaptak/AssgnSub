const express = require("express");
const bodyParser = require("body-parser");
const {
  senseg,
  worseg,
  storem,
  remdup,
  revit,
  exnum,
} = require("./myfunf");
// New app using express module
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var inpu = String(req.body.inpu);
  var resu =
    "<H3>Question Paper</H3>" +
    inpu +
    "<br>" +
    "<H3>Sentence Segmentation </H3>" +
    senseg(inpu) +
    "<br>" +
    "<H3>Word Segmentation </H3>" +
    worseg(inpu) +
    "<br>" +
    "<H3>Stop Words Removed</H3>" +
    storem(inpu) +
    "<br>" +
    "<H3>Without Repeated Words</H3>" +
    remdup(inpu) +
    "<br>" +
    "<H3>Each Word Reversed</H3>" +
    revit(inpu) +
    "<br>" +
    "<H3>Extracted Number</H3>" +
    exnum(inpu) +
    "<br>";
  res.send(resu);
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
