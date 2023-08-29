import React from 'react'

function HomeHero4() {
  return (
    <div className='px-8 py-12 flex gap-[60px] justify-center relative'>
        <div>
            <img src="https://superio-nextjs.netlify.app/images/resource/image-2.jpg" alt="" />
        </div>
        <div className='w-[550px] flex flex-col gap-12'>
            <p className='font-medium text-3xl'>Millions of Jobs. Find the one<br/>that suits you.</p>
            <span className='text-gray-500'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide</span>
            <ol className='list-circle flex flex-col gap-8'>
                <li>Bring to the table win-win survival</li>
                <li>Capitalize on low hanging fruit to identify</li>
                <li>But I must explain to you how all this</li>
            </ol>
            <button className='text-white bg-blue-500 px-5 py-3 rounded w-[125px]'>Get Started</button>
        </div>
        <div className='absolute bottom-2 shadow flex flex-col justify-center items-center gap-3 bg-white rounded px-5 py-3'>
            <span>300k+ Employers</span>
            <div>
                <img src="https://superio-nextjs.netlify.app/images/resource/multi-logo.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default HomeHero4