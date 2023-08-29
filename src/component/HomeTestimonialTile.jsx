import React from 'react'

function HomeTestimonialTile({data}) {
  return (
    <div className='flex flex-col bg-white rounded-xl p-5 w-[550px] gap-3'>
        <p className='text-blue-500 font-medium text-xl'>{data.title}</p>
        <span className='text-sm'>{data.summary}</span>
        <div className='flex pt-2'>
            <img src={data.imgUrl} alt="" />
            <div className='flex flex-col px-5 justify-center'>
                <p>{data.name}</p>
                <span className='text-sm'>{data.designation}</span>
            </div>
        </div>
    </div>
  )
}

export default HomeTestimonialTile