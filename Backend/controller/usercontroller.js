const Schema1 = require("../models/model");
const { userValidationSchema } = require('../validators/userValidator');
const fs  = require("fs")


const getData = async (req, res) => {
    try {
        const users = await Schema1.find();
        res.status(200).json({ message: "Get Data Success", data: users });
    } catch (error) {
        res.status(500).json({ message: error.message, data: [], status: false });
    }
}

const AddData = async (req, res) => {
    try {

        await userValidationSchema.validateAsync(req.body);

        const userdata = await Schema1.create(req.body);
        res.status(200).json({ message: "Added Data Success", data: userdata, status: true });
    } catch (error) {
        res.status(500).json({ message: error.message, data: [], status: false });
    }
}

const deleteData = async (req, res) => {
    try {

        
        const id = await Schema1.findById(req.params.id);
        const path = `public/uploads/${id.image}`
        fs.unlink(path,(err)=> {
            console.log(err);
        })


        const userdata = await Schema1.findOneAndDelete({ _id: req.params.id });
        res.status(200).json({ message: "Delete Data Success", data: userdata, status: true });
    } catch (error) {
        res.status(500).json({ message: error.message, data: [], status: false });
    }
}

const updateData = async (req, res) => {
    try {
        // Validate incoming data
        await userValidationSchema.validateAsync(req.body);

        const id = await Schema1.findById(req.params.id);
        const path = `public/uploads/${id.image}`
        fs.unlink(path,(err)=> {
            console.log(err);
        })



        const userdata = await Schema1.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
        res.status(200).json({ message: "Update Data Success", data: userdata, status: true });
    } catch (error) {
        res.status(500).json({ message: error.message, data: [], status: false });
    }
}

module.exports = {
    getData,
    AddData,
    deleteData,
    updateData
}
