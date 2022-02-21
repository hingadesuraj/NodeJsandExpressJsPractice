require('dotenv').config()

const express = require('express');
const path = require('path');
const hbs=require('hbs')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// database connection
require("./db/conn"); 
// Register is a models of schema
const Register = require("./models/register");
const app = express();

const port = process.env.PORT || 3000; 


//  these are the path
const static_path =path.join(__dirname,"../public"); 
const template_path =path.join(__dirname,"../templates/views");
const partials_path=  path.join(__dirname,"../templates/partials");

// console.log(static_path);

app.use(express.json())
app.use(express.urlencoded({extended:false}) )   
     
// set static pages
app.use(express.static(static_path));
// set view engine hbs
app.set("view engine","hbs"); 
// set views directory to templete folder 
app.set("views",template_path);
// register partials to use using hbs
hbs.registerPartials(partials_path);



// define end points
app.get("/",(req,res)=>{             
    res.render("index");    

}) 
app.get("/registration",(req,res)=>{
 
    res.render("register")
})
       
// create a new user in db
app.post("/registration", async(req,res)=>{
 try {
    //  console.log(req.body.fname);
    //  res.send(req.body.fname);

    const password = req.body.password;
    const cpassword = req.body.cpassword;
//  in form set name attribute is very important
    if(password === cpassword){
        const registerUser = new  Register({ 
            firstname:req.body.fname,
            lastname:req.body.lname,
            email:req.body.email,
            phonenumber:req.body.phone, 
            age:req.body.age,
            gender:req.body.gender,
            password:req.body.password,
            cpassword:req.body.cpassword
              
        })

        // generate token ----> code is avaiable on register.js page it is a middleware
        const token = await  registerUser.generateAuthToken();
        // console.log(token);

    // save data to the database
        const register = await registerUser.save();
        res.status(201).render("login");
        
         
        
    }else{
        res.send("password are not same bro/sis")
    }
    
 } catch (error) {     
     res.status(400).send(error); 
 }
   
})
 
  
// get data to verify login endpoint
app.get("/login",(req,res)=>{
    res.render("login")
})


//  check login details and redirect to home page

app.post("/login",async(req,res)=>{

    try {
        const email = req.body.email;
        const password = req.body.password;


        const userDataFromDataBase = await Register.findOne({email:email});

        // use compare method of bcryptjs
        // .compare is a bcryptjs method it takes two parameter first is user enter password and another is stored password in database to compare both are same or not 
        const isMatch = await  bcrypt.compare(password,userDataFromDataBase.password);


        // Register --> is a collection name
        // console.log(userDataFromDataBase);

        // generate token at the time of user login on page
        // and userDataFromDataBase is a instance of schema
        const token = await  userDataFromDataBase.generateAuthToken();
        // console.log( `this is a token generate at the time of login ::->${token}  ` );

        // if(userDataFromDataBase.password === password){
            
        if(isMatch){
            // user is match to db then user redirect to index page that means home page
            res.status(201).render("index");
        }else{
            res.status(401).send("Please check email or password");
        }



    } catch (error) {
        res.status(401).send("Something went wrong");
    }

})




// console.log(process.env.SECRAT_KEY);
 
app.listen(port,()=>{
    console.log(`server start on ${port}`);      
})                      