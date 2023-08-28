import React from 'react'

function HomeTestimonialTile() {
  return (
    <div className='flex flex-col bg-white rounded-xl p-5 w-[550px] gap-3'>
        <p className='text-blue-500 font-medium text-xl'>Good themes</p>
        <span className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quos rem nemo numquam recusandae quam ratione fugit, quasi eaque quas, quod officia?</span>
        <div className='flex pt-2'>
            <img src="https://superio-nextjs.netlify.app/images/resource/testi-thumb-3.png" alt="" />
            <div className='flex flex-col px-5 justify-center'>
                <p>Ritik Nagar</p>
                <span className='text-sm'>Software Engineer / Web Developer</span>
            </div>
        </div>
    </div>
  )
}

export default HomeTestimonialTile