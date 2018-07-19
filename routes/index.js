const express = require('express');
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const User = require('../models/User');
const { sendMail } = require('../mailing/sendMail');
const Drinks = require('../models/Drinks');
const Places = require('../models/Places');
const Comments = require('../models/Comments');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index');
});

//Login
router.get("/home", ensureLoggedIn("/auth/login"), (req, res) => {
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

//Add Bars
router.post("/bars/add", (req, res, next) => {
  const { name, zone, city, comments, capacity } = req.body;
  let location = {
    type : 'Point',
    coordinates: [Number(req.body.lat), Number(req.body.lng)]
  }
  const newPlace = new Places({ name, zone, city, comments, capacity, location })
  newPlace.save()
    .then(place => {
      res.redirect('/home')
    })
    .catch(err => {
      res.render("home", { errorMessage: err.message });

    })
  
})

// Delete only for user
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


/*****details Bar****/
router.get('/bars/:id', (req, res, next) => {
	Places.findById(req.params.id)
		.then((place) => {
			Comments.find({ place: req.params.id }).populate('garrafon').populate('creator').then((comments) => {
				const data = {
					place,
					comments
				};
				console.log(data.comments);
				res.render('detailsBar', data );
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

// router.get("/bars/:id", (req, res, next) => {
//   Place.findById(req.params.id)
//   .then(places => {
//     res.render("detailsBar", {
//       places: JSON.stringify(places)
//     });
//   })
//   .catch(err => {
//     next(err);
//   })
// });

//New comment
router.get('/comments/:id/newComment', (req, res, next) => {
	Places.findById(req.params.id).then((place) => {
    console.log(place)
		Drinks.find().then((drinks) => {
			const data = {
				drinks,
				place
			};

			res.render('newComment', data);
		});
	});
});

//New comment
router.post('/comments/:id/newComment', (req, res, next) => {
  console.log('req.user')
  console.log(req.user)
  console.log('req.body.garrafon')
  console.log(req.body.garrafon)
  const data = {
		comments: req.body.content,
    garrafon: req.body.garrafon,
    place: req.params.id,
    creator: req.user._id
	};
	new Comments(data).save().then(() => {
		res.redirect(`/bars/${req.params.id}`);
	});
});

module.exports = router;
