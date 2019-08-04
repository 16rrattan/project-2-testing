var db = require("../models");


module.exports = function (app) {

//loads someones edit page
  app.get("/api/authors/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Author.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function (dbAuthor) {
      res.json(dbAuthor);
    });
  });




    //post route to make a new author
    app.post("api/authors", function (req, res) {
        db.Author.create(req.body).then(function (dbAuthor) {
            res.json(dbAuthor);
        });
    });

    //get route to print all the haikus
      app.get("/api/authors", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Author.findAll({
      include: [db.haikus]
    }).then(function (dbAuthor) {
      res.json(dbAuthor);
    });
  });


//get route to print list all of this users haikus
app.get("/haikus/:id", function(req, res){
    db.haikus.findAll({
        where: {
            id: req.params.id
        }
    }).then(function(dbHaiku){

    })
})




    //get route to check if user exists
    app.get("api/authors", function (req, res) {
        var query = {};
        if (req.query.author_id) {
            query.AuthorId = req.query.author_id;
        }
    })


}
//commit



