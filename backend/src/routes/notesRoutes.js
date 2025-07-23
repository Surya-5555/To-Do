import express from 'express';
import { getAllNotes , createNote , deleteNote , updateNote } from '../controllers/notesController.js';


const router = express.Router();


// Define the routes for notes

// router.get("/" , (req , res) =>{
//     // Send the notes
//     res.status(200).send("You just fetched the notes");
// });
router.get("/" , getAllNotes);


// router.post("/" , (req , res) =>{
//     // Create a note
//     res.status(201).json({ message: "Note created successfully" });//201 => New resource created
// });
router.post("/" , createNote);

// router.put("/:id" , (req , res) =>{ // id to go into database
//     // Create a note
//     res.status(200).json({ message: "Note updated successfully" });//201 => New resource created
// }); 
router.put("/id" , updateNote);

// router.delete("/:id" , (req , res) =>{ // id to go into database
//     // Create a note
//     res.status(200).json({ message: "Note deleted successfully" });//201 => New resource created
// });
router.delete("/:id" , deleteNote);


export default router;

