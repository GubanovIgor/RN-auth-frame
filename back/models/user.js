const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      minlength: 6,
      maxlength: 20
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: 6
    }
  },
  { timestamps: true }
);

userSchema.methods = {
  passwordConfirm: function(password) {
    return this.password === password;
  }
};

module.exports = mongoose.model("User", userSchema);
