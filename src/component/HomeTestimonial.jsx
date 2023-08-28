import React from 'react'
import HomeTestimonialTile from './HomeTestimonialTile'

function HomeTestimonial() {
  return (
    <div className='bg-blue-50 h-[650px] flex flex-col justify-center items-center'>
        <p className='text-3xl font-medium mb-3'>Testimonials From Our Customers</p>
        <span className='text-gray-500'>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor</span>
        <div className='grid grid-cols-2 gap-8 my-8'>
          <HomeTestimonialTile/>
          <HomeTestimonialTile/>
          <HomeTestimonialTile/>
        </div>
    </div>
  )
}

export default HomeTestimonial