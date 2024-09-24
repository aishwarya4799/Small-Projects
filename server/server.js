const express = require('express')
const mysql = require('mysql2')
const cors=require('cors')
const app=express()
app.use(cors())

require('dotenv').config()
const port=process.env.port || 5000
app.use(express.json())
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'W7301@jqir#',
    database:'db1'
})
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    
});

app.listen(port,()=>{
    console.log(`running on port ${port}`)
})

app.get('/',(req,res)=>{
    db.query(`SELECT * FROM candidate `,(err,result)=>{

        if(err) return res.status(400).json({message:"Failed to get data"})
           res.status(200).json(result)
          
    })
})


app.get('/:id',(req,res)=>{
    const {id} = req.params
    db.query(`SELECT * FROM candidate WHERE id=${id} `,(err,result)=>{

        if(err) return res.status(400).json({message:"Failed to get data"})
           res.status(200).json(result)
          
    })
})

app.post('/insert',(req,res)=>{
    const {name,age,position} = req.body
    
  
    db.query(`INSERT INTO candidate (name,age,position) VALUES ('${name}','${age}','${position}')`,(err,result)=>{
        if(err) return res.status(400).json({message:"can't insert into data"})
            res.status(200).json({message:"data inserted successfully"})
    })
    
})
app.put('/update/:id',(req,res)=>{
    const {id} = req.params
    const {name,age,position} = req.body
    db.query(`UPDATE candidate SET name='${name}', age= '${age}', position='${position}' WHERE id = '${id}'`,(err,result)=>{
        if (err) return res.status(400).json({message:"can not update data"})
            res.status(200).json({message:"data updated"})
    })
    
})
app.delete('/delete/:id',(req,res)=>{
    const {id} =req.params
    db.query(`DELETE FROM candidate WHERE id = '${id}'`,(err,result)=>{
        if (err) return res.status(400).json({message:"can not delete data"})
            res.status(200).json({message:"data deleted successfully"})
    })
})
