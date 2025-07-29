import express from "express"; // => Change type to module in package.json
// const express = require("express"); => Change type to commonjs in package.json 
import notesRoutes from "./routes/notesRoutes.js"; // Import the notes routes
import {connectDB} from "./config/db.js"; // MONGO DB Connection

const app = express();

connectDB(); // Connect to MongoDB

app.use("/api/notes" , notesRoutes); // Use the notes routes



app.listen(5001 , () => {
    console.log("Server is running on port 5001");
})






