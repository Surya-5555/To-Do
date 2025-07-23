import express from "express"; // => Change type to module in package.json
// const express = require("express"); => Change type to commonjs in package.json 

const app = express();

// Route
app.get("/api/notes" , (req , res) =>{
    // Send the notes
    res.status(200).send("You got 20 notes");
});
// Route

app.post("/api/notes" , (req , res) =>{
    // Create a note
    res.status(201).json({ message: "Note created successfully" });//201 => New resource created
});

app.put("/api/notes/:id" , (req , res) =>{ // id to go into database
    // Create a note
    res.status(200).json({ message: "Note updated successfully" });//201 => New resource created
});    

app.delete("/api/notes/:id" , (req , res) =>{ // id to go into database
    // Create a note
    res.status(200).json({ message: "Note deleted successfully" });//201 => New resource created
});   

// https:/localhost:5001/api/notes/555 - Endpoint for the routes

app.listen(5001 , () => {
    console.log("Server is running on port 5001");
})