const ragisterModel = require("../models/ragisterModel");
const { RagisterValidationSchema } = require("../validators/userValidator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const GetragisterData = async (req, res) => {
    try {
        const GetRagiter = await ragisterModel.find();
        res
            .status(200)
            .json({ massage: "Get data success", data: GetRagiter, status: true });
    } catch (error) {
        res.status(500).json({ massage: "Not Found", data: [], status: false });
    }
};



const AddRagisterData = async (req, res) => {
    try {
        await RagisterValidationSchema.validateAsync(req.body);

        let {
            userName,
            mobile,
            gender,
            email,
            password,
            confirmPassword,
            city,
         
        } = req.body;
        const file = req.file
   

        const userInfo = await ragisterModel.findOne({ email });
        if (userInfo) {
            return res.status(400).json({
                isSuccess: false,
                error: "Email is already in use"
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                isSuccess: false,
                error: "Password and Confirm Password must be same"
            })
        }


        const hashedPassword = await bcrypt.hash(password, 10);

              let filePath = `http://localhost:7000/uploads/${file.originalname}`;
              const user = await ragisterModel.create({
                userName,
                mobile,
                gender,
                email,
                password: hashedPassword,
                city,
                userImage: filePath
            });
  
            if(user){
              return res.status(200).json({
                isSuccess : true,
                message: "User created successfully",
                data: user,
              });
            }


        // const userdata = await ragisterModel.create(req.body);
    } catch (error) {
        res.status(500).json({ message: error.message, data: [], status: false });
    }
};


const LoginData = async (req,res)=> {
    try {
        let userInfo = await ragisterModel.findOne({
            email: req.body.email,
          });

          console.log(userInfo);
    
          if (!userInfo) {
            return res.status(400).json({
              isSuccess : false,
              error : "Email not found!"
            })
          }
    
          
          if (!bcrypt.compareSync(req.body.password, userInfo.password)) {
            return res.status(400).json({
              isSuccess : false,
              error : "Authentication failed."
            })
          }

          var token = jwt.sign({user_Id : userInfo._id, userName : userInfo.userName}, process.env.TOKEN_KEY);
          console.log(token);
    
          jwt.verify(token,process.env.TOKEN_KEY, async function (err, decoded) {
            if (err) {
              return res.json({
                message: "Auth token not found",
                error: err,
                isSuccess: false,
              });
            }
            else {
              return res.status(200).send({
                isSuccess : true,
                message: "You are logged in successfully!",
                token : token,
              });
            }
          });

    } catch (error) {
        res.status(500).json({ message: error.message, data: [], status: false });
    }
}

module.exports = {
    GetragisterData,
    AddRagisterData,
    LoginData
};
