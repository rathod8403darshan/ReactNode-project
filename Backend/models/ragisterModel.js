const mongoose = require("mongoose");
const { RagisterValidationSchema } = require("../validators/userValidator");

const RagisterSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    
    },
    mobile: {
      type: Number,
      required: true,
    
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    
    },
    password: {
        type: String,
        required: true,
       
    },
    city : {
      type: String,
      required: true,
      
    },
    userImage: {
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);


RagisterSchema.pre('save', async function(next) {
    try {

        await RagisterValidationSchema.validateAsync(this.toObject());
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model("user", RagisterSchema);