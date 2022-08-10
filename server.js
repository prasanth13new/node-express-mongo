console.log('Server-side code running');

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import MOMENT from "moment";

const app = express();
dotenv.config();

app.use(express.static('public'));

//time 
const date_ob = new Date();
const hours = date_ob.getHours();
const minutes = date_ob.getMinutes();
const seconds = date_ob.getSeconds();
export var date1 = hours + ":" + minutes + ":" + seconds;


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Mongodb!!..")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongodb disconnected");
})

app.listen(8080, () => {
    connect()
    console.log('listening on 8080');
    console.log(date1 = { startTime: date1 })
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/clicked', (req, res) => {

    const date_ob = new Date();
    const hours = date_ob.getHours();
    const minutes = date_ob.getMinutes();
    const seconds = date_ob.getSeconds();
    var date2 = hours + ":" + minutes + ":" + seconds;

    const click = { clickTime: date2 };
    console.log(click);
});
