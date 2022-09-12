import joi from "joi";

const documentSchema = joi.object({
    typeDoc: joi.string().valid('RG', 'CNH').required(),
    name: joi.string().required(),
    emission: joi.date().required(),
    expiration: joi.date().required(),
    number: joi.string().required(),
    org: joi.string().required()
});

export default documentSchema