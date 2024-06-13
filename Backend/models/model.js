const mongoose = require("mongoose");
const { userValidationSchema } = require('../validators/userValidator');

const userSchema = new mongoose.Schema(
  {
    name: {
        type:String,
        required:true
    },
    email:  {
        type:String,
        required:true
    },
    password:  {
        type:String,
        required:true
    },
    image:  {
        type:String,
        required:true
    },
    hobby:  {
        type:String,
        required:true
    },
    gender:  {
        type:String,
        required:true
    },
    contry:  {
        type:String,
        required:true
    },
  },
  { timestamps: true }
);


userSchema.pre('save', async function(next) {
    try {

        await userValidationSchema.validateAsync(this.toObject());
        next();
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
