import React from 'react'
import HomeCategoryTile from './HomeCategoryTile'

function HomeHero2() {
  const categoryInfo=[
    {
      title:"Accounting / Finance",
      position:2
    },
    {
      title:"Marketing",
      position:86
    },
    {
      title:"Design",
      position:43
    },
    {
      title:"Development",
      position:12
    },
    {
      title:"Human Resource",
      position:55
    },
    {
      title:"Automotive",
      position:2
    },
    {
      title:"Customer Support",
      position:2
    },
    {
      title:"Health and Care",
      position:25
    },
    {
      title:"Project Management",
      position:92
    },
  ]
  return (
    <div className='h-[650px] flex flex-col justify-center items-center'>
        <p className='text-3xl font-medium mb-3'>Popular Job Categories</p>
        <span className='text-gray-500'>2020 jobs live - 293 added today.</span>
        <div className='grid grid-cols-3 gap-8 my-8'>
          {
            categoryInfo.map(item=><HomeCategoryTile data={item}/>)
          }
        </div>
    </div>
  )
}

export default HomeHero2