import React from 'react'
import {FaRegClock} from 'react-icons/fa'

function JobTileInfo({data}) {
  return (
    <div className='flex justify-center items-center gap-1'>
        <FaRegClock color='gray'/>
        <span className='text-gray-500 text-sm'>{data}</span>
    </div>
  )
}

export default JobTileInfo