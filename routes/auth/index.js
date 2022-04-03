const router = require("express").Router();
const bcrypt = require("bcryptjs/dist/bcrypt");
const Joi = require("joi");
const { signUp, signIn } = require("./auth_constants");

const schema = Joi.object({
  businessName: Joi.string().alphanum().min(3).max(50).required(),
  firstName: Joi.string().alphanum().min(3).max(50).required(),
  lastName: Joi.string().alphanum().min(3).max(50).required(),
  email: Joi.string().email().required(),
  contact: Joi.string()
    .min(9)
    .max(14)
    .pattern(/^[0-9]*$/)
    .required(),
  country: Joi.string().min(3).max(50).required(),
  password: Joi.string().alphanum().min(8).max(50).required(),
});

router.post(signUp, async (req, res) => {
  res.json({
    route: signUp,
    message: req.body,
  });
});

router.post(signIn, (req, res) => {
  res.json({
    route: signIn,
    message: req.body,
  });
});

module.exports = router;
