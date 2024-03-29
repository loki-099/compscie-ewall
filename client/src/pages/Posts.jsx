import { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';
import Header from "../components/Header";

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

  const timeDifference = (utcTime) => {
    let local = moment(utcTime)
    let now = moment()
    let idol = local.fromNow()
    return idol
  }


  return (
    <div className="bg-white">
      <Header/>
    </div>
  )
}

export default Posts