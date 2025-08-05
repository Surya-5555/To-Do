import Note from "../models/Note.js"; 




// export const getAllNotes = (req , res) =>{
//     // Send the notes
//     res.status(200).send("You just fetched the notes");
// };

// Below is same with normal function

// export function getAllNotes(req , res){
//     // Send the notes
//     res.status(200).send("You just fetched the notes");
// };
export async function getAllNotes(req , res){
    // Send the notes
    try {
        const notes = await Note.find().sort({createdAt : -1}); // get all notes and to get seperate use --> {} inside find
        // sort by createdAt which displays newest first
        res.status(200).json(notes); 
    } catch (error) {
        console.error("Error in getAllNotes controller" , error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export async function getNoteById(req , res) {
    // Get a note by ID
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getNoteById controller" , error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export async function createNote(req , res) {
    // Create a note
    try {
        const {title , content} = req.body;
        console.log(title , content); // default it is undefined so modify in server.js(middleware)

        const note = new Note({title , content})
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNote controller" , error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}




export async function updateNote(req , res) {
    // Update a note
    try {
        const {title , content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title, content},{new:true});
        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error in update note controller" , error);
        res.status(500).json({message:"internal server error"});
    }
};




export async function deleteNote(req , res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        console.error("Error in delete note controller" , error);
        res.status(500).json({message:"internal server error"});
    }
};

