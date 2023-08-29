import React from 'react'

function HomeHero5() {
  return (
    <div className='grid grid-cols-3 p-8 mt-[20px]'>
        <div className='flex flex-col justify-center items-center gap-3'>
            <p className='text-4xl font-medium'>4M</p>
            <span className='text-gray-500'>4 million daily active users</span>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
            <p className='text-4xl font-medium'>12K</p>
            <span className='text-gray-500'>Over 12k open job positions</span>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
            <p className='text-4xl font-medium'>20M</p>
            <span className='text-gray-500'>Over 20 million stories shared</span>
        </div>
    </div>
  )
}

export default HomeHero5