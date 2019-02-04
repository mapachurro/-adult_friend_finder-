module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json();
  });

  app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
  });

}