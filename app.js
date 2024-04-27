const express = require('express');
const app = express();
const path = require('path')
const userModel = require('./models/user');


console.log(chalk.blue('Hello world!'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req,res)=>{
    res.send('buddy')
})
app.get('/create', async (req,res)=>{
    const user = await userModel.create({
        username: "ayush123",
        name: "ayush",
        age: "21",
        email: "a@mail"

    })
    res.send(user)
})
app.get('/update', async (req,res)=>{
    // userModel.findOneAndUpdate(findOne,update,{new:true})
    const updateUser = await userModel.findOneAndUpdate({username:"ayush123"},{name:"ayush bharne"}, {new:true})
    res.send(updateUser)
})
app.get('/read', async (req,res)=>{
    // const readUser = await userModel.find();
    const readUser = await userModel.findOne({username:"ayush123"});
    console.log("als")
    res.send(readUser)
})
app.get('/delete', async (req,res)=>{

    const deleteUser = await userModel.findOneAndDelete({username:"ayush123"});
    res.send(deleteUser)
})

// mogoose
// database -> collection -> document -> fields
//module.exports = created database
//userModel      = collection
//userdata in route = doucumet
//username,id,email,etc = fields

app.listen(3000);