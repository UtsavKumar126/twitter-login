import React from 'react'
import logo from "../assets/twitter-logo-4 1.png"

function login() {
  return (
    <div className='flex justify-center items-centre mt-20'>
        <div className='max-w-2xl flex flex-col gap-4 '>
            <img src={logo} alt="" className='max-w-[50px]'/>
            <h1 className='text-4xl font-bold'>Log in to Twitter</h1>
            <p className='mt-8'>
               <input type="text" className='px-5 py-2 border-2  w-[300px] rounded-lg' placeholder='Phone Number/Email Address'/>
            </p>
            <p>
               <input type="text" className='px-5 py-2 border-2 rounded-lg' placeholder='Password'/>
            </p>
            <button className='px-10 py-2 border-2 bg-[#1DA1F2] font-bold text-white rounded-3xl mt-4'>Log In</button>
            <div className='flex items-centre justify-between mt-4'>
                <a href="" className='text-[#1DA1F2] text-[12px]'>Forget Password ?</a>
                <a href="/signup" className='text-[#1DA1F2] text-[12px]'>Signup Twitter</a>
            </div>
        </div>
    </div>
  )
}

export default login