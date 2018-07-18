require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");
const Places = require("../models/Places");
const Drinks = require("../models/Drinks");

const dbURL = process.env.DBURL;

mongoose.connect(dbURL).then(() =>
    console.log(`Connected to db: ${dbURL}`));

    
Drinks.create([
    {
        mark: "Absolute",
        type: "Vodka",
        photo: "http://adiscountliquor.com/wp-content/uploads/2017/09/Absolute-3.png"
    },
    {
        mark: "Ballantines",
        type: "Whisky",
        photo: "https://images-na.ssl-images-amazon.com/images/I/71o0N-YUWsL._SL1500_.jpg"
    },
    {
        mark: "Brugal",
        type: "Ron",
        photo: "http://www.bodecall.com/images/stories/virtuemart/product/brugal-anejo-70-cl.png"
    },
    {
        mark: "Puerto de Indias",
        type: "Gin",
        photo: "http://ginpuertodeindias.com/wp-content/uploads/2017/07/puerto_de_indias_clasic_azul.png"
    },
    {
        mark: "Bulldog",
        type: "Gin",
        photo:"https://www.totalwine.com/media/sys_master/twmmedia/h53/hc0/8806135693342.png"
    },
    {
        mark: "Smirnoff",
        type: "Vodka",
        photo: "https://media.danmurphys.com.au/dmo/product/19252-1.png?impolicy=PROD_MD"
    }

])


    .then(() => {
        console.log("seed created")
        //mongoose.disconnect();
    })
