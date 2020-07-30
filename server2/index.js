const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.json())

const database = {
    users:[
        {
            id:'123',
            name:'John',
            email:'john@gmail.com',
            password:'cookies',
            entries:0,
            date:new Date()
        },
        {
            id:'124',
            name:'Nishant',
            email:'nishant@gmail.com',
            password:'password',
            entries:0,
            date:new Date()
        }
    ]
}


app.get('/',(req,res)=>{
    res.send(database.users)
})

app.post('/signin',(req,res)=>{
    if (req.body.email===database.users[0].email && req.body.password===database.users[0].password)
    {
        res.json('success');
    }else{
        res.status(400).json('error loging in');
    }
});

app.post('/register',(req,res)=>{
    const {email,name,password}=req.body;
    database.users.push({
        id:'124',
        name:name,
        email:email,
        password:password,
        entries:0,
        date=new Date()
    })
    res.json(database.users[database.users.length-1]);
});
app.listen(3000);