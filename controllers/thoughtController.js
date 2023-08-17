const { User, Thought } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find({})
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

getSingleThought(req, res) {
  Thought.findOne({ _id: req.params.thoughtId })
    .select("-__v")
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: "Thought ID invalid" })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
  },





}