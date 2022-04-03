const router = require("express").Router();
const { signUp, signIn } = require("./auth_constants");

router.get(signUp, (req, res) => {
  res.json({
    message: signUp,
  });
});

router.get(signIn, (req, res) => {
  res.json({
    message: signIn,
  });
});

module.exports = router;
