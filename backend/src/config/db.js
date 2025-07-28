import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://suryaravichandran5555:e5Qyn1kFGHX4jPNv@cluster0.s8zodnu.mongodb.net/notes_db?retryWrites=true&w=majority&appName=Cluster0cls");
        console.log("MongoDB connected");
    }catch(error){
        console.error("MongoDB connection failed:", error);
        process.exit(1)
    }
};


