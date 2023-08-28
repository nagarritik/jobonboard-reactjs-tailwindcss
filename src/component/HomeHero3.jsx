import React from 'react'
import HomeJobTile from './HomeJobTile'

function HomeHero3() {
  return (
    <div className='h-[max-content] flex flex-col justify-center items-center py-32'>
        <p className='text-3xl font-medium  mb-3'>Featured Jobs</p>
        <span className='text-gray-500'>Know your worth and find the job that qualify your life</span>
        <div className='grid grid-cols-2 gap-8 my-8'>
            <HomeJobTile/>
            <HomeJobTile/>
            <HomeJobTile/>
            <HomeJobTile/>
            <HomeJobTile/>
            <HomeJobTile/>
        </div>
        <button className='bg-blue-700 text-white px-5 py-3 rounded'>Load more listing</button>
    </div>
  )
}

export default HomeHero3