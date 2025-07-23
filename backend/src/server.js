import express from "express"; // => Change type to module in package.json
// const express = require("express"); => Change type to commonjs in package.json 
import notesRoutes from "./routes/notesRoutes.js"; // Import the notes routes

const app = express();

app.use("/api/notes" , notesRoutes); // Use the notes routes

// Like the below we can create multiple routes for different functionalities - 3 Different files(Handle different functionalities)
// app.use("/api/product" , productRoutes);
// app.use("/api/posts" , postsRoutes);
// app.use("/api/payments" , paymentsRoutes);
// app.use("/api/emails" , emailsRoutes);

// Route
// app.get("/api/notes" , (req , res) =>{
//     // Send the notes
//     res.status(200).send("You got 20 notes");
// });
// // Route

// app.post("/api/notes" , (req , res) =>{
//     // Create a note
//     res.status(201).json({ message: "Note created successfully" });//201 => New resource created
// });

// app.put("/api/notes/:id" , (req , res) =>{ // id to go into database
//     // Create a note
//     res.status(200).json({ message: "Note updated successfully" });//201 => New resource created
// });    

// app.delete("/api/notes/:id" , (req , res) =>{ // id to go into database
//     // Create a note
//     res.status(200).json({ message: "Note deleted successfully" });//201 => New resource created
// });   

// https:/localhost:5001/api/notes/555 - Endpoint for the routes

app.listen(5001 , () => {
    console.log("Server is running on port 5001");
})