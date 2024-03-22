import React from 'react'
import logo from "../assets/twitter-logo-4 1.png"

function Signup() {
  return (
    <div className='flex justify-center mt-[50px]'>
      <div className='max-w-xl flex flex-col gap-4'>
      <div className='flex justify-center'>
        <img src={logo} alt="" className='w-[50px]'/>
      </div>  
      <h3 className='text-3xl font-bold mt-4'>Create an account</h3>
      <input type="text" placeholder='Name' className='w-[300px] border-2 px-3 py-2 rounded-xl'/>
      <input type="text" placeholder='Phone Number' className='w-[300px] border-2 px-3 py-2 rounded-xl'/>
      <a href="" className='text-[#1DA1F2]'>Use Email</a>
      <h5 className='font-bold'>Date of birth</h5>
      <p>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
      <div className='flex justify-between items-center gap-3'>
      <select name="" id="" className='border-2 px-4 py-2 w-[200px] rounded-lg'>
        <option value="">Month</option>
      </select>
      <select name="" id="" className='border-2 px-4 py-2 w-[200px] rounded-lg'>
        <option value="">Day</option>
      </select>
      <select name="" id="" className='border-2 px-4 py-2 w-[200px] rounded-lg'>
        <option value="">Year</option>
      </select>
      </div>
      <button className='py-2 border-2 w-[300px] m-auto rounded-3xl text-white bg-[#1DA1F2]'>Next</button>
    </div>
    </div> 
  )
}

export default Signup