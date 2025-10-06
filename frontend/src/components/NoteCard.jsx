import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios.js"
import toast from "react-hot-toast"


export const NoteCard = ({ note , setNotes }) => { // Sent from home page

  const handleDelete = async (e , id) => {
    e.preventDefault();// it will prevent the default "link" navigating behaviour of the button

    if(!window.confirm("Are you sure you want to delete this note ?"))return;
    try {
      await api.delete(`/notes/${id}`)
      setNotes((prev) => prev.filter((note) => note._id !== id))
      toast.success("Note deleted successfully")
    } catch (error) {
      console.log("Error in handle delete" , error)
      toast.error("Failed to delete the note")
    }
  }

  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]"
    >
      <div className="card-body">

        
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>


        <div className="card-actions justify-between items-center mt-4">

          <span className="text-sm text-base-content/60">{formatDate(new Date(note.createdAt))}</span>

          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button className="btn btn-ghost btn-xs text-error" onClick={(e) => handleDelete(e , note._id)}>
              <Trash2Icon className="size-4" />
            </button>
          </div>

        </div>


      </div>
    </Link>
  );
};
