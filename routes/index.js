const express = require('express');
const router = express.Router();
const ensureLogin = require("connect-ensure-login")
const User = require("../models/User")
const { sendMail } = require('../mailing/sendMail');
const Drinks = require("../models/Drinks")
const Places = require("../models/Places")
const Comments = require("../models/Comments")

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
    } else {
      Places.find({}).then(places => {
      res.render("home",{places})
      });
    };

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


router.get("/bars/add",(req,res,next)=>{
  res.render("add");
})

router.post("/bars/add", (req, res,next)=>{
  const { name,zone,city,comments,capacity} =req.body;
  new Places ({name,zone,city,comments,capacity})
  .save()
  .then (place=>{
    console.log("añade")
    res.redirect('/home')
  });
});

/*****comment****/
/*router.post("/add/comments/:id", (req, res,next)=>{
  Places.findById(req.params.id)
  .then( place => {
    const newComment = {
      comments
    };
    Comments.comments.push(newComment);
  return place.save();
  });
});*/




module.exports = router;
