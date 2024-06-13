require('dotenv').config(); 
require("./config/db");
const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json())
const PORT = process.env.API_PORT || 7000;
app.use(express.static(path.join(__dirname,"public")))
const router1 = require("./routers/Index")

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('././swagger/New Collection.postman_collection.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get("/",(req,res)=> {
  res.send("hello world")
})

app.use("/api",router1);




app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
