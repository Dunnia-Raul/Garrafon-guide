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
//console.log("entra");
//Places.collection.drop();
//Drinks.collection.drop();

User.create([
    {
        username: "Kike",
        email: "Pesadico@gmail.com",
        password: bcrypt.hashSync("1234", salt),
        date: new Date("1989-06-04"),
        typeDrink: "Ron",
        city: "Zamora"
    },
    {
        username: "Diego",
        email: "Barbas@gmail.com",
        password: bcrypt.hashSync("1234", salt),
        date: new Date("1990-03-01"),
        typeDrink: "Whisky",
        city: "Zaragoza"
    },
    {
        username: "Dunnia",
        email: "Dunnia@gmail.com",
        password: bcrypt.hashSync("1111", salt),
        date: new Date("2001-07-09"),
        typeDrink: "Ron",
        city: "Zamora",
        role: "admin"
    }
])

Places.create([
    {
        name: "New Garamond",
        zone: "Chamberi",
        city: "Madrid",
        capacity: "big"
        
    },
    {
        name: "Via Lactea",
        zone: "Nuevos Ministerios",
        city: "Barcelona",
        capacity: "small"
    }
])



    .then(() => {
        console.log("seed created")
        //mongoose.disconnect();
    })
