import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [list, setList] = useState([])
  const [newData, setNewData] = useState({
    name: "",
    address: ""
  })
  const [refresh, setRefresh] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3001/').then((res) => {
      console.log(res.data);
      setList(res.data)
    })
  }, [refresh])

  const handleChange = (e) => {
    setNewData({...newData, [e.target.name]: e.target.value})
  }

  const handlePost = () => {
    axios.post('http://localhost:3001/post', {
      name: newData.name,
      address: newData.address
    }).then((res) => {
      console.log(res)
      console.log("Data Inserted");
      setNewData({name: "", address: ""})
      setRefresh(prev => !prev)
    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <div>
      <div className="m-8">
        <input type="text" placeholder="Name" name="name" className="border-2 border-red-300" value={newData.name} onChange={handleChange}/>
        <input type="text" placeholder="Address" name="address" className="border-2 border-red-300" value={newData.address} onChange={handleChange}/>
        <button className="p-2 bg-blue-300 active:bg-blue-200" onClick={handlePost}>Insert</button>
      </div>
      {list.map((item) => {
        return (
          <div key={item.id} className="p-4 bg-green-500 mb-2">
            <h1 className="text-2xl font-bold">{item.name}</h1>
            <h3>{item.address}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default App
