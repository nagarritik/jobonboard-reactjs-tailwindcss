import React from 'react'
import HomeArticleTile from './HomeArticleTile'

function HomeArticle() {
  return (
    <div className='h-[650px] flex flex-col justify-center items-center bg-gray-100'>
        <p className='text-3xl font-medium mb-3'>Recent News Articles</p>
        <span className='text-gray-500'>Fresh job related content posted each day.</span>
        <div className='grid grid-cols-3 gap-8 my-8'>
            <HomeArticleTile/>
            <HomeArticleTile/>
            <HomeArticleTile/>
        </div>
    </div>
  )
}

export default HomeArticle