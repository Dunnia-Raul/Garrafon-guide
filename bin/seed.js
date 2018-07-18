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

User.create([
    {
        username: "Kike",
        email: "Pesadico@gmail.com",
        password: bcrypt.hashSync("1234", salt),
        date: new Date,
        typeDrink: "ron",
        city: "Zamora"
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

Places.create([
    {
        name: "New Garamond",
        zone: "Chamberí",
        city: "Madrid",
        capacity: "Big"
        
    },
    {
        name: "Vía Lactea",
        zone: "Nuevos Ministerios",
        city: "Barcelona",
        capacity: "Small"
    }
])



    .then(() => {
        console.log("seed created")
        //mongoose.disconnect();
    })
