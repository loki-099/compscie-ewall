import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-secondary w-full flex items-center uppercase px-4 py-2 lg:px-8'>
      <div className='w-full max-w-[1240px] mx-auto'>
        <Link to="/"><h1 className='font-bold text-white text-xl xl:text-4xl inline-block'>Compsci Ewall</h1></Link>
      </div>
    </div>
  )
}

export default Header