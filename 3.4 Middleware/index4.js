import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express();
const port = 3000;
let response = "";

app.use(express.urlencoded({extended:true}));

function bandgenerator(req,res,next){
console.log("req method:" , req.method);
console.log("req url :" , req.url)
 response = req.body["street"] + " " + req.body["pet"];
next();
}

app.use(bandgenerator)



 app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/public/index.html')
 })


 app.post('/submit' , (req,res)=>{
  res.send(`<h1> the name of the band is ${response}</h1>`)
 })


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
