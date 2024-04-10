import Posts from "./pages/Posts";
import Post from "./pages/Post";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NewPost from "./pages/NewPost";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/newpost" element={<NewPost/>}/>
        <Route path="posts/:postId" element={<Post/>}/>
      </Routes>
    </div>
  )
}

export default App
