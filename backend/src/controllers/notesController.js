// export const getAllNotes = (req , res) =>{
//     // Send the notes
//     res.status(200).send("You just fetched the notes");
// };

// Below is same with normal function

export function getAllNotes(req , res){
    // Send the notes
    res.status(200).send("You just fetched the notes");
};


export function createNote(req , res) {
    // Create a note
    res.status(201).json({ message: "Note created successfully" });//201 => New resource created
}


export function updateNote(req , res) {
    // Update a note
    res.status(200).json({ message: "Note updated successfully" });//201 => New resource created
};


export function deleteNote(req , res) {
    // Delete a note
    res.status(200).json({ message: "Note deleted successfully" });//201 => New resource created
};

