
var path = require("path");

const db = require("../models");

module.exports = function (app) {

    app.get('/api/workouts', function (req, res) {

        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });

    });

    app.put('/api/workouts/: id', ({ body }, res) => {
        
        db.Workout.findOneAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true }
        )
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });



app.get('/path', function (request, response) {
    // get all body stuff from request.body object
    // get all request parameter stuff from request.params object

    // respond with: response.send()

});

app.get('/path', function (request, response) {
    // get all body stuff from request.body object
    // get all request parameter stuff from request.params object

    // respond with: response.send()

});



app.get('/path', function (request, response) {
    // get all body stuff from request.body object
    // get all request parameter stuff from request.params object

    // respond with: response.send()

});



};
