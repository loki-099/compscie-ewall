import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/').then((res) => {
      console.log(res.data);
      setList(res.data)
    })
  }, [])

  return (
    <div>
      {list.map((item) => {
        return (
          <h1 key={item.id}>{item.name}</h1>
        )
      })}
    </div>
  )
}

export default App
