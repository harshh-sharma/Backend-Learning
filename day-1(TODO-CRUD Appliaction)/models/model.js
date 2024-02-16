import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title:String,
    desc:String,
    done:Boolean
});

export const Todo = mongoose.model('Todo',TodoSchema);
