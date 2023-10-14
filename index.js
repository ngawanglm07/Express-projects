import express from "express";
const app = express();
const port = 3000;


// get request
app.get('/' , (req,res) => {
    res.send('hello')
})

app.get('/about', (req,res)=>{
    res.send('hello this is a about page')
})

app.get('/contact', (req,res)=>{
    res.send('hello this is the contact page')
})

app.post('/register' , (req,res) =>{
 res.sendStatus(201);
})

app.put('/user/ngawang' , (req,res) =>{
    res.sendStatus(200);
})

app.patch('/user/ngawang' , (req,res)=>{
    res.sendStatus(200);
})

app.delete('/user/ngawang', (req,res)=>{
    res.sendStatus(200);
})





app.listen(port , () =>{
  console.log(`server is running at port 3000 ${port}`)
});