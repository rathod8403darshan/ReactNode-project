// MongoDB connection
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL).
then(console.log("db is connect"))