const express = require("express");
const app = express();
const PORT = 3555;
app.use(express.json());

//checking on the server
app.get('/',(req,res)=>{

    res.json("Server Worked!")
})

// Get ArrayList 
app.get('/tasks',(req,res)=>{

    res.json(arrayList)
})

// Post on ArrayList 
app.post('/tasks/add',(req,res)=>{
let yourPost = req.body;
arrayList.push(yourPost);
res.json(arrayList);
    
})

// Delete specific tasks from ArrayList 
app.delete('/tasks/:id',(req,res)=>{
    const yourId = parseInt(req.params.id);

    arrayList.map(elem =>
        {
            if (elem.id===yourId) 
            {delete elem.task;}
        })     

            res.json(arrayList)
        
    })











app.listen(PORT,()=>console.log(`Listening to port: ${PORT}`));



const arrayList = [
{
    id:1,
    task:"Wake Up"
},
{
    id:2,
    task:"Drink Coffe"
},
{
    id:3,
    task:"Go to Orange Academy"
}

]