import {Route , Routes} from "react-router";
import HomePage from './pages/HomePage.jsx'; 
import NoteDetailPage from './pages/NoteDetailPage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import { toast } from 'react-hot-toast';
const App = () => {
  return (
    <div>
      <button onClick = {() => toast.success("Congrats")} className = "text-red-500 p-4bg">Click Me</button>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
};

export default App;
// rafc