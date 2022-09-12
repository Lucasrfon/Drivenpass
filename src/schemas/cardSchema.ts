import joi from "joi";
import joiDate from '@joi/date';
const extendedJoi = joi.extend(joiDate);

const cardSchema = joi.object({
    number: joi.string().creditCard().required(),
    name: joi.string().pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/).required(),
    cvv: joi.string().pattern(/^[0-9]{3}$/).required(),
    expiration: extendedJoi.date().format('MM/YY').required(),
    password: joi.string().required(),
    isVirtual: joi.boolean().required(),
    typeCard: joi.string().valid('crédito', 'débito', 'ambos').required(),
    title: joi.string().required()
});

export default cardSchema