const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },

  exercises: [
    {
      type: {
        type: String,
        required: "type is required",
        trim: true
      },
      name: {
        type: String,
        required: "name is required",
        trim: true
      },
      duration: {
        type: Number
      },
      distance: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }
  ],
},
{
  toJSON: {
    virtuals: true
  }
});

WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration
  }, 0)
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
