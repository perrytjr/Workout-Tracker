const Workout = require("../models/workout")

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find({})
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.json(err)
      });
  });



  app.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then(data =>
        res.json(data))
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", function (req, res) {
    Workout.find({})
      .then(data =>
        res.json(data))
      .catch(err => {
        res.json(err);
      });
  });

  // app.put("/api/workouts/:id", function ({body}, res) {
  //   const update = new Workout(body);
  //   update.setDuration();
  //   Workout.Update(update)
  //     .then(data =>

  //       res.json(data))
  //     .catch(err => {
  //       res.json(err);
  //     })
  // });
  app.put("/api/workouts/:id ", ({ body }, res) => {
    Workout.update(body)
      .then(({ _id }) => Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
      .then(data =>

        res.json(data))
      .catch(err => {
        res.json(err);
      })
  });

}
