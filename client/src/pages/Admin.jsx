import { useEffect, useState } from "react";
import axios from 'axios';
import Card from "../components/Card";

const Admin = () => {
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
    <div className='bg-white h-screen px-4 lg:px-8'>
      <div className='w-full max-w-[1240px] mx-auto'>
        <div className="grid lg:grid-cols-4 gap-5 mb-4 mt-4">
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

export default Admin