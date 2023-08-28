import React from 'react'

function HomeHero1() {
  return (
    <div className='bg-blue-50 h-[750px] flex relative items-center'>
      <div className='ml-[150px]'>
        <p className='text-[50px] font-medium mb-5'>There Are <span className='text-blue-500'>93,178</span> Postings Here<br /> For you!</p>
        <span className='text-gray-500'>Find Jobs, Employment & Career Opportunities</span>
        <div className='flex gap-3 bg-white rounded-xl border  p-5 items-center mt-10 mb-5'>
          <input type="text" name="title" id="title" placeholder='Job title, Keyword or Company' className='w-[300px]'/>
          <div className='h-[50px] w-[1px] bg-gray-200'></div>
          <input type="text" name="city" id="city" placeholder='City or postcode'/>
          <button className='bg-blue-600 text-white px-6 py-4 rounded-xl'>Find jobs</button>
        </div>
        <div>
          <span>Popular searches: </span>
          <span>Designer, Developer, Web, IOS, PHP, Senior, Engineer</span>
          <a href="#"></a>
        </div>
      </div>
      <div>
        <img className='absolute right-5 bottom-0' src="https://superio-nextjs.netlify.app/images/resource/banner-img-1.png" alt="" />
      </div>
    </div>
  )
}

export default HomeHero1