const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')
const authRoutes=require('./routes/auth');
const postsRoutes=require('./routes/post')
const app=express();
const bodyParser=require('body-parser')
//connect to DB
dotenv.config();
mongoose.connect(process.env.DB_CONNECT,()=>{
console.log('connected to DB');
})
//middleswares
app.use(bodyParser.json())
app.use('/api/user',authRoutes);
app.use('/api/post',postsRoutes)
app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello there')
})

app.listen(3000,(req,res)=>{
    console.log('server learning on port 3000')
})