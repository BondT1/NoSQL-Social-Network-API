const { User, Thought } = require("../models");

module.exports = {

getUsers(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
},

getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate("thoughts")
      .populate("friends")
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "User ID invalid" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
},

newUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },


}


  