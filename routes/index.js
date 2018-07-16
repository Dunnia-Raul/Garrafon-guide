const express = require('express');
const router  = express.Router();
const ensureLogin = require("connect-ensure-login")
const User = require("../models/User")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/home", ensureLogin.ensureLoggedIn("/auth/login"), (req, res) => {
  User.find({}).then( users => {
    if(req.user.role.includes("admin")){
      users.forEach(e => e.isAdmin = true);
      res.render("list", {users});
    } else res.render("home");
  })
 });
module.exports = router;
