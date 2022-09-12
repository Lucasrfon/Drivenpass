import joi from "joi";
import joiDate from '@joi/date';
const extendedJoi = joi.extend(joiDate);

const documentSchema = joi.object({
    typeDoc: joi.string().valid('RG', 'CNH').required(),
    name: joi.string().pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/).required(),
    emission: extendedJoi.date().format('DD/MM/YY').required(),
    expiration: extendedJoi.date().format('MM/YY').required(),
    number: joi.string().pattern(/^[0-9]*$/).required(),
    org: joi.string().pattern(/^[A-Za-z\-\/]*$/).required()
});

export default documentSchema