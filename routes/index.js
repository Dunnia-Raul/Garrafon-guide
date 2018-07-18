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
        res.render("home", { places, placesAux: JSON.stringify(places) })
      });
    };

  })
});

router.get("/bars/add", (req, res, next) => {
  res.render("add");
})

router.post("/bars/add", (req, res, next) => {
  const { name, zone, city, comments, capacity } = req.body;
  const location = {
    type = 'Point',
    coordinates: [Number(req.body.lat), Number(req.body.lng)]
  }
  Place.findOne({
    name
  })
    .then(place => {
      if (place !== null) {
        throw new Error("name Already exists");
      }
      const newPlace = new Places({ name, zone, city, comments, capacity, location })
      return newPlace.save()
    })
    .then(place => {
      console.log("añade")
      res.redirect('/home')
    })
    .catch(err => {
      console.log(err);
      Place.find().then(places => {
        res.render("home", { places: JSON.stringify(places) });

      })
    })
  })
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