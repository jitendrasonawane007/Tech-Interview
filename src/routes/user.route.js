
const express = require("express");
const router = express.Router();
const service = require("../services/user.services");

router.get("/authenticate/user", (req, res) => {
  try {
    const message = authenticate(req.body);
    res.send({
      message: message,
    });
  } catch (error) {
    res.send({
      message: `${error.message}`,
    });
  }
});


/**
 * Not using async/await, because not dealing with databases connection, or other dependent source
 * using static data to match user data with incoming parameters
 */
function authenticate(params) {
  const { userName, password } = params;
  return service.checkIfUserValid(userName, password);
}
module.exports = router;
