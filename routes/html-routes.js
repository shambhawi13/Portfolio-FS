// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {
    // default about page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });

    // loads dashboard page 
    app.get("/dashboard", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/dashboard.html"));
    });

    // loads contact page 
    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });

    // loads frontend projects page 
    app.get("/frontend", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/frontEnd.html"));
    });

    // loads react projects page 
    app.get("/react", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/reactProjects.html"));
    });

    // loads angular projects page 
    app.get("/angular", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/angularProjects.html"));
    });

    // loads fs projects page 
    app.get("/fullstack", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/fsProjects.html"));
    });

    // loads frontend projects page 
    app.get("/node", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/nodeProjects.html"));
    });
};
