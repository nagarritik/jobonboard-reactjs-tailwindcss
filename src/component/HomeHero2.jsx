import React from 'react'
import HomeCategoryTile from './HomeCategoryTile'

function HomeHero2() {
  return (
    <div className='h-[650px] flex flex-col justify-center items-center'>
        <p className='text-3xl font-medium mb-3'>Popular Job Categories</p>
        <span className='text-gray-500'>2020 jobs live - 293 added today.</span>
        <div className='grid grid-cols-3 gap-8 my-8'>
            <HomeCategoryTile/>
            <HomeCategoryTile/>
            <HomeCategoryTile/>
            <HomeCategoryTile/>
            <HomeCategoryTile/>
            <HomeCategoryTile/>
            <HomeCategoryTile/>
            <HomeCategoryTile/>
            <HomeCategoryTile/>
        </div>
    </div>
  )
}

export default HomeHero2