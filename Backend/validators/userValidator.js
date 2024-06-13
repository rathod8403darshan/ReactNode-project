const Joi = require('joi');


const userValidationSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    image: Joi.string().required(),
    hobby: Joi.string().required(),
    gender: Joi.string().required(),
    contry: Joi.string().required()
}).options({ allowUnknown: true });


const RagisterValidationSchema = Joi.object({
    userName: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    gender: Joi.string().required(),
    city: Joi.string().required(),
    mobile: Joi.number().required(),
}).options({ allowUnknown: true });

module.exports = {
    userValidationSchema,
    RagisterValidationSchema
};
