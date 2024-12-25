import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import ScrollTopButton from './components/ScrollTopButton'
import Contact from "./pages/Contact";
import ocean from './assets/ocean.mp3'
import { useRef } from 'react';
import React, { useState, useEffect } from 'react'
import { soundoff, soundon } from './assets/icons'


const App = () => {
const audioRef = useRef(new Audio(ocean));
      audioRef.current.volume = 0.4;
      audioRef.current.loop = true;
      
      const [isplayingMusic, setIsPlayingMusic] = useState(false)
      
      useEffect(() => {
        if (isplayingMusic) {
          audioRef.current.play();
        }
    
        return () => {
          audioRef.current.pause();
        }
      },[isplayingMusic])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Home />} />
        <Route path="/home" element={<><Home /></>}/>
        <Route path="/projects" element={<Projects />} />
        <Route path='/contact' element={<Contact/>}/>
      </>
    )
  );
  
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <div className='fixed z-50 bottom-10 left-9'>
                <img
                src={!isplayingMusic? soundoff: soundon}
                alt="sound"
                className='w-10 h-10 cursor-pointer object-contain'
                onClick={()=> setIsPlayingMusic(!isplayingMusic)}
                />
      </div>
      <ScrollTopButton/>
    </>
  );
};

export default App;
