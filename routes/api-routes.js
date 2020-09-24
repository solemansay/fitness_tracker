const db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });

  app.get("api/workouts/range", (req, res) => {
    db.Workout.find()
      .then((dbData) => {
        res.json(dbData);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find()
      .limit(7)
      .then((data) => {res.json(data);})
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
