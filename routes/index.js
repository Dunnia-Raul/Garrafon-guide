const express = require('express');
const router = express.Router();
const ensureLogin = require("connect-ensure-login")
const User = require("../models/User")
const { sendMail } = require('../mailing/sendMail');
const Drinks = require("../models/Drinks")
const Places = require("../models/Places")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get("/home", ensureLogin.ensureLoggedIn("/auth/login"), (req, res) => {
  User.find({}).then(users => {
    if (req.user.role.includes("admin")) {
      Places.find({}).then(places => {
        Drinks.find({}).then(drinks => {
          const data = {
            users,
            drinks,
            places
          }
          res.render("list", data);
        })
      })
    } else res.render("home");

  })
});

router.get("/delete/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      Places.findByIdAndRemove(req.params.id)
        .then(() => {
          Drinks.findByIdAndRemove(req.params.id)
            .then(() => res.redirect("/home"))
        })
    })
})
module.exports = router;
