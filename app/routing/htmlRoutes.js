var path = require("path");
var eval = require("../public/assets/javascript/eval.js")


module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // Process the results
app.post("/results", function(req, res) {
  console.log(req.body.name)
  console.log(req.body.pic)
  console.log(req.body.answers)
  name = req.body.name;
  pic = req.body.pic;
  answers = req.body.answers;

  eval.compare(answers)
  // eval.compare(req.)


    // Send back the results
    // res.json({ result });
    // console.log({ id: result.insertId });
  });

};