import React from 'react'
import moment from 'moment';
import axios from 'axios';

const Card = ({data, isAdmin, setRefresh}) => {
  const {id, postText, postAuthor, createdAt} = data

  const timeDifference = (utcTime) => {
    let local = moment(utcTime)
    let fromNow = local.fromNow()
    return fromNow
  }

  const deletePost = () => {
    console.log(id);
    axios.delete(`http://localhost:3001/${id}`, {id: id}).then((res) => {
      console.log(res);
    })
    setRefresh()
  }

  return (
    <div className='w-full h-[370px] bg-primary flex flex-col rounded-lg overflow-hidden relative'>
      {isAdmin ? <button className='inline bg-red-400 absolute p-4 right-0' onClick={deletePost}>X</button> : null}
      <div className='bg-primary h-full flex justify-center items-center'>
        <p className='px-5 text-center text-base'>{postText}</p>
      </div>
      <div className='bg-accent h-12 px-5 flex items-center justify-between text-white'>
        <p className='font-bold'>- {postAuthor}</p>
        <p className='text-xs'>{timeDifference(createdAt)}</p>
      </div>
    </div>
  )
}

export default Card