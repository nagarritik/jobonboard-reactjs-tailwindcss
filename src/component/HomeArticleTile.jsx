import React from 'react'

function HomeArticleTile() {
  return (
    <div className='flex flex-col gap-3 w-[400px] bg-white p-3 rounded'>
        <div>
            <img className='h-[250px] rounded' src="https://superio-nextjs.netlify.app/images/resource/blog/1.jpg" alt="" />
        </div>
        <div className='flex flex-col gap-5'>
            <div>
                <span>August 31, 2021</span>
                -
                <span>12 Comments</span>
            </div>
            <p className='font-medium text-xl'>Attract Sales And Profits</p>
            <span className='text-sm text-gray-500'>A job ravenously while Far much that one rank beheld after outside....</span>
            <button className='text-blue-500'>Read More</button>
        </div>
    </div>
  )
}

export default HomeArticleTile