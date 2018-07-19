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

User.collection.drop();

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

Places.collection.drop();

Places.create([
    {
        name: "New Garamond",
        zone: "Chamberi",
        city: "Madrid",
        capacity: "big",
        location:{
            type: "Point",
            coordinates:[40.4620161,-3.6975777,15.71]
        }
    },
    {
        name: "Via Lactea",
        zone: "Nuevos Ministerios",
        city: "Madrid",
        capacity: "small",
        location:{
            type: "Point",
            coordinates:[40.42688,-3.7069845,14.94]
        }
    },

    {
        name: "Kapital",
        zone: "Barrio de las letras",
        city: "Madrid",
        capacity: "big",
        location:{
            type: "Point",
            coordinates:[40.4097802,-3.6953578,17]
        }
    },
    {
        name: "Café Berlín",
        zone: "Nuevos Ministerios",
        city: "Madrid",
        capacity: "small",
        location:{
            type: "Point",
            coordinates:[40.4195885,-3.7101317,17]
        }
    },
    {
        name: "Joy Eslava",
        zone: "sol",
        city: "Madrid",
        capacity: "small",
        location:{
            type: "Point",
            coordinates:[40.4171574,-3.7087509,17]
        }
    }
])



    .then(() => {
        console.log("seed created")
        //mongoose.disconnect();
    })
