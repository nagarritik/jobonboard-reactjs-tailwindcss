import React from 'react'
import Logo from './Logo'

function Header() {
  return (
    <div className='h-[75px] flex justify-around items-center shadow'>
        <Logo/> 
        <div>
            <ul className='flex gap-[15px]'>
                <li className='text-gray-500'>Home</li>
                <li className='text-gray-500'>Find jobs</li>
                <li className='text-gray-500'>Employers</li>
                <li className='text-gray-500'>Candidates</li>
                <li className='text-gray-500'>Blog</li>
                <li className='text-gray-500'>Pages</li>
            </ul>
        </div>
        <div className='flex gap-3 items-center'>
            <a href="/" className='text-blue-400 mr-2'>Upload your CV</a>
            <button className='bg-blue-100 text-blue-400 px-3 py-1 rounded-md mr-2'>Login / Register</button>
            <button className='bg-blue-500 text-white px-3 py-1 rounded-md'>Job Post</button>
        </div>
    </div>
  )
}

export default Header