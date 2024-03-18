import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [list, setList] = useState([])
  const [newData, setNewData] = useState({
    postAuthor: "",
    postText: ""
  })
  const [refresh, setRefresh] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3001/').then((res) => {
      console.log(res.data);
      setList(res.data)
      const date = new Date()
      const dateFormat = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`
      console.log(dateFormat);
    })
  }, [refresh])

  const handleChange = (e) => {
    setNewData({...newData, [e.target.name]: e.target.value})
  }

  const handlePost = () => {
    const date = new Date()
    const dateFormat = `${date.getFullYear()}-0${date.getMonth() < 12 ? date.getMonth() + 1 : 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    console.log(dateFormat);
    axios.post('http://localhost:3001/post', {
      postAuthor: newData.postAuthor,
      postText: newData.postText
    }).then((res) => {
      console.log(res)
      console.log("Data Inserted");
      setNewData({postAuthor: "", postText: ""})
      setRefresh(prev => !prev)
    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <div>
      <div className="m-8">
        <input type="text" placeholder="Name" name="postAuthor" className="border-2 border-red-300" value={newData.postAuthor} onChange={handleChange}/>
        <input type="text" placeholder="Post" name="postText" className="border-2 border-red-300" value={newData.postText} onChange={handleChange}/>
        <button className="p-2 bg-blue-300 active:bg-blue-200" onClick={handlePost}>Insert</button>
      </div>
      {list.map((item) => {
        return (
          <div key={item.id} className="p-4 bg-green-500 mb-2">
            <h1 className="text-2xl">{item.postText}</h1>
            <h3 className="font-bold"> - {item.postAuthor}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default App
