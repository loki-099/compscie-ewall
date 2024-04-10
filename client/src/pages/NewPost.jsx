import React from 'react'

const NewPost = () => {
  return (
    <div className='bg-white h-screen px-4 lg:px-8'>
      <div className='w-full max-w-[1240px] mx-auto pt-16'>
        <div className='w-[90%] lg:w-[60%] mx-auto h-[370px] bg-primary flex flex-col rounded-lg overflow-hidden'>
          <div className='bg-primary h-full flex justify-center items-center px-5 py-5'>
            <textarea className='w-full overflow-hidden min-h-fit max-h-full bg-transparent text-center break-words break-all' type="text" placeholder='Tap to type...'/>
          </div>
          <div className='bg-accent h-12 px-5 flex items-center justify-between text-white'>
            <p className='font-bold'>- </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPost