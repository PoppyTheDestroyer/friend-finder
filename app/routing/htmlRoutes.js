/*jshint esversion: 6 */
const path = require("path");

module.exports = function(app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirnam + "/../public/survey.html"));
    });
   app.use(function(req, res) {
       res.sendFile(path.join(__dirname + "/../public/home.html"));
   });
};