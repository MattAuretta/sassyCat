var db = require("../models");
var Sequelize = require("../models").sequelize;

module.exports = function (app) {
  // Get all planets
  app.get("/api/planets", function (req, res) {
    db.Planets.findAll({}).then(function (dbPlanets) {
      res.json(dbPlanets);
    });
  });

  app.get("/api/randomplanet", function (req, res) {
    db.Planets.findOne({
      order: Sequelize.literal('rand()')
    }).then(function (dbPlanets) {
      res.json(dbPlanets)
    });
  })

  // Get all users and scores
  app.get("/api/scores", function (req, res) {
    db.Scores.findAll({}).then(function (dbScores) {
      res.json(dbScores);
    });
  });

  // Create a new user with score
  app.post("/api/scores", function (req, res) {
    db.Scores.create({
      player_name: req.body.player_name,
      player_score: req.body.player_score
    }).then(function (results) {
      res.json(results);
    });
  });

  // PUT route for updating scores
  app.put("/api/scores", function (req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.Scores.update({
      player_name: req.body.player_name,
      player_score: req.body.player_score
    }, {
      where: {
        id: req.body.id
      }
    }).then(function (results) {
      res.json(results);
    })
  });
};