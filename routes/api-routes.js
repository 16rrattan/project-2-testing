var db = require("../models");


module.exports = function (app) {

    //post route to make a new author
    app.post("api/authors", function (req, res) {
        db.Author.create(req.body).then(function (dbAuthor) {
            res.json(dbAuthor);
        });
    });




    //get route to check if user exists
    app.get("api/authors", function (req, res) {
        var query = {};
        if (req.query.author_id) {
            query.AuthorId = req.query.author_id;
        }
    })


}
//commit



