import joi from "joi";

const cardSchema = joi.object({
    number: joi.string().required(),
    name: joi.string().required(),
    cvv: joi.string().length(3).required(),
    expiration: joi.date().required(),
    password: joi.string().required(),
    isVirtual: joi.boolean().required(),
    type: joi.string().valid('crédito', 'débito', 'ambos').required()
});

export default cardSchema