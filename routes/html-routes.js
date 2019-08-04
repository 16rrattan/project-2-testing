// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/index.handlebars"));
    });

    app.get("/edit", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/edit.handlebars"));
    });

    app.get("/browse", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/browse.html"));
    });

    app.get("/look", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/look.html"));
    });

};
