var path = require("path");

//index => character => ship => planet => back to ship or ending

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/character", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/character.html"));
  });

  app.get("/ship", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ship.html"));
  });

  app.get("/planet", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/planet.html"));
  });

  app.get("/ending", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ending.html"));
  });

  app.get("/chance", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/chance.html"));
  });
  
  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
