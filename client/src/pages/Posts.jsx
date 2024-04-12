import { useEffect, useState } from "react";
import axios from 'axios';
import Card from "../components/Card";
import {Link} from 'react-router-dom'


const Posts = () => {
  const [list, setList] = useState([])
  const [newData, setNewData] = useState({
    postAuthor: "",
    postText: "",
    createdAt: ""
  })
  const [refresh, setRefresh] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3001/').then((res) => {
      setList(res.data)
      console.log(list);
    })
  }, [refresh])

  return (
    <div className="bg-white h-screen px-4 lg:px-8">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="text-center h-fit py-4 lg:py-8">
          <Link to="/newpost" className="inline-block bg-accent text-white rounded-3xl px-3 py-1 lg:px-5 lg:py-2 font-bold text-base lg:text-2xl">Create A Post</Link>
        </div>
        <div className="grid lg:grid-cols-4 gap-5 mb-4">
          {list.map((post) => {
            return(
              <Card data={post} key={post.id}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Posts