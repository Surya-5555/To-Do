import React from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from "../components/RateLimitedUI";
import {useState , useEffect} from "react";
import axios from "axios";
import toast from 'react-hot-toast';

const HomePage = () => {
  const [isRateLimited , setIsRateLimited] = useState(false);
  const [notes , setNotes] = useState([])
  const [loading , setLoading] = useState(true)

useEffect(() => {
  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/notes")
      console.log(res.data); // Trying to connect with backend but for security reasons it blocks and returns CORS error
      setNotes(res.data)
      setIsRateLimited(false)
    } catch (error) {
      console.log("Error fetching notes");
      if(error.response?.status === 429){
        setIsRateLimited(true);
      }else{
        toast.error("Failed to load notes")
      }
    }
    finally{
      setLoading(false);
    }
  }
  fetchNotes();
} , [])


  return (
    <div className='min-h-screen'>
      <Navbar/>
      {isRateLimited && <RateLimitedUI/>}
        
    </div>
  )
}

export default HomePage