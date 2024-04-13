import Posts from "./pages/Posts";
import Post from "./pages/Post";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NewPost from "./pages/NewPost";
import React, { useState, createContext } from "react";

export const SuccessContext = React.createContext();

function App() {
  const [display,setDisplay] = useState('hidden')
  return (
    <SuccessContext.Provider value={[display, setDisplay]}>
      <div>
        <div className={`absolute bg-white w-[350px] h-[200px] shadow-xl rounded-lg ${display} flex-col gap-y-2 items-center justify-center border-green-400 border-2 left-[50%] translate-x-[-50%] top-10`}>
          <h2 className="font-bold text-lg text-black/95">Your note is successfully posted!</h2>
        </div>
        <Header/>
        <Routes>
          <Route path="/" element={<Posts/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/newpost" element={<NewPost/>}/>
          <Route path="posts/:postId" element={<Post/>}/>
        </Routes>
      </div>
    </SuccessContext.Provider>
  )
}

export default App
