import express from 'express';
import mongoose from 'mongoose';
import { Todo } from './models/model.js';
const app = express();
const PORT = 5000;

const conn = await mongoose.connect("mongodb://127.0.0.1:27017/todo");
if(conn){
    console.log('db connected successfully');
}

app.use(express.json());

app.post('/createTodo',(req,res) => {
   const {title,desc} = req.body;
   if(!title || !desc){
        return res.status(401).json({
            success:false,
            message:"All field must be required"
        })
   }
   if(typeof(title) != 'string' || typeof(desc) != 'string'){
    return(res.status(401).json({
        success:false,
        message:"Field must be string"
    }))
   }
   const todo = new Todo({title:title,desc:desc,done:false});
   todo.save();
   return res.status(200).json({
    success:true,
    data:todo
   })
})

app.get('/all',async(req,res) => {
    const data =  await Todo.find();
    res.status(200).json({
        success:true,
        data:data
    });
})

app.get('/search/:key',async(req,res) => {
    const id = req.params.key;
    const data = await Todo.findById(id);
    try{
        if(data){
        return res.status(200).json({
            success:true,
            data:data
        })
    }
    return res.status(401).json({
        success:false,
        data:data
    })
}catch(err){
    console.log("Err",err);
}
})

app.get('/delete/:id',async(req,res) => {
    const id = req.params.id;
    const data = await Todo.findByIdAndDelete(id);
    res.status(200).json({
        success:true,
        data:data
    })
  
})


app.listen(PORT,() => {
    console.log(`server successfully running on http://localhost:${PORT}`);
})

