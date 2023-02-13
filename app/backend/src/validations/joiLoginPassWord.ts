import * as Joi from 'joi';

const msgNotLoginPass = 'Incorrect email or password';

const loginSchemaJoi = Joi.object({
  email: Joi.string()
    .required()
    .email()
    .messages({ 'any.required': msgNotLoginPass, 'string.empty': msgNotLoginPass }),
  password: Joi
    .string()
    .required()
    .min(5)
    .messages({ 'any.required': msgNotLoginPass, 'string.empty': msgNotLoginPass }),
});

export default loginSchemaJoi;
