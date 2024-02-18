import express from 'express';
const app = express();
import {name,salary,city} from './dummy.js'
import mongoose from 'mongoose';
import { Dummy } from './models/model.js';
const PORT = 5500;

const conn = mongoose.connect("mongodb://127.0.0.1:27017/dummy");

if(conn){
    console.log('DB successfully connected');
}

const randomNumber = () =>  Math.floor(Math.random() * 3);
console.log(randomNumber());

app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('index',{foo:'FOO'})
    // const dummy = new Dummy({name:name[randomNumber()],salary:salary[randomNumber()],city:city[randomNumber()]});
    // dummy.save();
    // res.end('Hello')
})

app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`);
})