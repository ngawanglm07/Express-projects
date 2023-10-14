//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
const app = express();
let port = 3000;

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({extended:true}));

let userAuthorized = false ;


function checkpassword(req,res,next){
let password = req.body["password"];
console.log(password)
if(password === 'iloveprogramming'){
 userAuthorized = true;
}
console.log(userAuthorized)
next();
}




app.use(checkpassword)


app.get('/' , (req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})


app.post('/check' , (req,res)=>{
 if(userAuthorized){
    res.sendFile(__dirname + "/public/secret.html");
 } else {
    res.sendFile(__dirname + "/public/index.html");
 }
})


app.listen( port , ()=> {
    console.log(`server is running at port ${port}`);
});


