import mongoose from "mongoose";

const DummySchema = new mongoose.Schema({
    name:String,
    salary:Number,
    city:String
})

export const Dummy = mongoose.model('Dummy',DummySchema);