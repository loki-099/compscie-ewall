import Posts from "./pages/Posts";
import Post from "./pages/Post";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="posts/:postId" element={<Post/>}/>
      </Routes>
    </div>
  )
}

export default App
