import express from "express";
const app = express();
const port = 3000;

app.get('/' , (req,res) => {
    res.send('hello')
})

app.get('/about', (req,res)=>{
    res.send('hello this is a about page')
})

app.get('/contact', (req,res)=>{
    res.send('hello this is the contact page')
})

app.listen(port , () =>{
  console.log(`server is running at port 3000 ${port}`)
});