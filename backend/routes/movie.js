const { query, response } = require("express");
const express = require("express");
const { request } = require("http");
const router = express.Router();
const utils = require("../utils");
const db=require('../db');

//GET  --> Display Movie using name from Containerized MySQL
router.get('/all',(req,res)=>{
    // const{name , email,password , reEnterPassword}=req.body;
    const statement=`select * from movie `;
    // insert into register (name , email,password,reenterpassword)  values(? ? ? ?);
    db.Pool.query(statement,(err,data)=>{
        res.send(utils.createResult(err,data));
    })
    
})



router.post('/add',(req,res)=>{
     const{movie_title ,movie_release_date ,movie_time ,director_name}=req.body;
    const statement=`insert into movie(movie_title, movie_release_date, movie_time, director_name) values (?,?,?,?) ; `;
    // insert into register (name , email,password,reenterpassword)  values(? ? ? ?);   movie_title | movie_release_date | movie_time | director_name
    db.Pool.query(statement,[movie_title ,movie_release_date ,movie_time ,director_name],(err,data)=>{
        res.send(utils.createResult(err,data));
    })
    
})

router.put('/edit/:movie_title',(req,res)=>{
    const{movie_title}=req.params;
    const{movie_release_date ,movie_time ,director_name}=req.body;
   const statement= `
   UPDATE movie  SET movie_release_date = ?,  movie_time = ?, director_name = ? WHERE movie_title = ? ;`;
   // insert into register (name , email,password,reenterpassword)  values(? ? ? ?);   movie_title | movie_release_date | movie_time | director_name
   db.Pool.query(statement,[movie_release_date ,movie_time ,director_name,movie_title],(err,data)=>{
       res.send(utils.createResult(err,data));
   })
   
})

router.delete('/delete/:movie_title',(req,res)=>{
    const{movie_title}=req.params;
   const statement= `
   DELETE from movie WHERE movie_title = ? ;`
   db.Pool.query(statement,[movie_title],(err,data)=>{
       res.send(utils.createResult(err,data));
   })
   
})

module.exports = router;