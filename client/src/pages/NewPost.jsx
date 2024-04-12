import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NewPost = () => {
  const navigate = useNavigate()
  const [display,setDisplay] = useState('hidden')
  const [newData, setNewData] = useState({
    postAuthor: "",
    postText: ""
  })
  const handleChange = (e) => {
    setNewData({...newData, [e.target.name]: e.target.value})
  }
  const checkFields = () => {
    if (newData.postText == "") {
      setDisplay('flex')
      return false
    }
    else {
      return true
    }
  }
  const handlePost = () => {
    if (checkFields()) {
      if (newData.postAuthor == "") {
        newData.postAuthor = "Anonymous"
      }
      axios.post('http://localhost:3001/post', {
      postAuthor: newData.postAuthor,
      postText: newData.postText
      }).then((res) => {
      console.log(res)
      console.log("Data Inserted");
      setNewData({postAuthor: "", postText: ""})
      navigate('/')
      }).catch((err) => {
      console.log(err);
      })
    }
    
  }
  return (
    <div className='bg-white h-screen px-4 lg:px-8'>
      <div className={`absolute left-0 w-full h-full z-20 bg-black/40 pt-10 ${display} justify-center`}>
        <div className="bg-white w-[350px] h-[200px] shadow-xl rounded-lg flex flex-col gap-y-2 items-center justify-center border-red-400 border-2">
          <h2 className="font-bold text-lg text-black/95">Text field can't be empty!</h2>
          <button className="inline-block bg-accent text-white rounded-3xl px-3 py-1 font-bold" onClick={() => setDisplay('hidden')}>Okay</button>
        </div>
      </div>
      <div className='w-full max-w-[1240px] mx-auto pt-16'>
        <div className='w-full max-w-[600px] mx-auto flex flex-col items-center'>
          <textarea className='bg-primary w-full h-[300px] rounded-lg p-4 mb-2 resize-none' placeholder='Tap to type...' name="postText" onChange={handleChange} value={newData.postText}/>
          <input type="text" className='bg-primary w-full rounded-lg px-4 py-2 mb-8' placeholder='Your name (optional)' name="postAuthor" onChange={handleChange} value={newData.postAuthor}/>
          <button className='inline-block bg-accent text-white rounded-3xl px-3 py-1 lg:px-5 lg:py-2 font-bold text-base lg:text-2xl' onClick={handlePost}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default NewPost