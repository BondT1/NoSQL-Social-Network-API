const { Schema, model, Types } = require('mongoose');

const userModel = new Schema(
  {
    username: {
      type: String, 
      unique: true,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true, 
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
        'Please type a valid email address'
      ],
    },
    
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },

  {
    toJSON: {
      virtuals: true,
    },

    id: false,
  }
);

userModel.virtual("friendCount")
  .get(function() {
    return this.friends.length;
});

const User = model('User', userModel);

module.exports = User;