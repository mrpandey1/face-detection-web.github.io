const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const cors=require('cors');
const bcrypt=require('bcrypt-nodejs');
const knex=require('knex');
const register=require('./controllers/register')
const login=require('./controllers/signin');
const profile=require('./controllers/profile');
const image = require('./controllers/image');

const db=knex({
    client:'pg',
    connection:{
        host:'127.0.0.1',
        user:'postgres',
        password:'postgres',
        database:'smart-brain-project'
    }
});


app.use(bodyParser.json());
app.use(cors())


app.get('/',(req,res)=>{res.send(database.users)})
app.post('/signin',(req,res)=>{login.handleSignin(req,res,db,bcrypt)})
app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bcrypt)})
app.get('/profile/:id',(req,res)=>{profile.handleProfile(req,res,db)})
app.put('/image',(req,res)=>{image.handleImageCount(req,res,db)})
app.post('/imageurl',(req,res)=>{image.handleApiCall(req,res)})



app.listen(3000,()=>{
    console.log('app is running on port 3000');
})