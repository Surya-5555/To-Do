import express from "express"; // => Change type to module in package.json
// const express = require("express"); => Change type to commonjs in package.json 
import notesRoutes from "./routes/notesRoutes.js"; // Import the notes routes
import {connectDB} from "./config/db.js"; // MONGO DB Connection
import dotenv from "dotenv"; 
import rateLimiter from "./middleware/reteLimiter.js";
dotenv.config();


const app = express();
const PORT  = process.env.PORT || 5001; 

// connectDB(); // Connect to MongoDB


//middleware
app.use(express.json());
app.use(rateLimiter);// call our middleware

// app.use((req , res , next) => {
//     console.log(`${req.method} request for ${req.url}`);
//     next();
// })  //  GET request for /api/notes ==> In terminal

app.use("/api/notes" , notesRoutes); // Use the notes routes


connectDB().then(() => {
    app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})
})


