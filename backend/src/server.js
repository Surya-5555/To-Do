import express from "express"; // => Change type to module in package.json
import cors from "cors";
import dotenv from "dotenv"; 
// const express = require("express"); => Change type to commonjs in package.json

import notesRoutes from "./routes/notesRoutes.js"; // Import the notes routes

import {connectDB} from "./config/db.js"; // MONGO DB Connection
import rateLimiter from "./middleware/reteLimiter.js"; // Rate Limiting

//For production
import path from "path"

dotenv.config();


const app = express();
const PORT  = process.env.PORT || 5001; 

const __dirname = path.resolve()

// connectDB(); // Connect to MongoDB


//middleware
if(process.env.NODE_ENV !== "production"){
    app.use(cors
    ({
    origin:"http://localhost:5173",
    })
);
}

// app.use() --> To add middleware
app.use(express.json()); // Without express.json(), Express cannot understand JSON in req.body
app.use(rateLimiter);// call our middleware


// app.use((req , res , next) => {
//     console.log(`${req.method} request for ${req.url}`);
//     next();
// })  //  GET request for /api/notes ==> In terminal

app.use("/api/notes" , notesRoutes); // Use the notes routes

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname , "../frontend/dist"))) // Put a path for frontend dist folder
    app.get("*" , (req , res) => {
        res.sendFile(path.join(__dirname , "../frontend" , "dist" , "index.html")) // Any other request except our notes
    })
}

connectDB().then(() => {
    app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})
})

