var db = require("../models");


module.exports = function (app) {

    //get route to check if user exists
    app.get("api/authors", function (req, res) {
        var query = {};
        if (req.query.author_id) {
            query.AuthorId = req.query.author_id;
        }
    })


}



