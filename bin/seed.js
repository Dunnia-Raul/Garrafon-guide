require("dotenv").config();

const mongoose = require("mongoose");
const User = require("../models/User");
const Places = require("../models/Places");
const Drinks = require("../models/Drinks");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const salt = bcrypt.genSaltSync(bcryptSalt);

const dbURL = process.env.DBURL;

mongoose.connect(dbURL).then(() =>
    console.log(`Connected to db: ${dbURL}`));

//User.collection.drop();
console.log("entra");
//Places.collection.drop();
//Drinks.collection.drop();

User.collection.drop();

User.create([
    {
        username: "Kike",
        email: "Pesadico@gmail.com",
        password: bcrypt.hashSync("1234", salt),
        date: new Date,
        typeDrink: "ron",
        city: "Zamora",
    },
    {
        username: "Diego",
        email: "Barbas@gmail.com",
        password: bcrypt.hashSync("1234", salt),
        date: new Date,
        typeDrink: "whisky",
        city: "Zaragoza"
    },
    {
        username: "Dunnia",
        email: "Dunnia@gmail.com",
        password: bcrypt.hashSync("1111", salt),
        date: new Date,
        typeDrink: "Ron",
        city: "Zamora",
        role: "admin"
    }
])

Places.collection.drop();

Places.create([
    {
        name: "New Garamond",
        zone: "Chamberí",
        city: "Madrid",
        capacity: "big",
        location:{
            type: "Point",
            coordinates:[40.4244242,-3.6783751]
        }
    },
    {
        name: "Vía Lactea",
        zone: "Nuevos Ministerios",
        city: "Barcelona",
        capacity: "small",
        location:{
            type: "Point",
            coordinates:[40.4231555,-3.6870985]
        }
    }
])

Drinks.collection.drop();

Drinks.create([
    {
        mark: "Absolut",
        type: "Vodka",
        graduation: "20%"
    },
    {
        mark: "Habana",
        type: "Ron",
        graduation: "18%"
    }
])


    .then(() => {
        console.log("seed created")
        //mongoose.disconnect();
    })
