import React from 'react'
import {FaRegClock} from 'react-icons/fa'

function JobTileInfo() {
  return (
    <div className='flex justify-center items-center gap-1'>
        <FaRegClock color='gray'/>
        <span className='text-gray-500 text-sm'>Invision</span>
    </div>
  )
}

export default JobTileInfo