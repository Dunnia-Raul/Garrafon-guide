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
        photo: "https://www.google.es/imgres?imgurl=https%3A%2F%2Fwww.wineconnection.com.sg%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F5%2Fthumbnail%2F530x650%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2F6%2Fa62_11.png&imgrefurl=https%3A%2F%2Fwww.wineconnection.com.sg%2Fabsolute-vodka.html&docid=lSWw-ozjlBo8JM&tbnid=ZO_jgwQhauXoqM%3A&vet=10ahUKEwimxcCsxKjcAhVDZlAKHc27AdcQMwg0KAAwAA..i&w=530&h=650&bih=762&biw=741&q=absolute&ved=0ahUKEwimxcCsxKjcAhVDZlAKHc27AdcQMwg0KAAwAA&iact=mrc&uact=8"
    },
    {
        mark: "Ballantines",
        type: "Whisky",
        photo: "https://www.google.es/imgres?imgurl=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fballantines.com%2Fprod%2FProduct%2F898%2Fthumbnail%2F2%2Fthumbnail_180x350.png&imgrefurl=https%3A%2F%2Fwww.ballantines.com%2Fes-es&docid=CuJtNYIfZ0-DhM&tbnid=u236xJ9hZ0S4jM%3A&vet=10ahUKEwiD-NjAxKjcAhXLbVAKHVRjA8kQMwh2KAAwAA..i&w=179&h=350&bih=762&biw=741&q=ballantines&ved=0ahUKEwiD-NjAxKjcAhXLbVAKHVRjA8kQMwh2KAAwAA&iact=mrc&uact=8"
    },
    {
        mark: "Brugal",
        type: "Ron",
        photo: "https://www.google.es/imgres?imgurl=https%3A%2F%2Fwww.comprajamon.es%2FWebRoot%2FStoreLES%2FShops%2F63219311%2F520B%2FC99B%2F01CE%2FD8A3%2F0016%2FC0A8%2F2935%2F3DBE%2FRon_Brugal_nueva_botella_ml.png&imgrefurl=https%3A%2F%2Fwww.comprajamon.es%2FRon-Brugal&docid=EFeCjuwCJZ1aRM&tbnid=cK57CQAsnxmVkM%3A&vet=10ahUKEwjiyP3FxajcAhUJKlAKHc86AdcQMwi8ASgBMAE..i&w=450&h=600&bih=762&biw=741&q=ron%20brugal&ved=0ahUKEwjiyP3FxajcAhUJKlAKHc86AdcQMwi8ASgBMAE&iact=mrc&uact=8"
    },
    {
        mark: "Puerto de Indias",
        type: "Gin",
        photo: "https://www.google.es/imgres?imgurl=http%3A%2F%2Fginpuertodeindias.com%2Fwp-content%2Fuploads%2F2017%2F07%2Fpuerto_de_indias_clasic_azul.png&imgrefurl=http%3A%2F%2Fginpuertodeindias.com%2Fproducto%2Fgin-puerto-de-indias-classic-botella-070-l%2F&docid=oMGJZNx58d8FAM&tbnid=OeNjtm8p6LrcxM%3A&vet=10ahUKEwjylLXuxajcAhUBIlAKHdxBB8gQMwiIASgAMAA..i&w=399&h=399&bih=762&biw=741&q=gin%20puerto%20de%20indias&ved=0ahUKEwjylLXuxajcAhUBIlAKHdxBB8gQMwiIASgAMAA&iact=mrc&uact=8"
    },
    {
        mark: "Bulldog",
        type: "Gin",
        photo:"https://www.google.es/imgres?imgurl=https%3A%2F%2Fd256619kyxncpv.cloudfront.net%2Fgui%2Fimg%2F2015%2F09%2F16%2F10%2F2015091610_bulldog_gin_original.png&imgrefurl=https%3A%2F%2Fflaviar.com%2Fbulldog%2Fbulldog-gin&docid=BuZNNLVA0q4tPM&tbnid=mL05Nikf3TtUrM%3A&vet=10ahUKEwjLhcOKxqjcAhXFUlAKHSsfCdkQMwiUASgQMBA..i&w=300&h=600&bih=762&biw=741&q=gin&ved=0ahUKEwjLhcOKxqjcAhXFUlAKHSsfCdkQMwiUASgQMBA&iact=mrc&uact=8"
    },
    {
        mark: "Smirnoff",
        type: "Vodka",
        photo: "https://www.google.es/imgres?imgurl=https%3A%2F%2Fd256619kyxncpv.cloudfront.net%2Fgui%2Fimg%2F2017%2F11%2F02%2F9%2F201711029_smirnoff_red_original.png&imgrefurl=https%3A%2F%2Fflaviar.com%2Fvodka&docid=qu6zFWpYOFZK9M&tbnid=QvWh45LGM-5DPM%3A&vet=10ahUKEwi0luysxqjcAhUcwAIHHeehC-cQMwivASgBMAE..i&w=300&h=600&bih=762&biw=741&q=vodka&ved=0ahUKEwi0luysxqjcAhUcwAIHHeehC-cQMwivASgBMAE&iact=mrc&uact=8"
    }

])


    .then(() => {
        console.log("seed created")
        //mongoose.disconnect();
    })
