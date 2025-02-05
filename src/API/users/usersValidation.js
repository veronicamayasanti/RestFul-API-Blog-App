import Joi from "joi";

export const registerValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            "string.email": "Invalid email format",
            "any.required": "email is required"
        }),
        password: Joi.string().min(6).required().messages({
            "string.min": "password must be at least 6 characters long",
            "any.required": "password is required"
        })
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message})
    }
    next();
}

export const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            "string.email": "Invalid email format",
            "any.required": "email is required"
        }),
        password: Joi.string().min(6).required().messages({
            "string.min": "password must be at least 6 characters long",
            "any.required": "password is required"
        })
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message})
    }
    next()
}