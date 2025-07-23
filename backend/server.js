import express from "express"; // => Change type to module in package.json
// const express = require("express"); => Change type to commonjs in package.json 

const app = express();

app.get("/api/notes" , (req , res) =>{
    // Send the notes
    res.statusCode(200).end("You got 5 notes");
});

app.post("/api/notes" , (req , res) =>{
    // Send the notes
    res.statusCode(201).end("Your notes have been created successfully");//201 => New resource created
});
    
app.listen(5001 , () => {
    console.log("Server is running on port 5001");
})

