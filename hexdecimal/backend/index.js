const express = require("express")
const cors = require("cors");
const port = 4000 ;

const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send('this is home page') ;
})



app.get('/api/show',async(req,res)=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json() ;
    console.log(result);
    res.send(result)
})

app.listen(port,()=>{
    console.log("server is listening at port",{port});
})