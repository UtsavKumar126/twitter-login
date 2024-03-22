import React from 'react'
import mainImg from "../assets/back-twitter 1.png"
import logo from "../assets/twitter-logo-4 1.png"
import appleLogo from "../assets/logo-apple 1.png"
import googleLogo from "../assets/google-icon 1.png"
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate=useNavigate();
  return (
    <div>
        <div className='flex items-center'>
            <img className="max-w-3xl"src={mainImg} alt="img" srcset="" />
            <div className='flex justify-center items-center m-4'>
                <div className='flex flex-col justify-center items-start gap-4 max-w-lg'>
                    <img src={logo} alt="" />
                    <h1 className='text-5xl font-bold'>Happening now</h1>
                    <h3 className='text-3xl font-bold'>Join Twitter Today</h3>
                    <div className='border-2  px-10 py-3 font-bold rounded-3xl cursor-pointer hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center gap-1'>
                      <img src={googleLogo} alt=""  className='hover:bg-[#1DA1F2]'/>Signup with Google</div>
                    <div className='border-2  px-10 py-3 font-bold rounded-3xl cursor-pointer hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center gap-1'>
                      <img src={appleLogo} alt=""  className='hover:bg-[#1DA1F2]'/>Signup with Apple</div>
                    <div className='border-2  px-10 py-3 font-bold rounded-3xl cursor-pointer hover:bg-[#1DA1F2] hover:text-white' onClick={()=>navigate("/signup")}>Signup with phone or email</div>
                    <p className='px-5'>By singing up you agree to the 
                    <a href="" className='text-[#1DA1F2]'> Terms of Service </a>
                    and 
                    <a href='' className='text-[#1DA1F2]'> Privacy Policy</a>, including 
                    <a href='' className='text-[#1DA1F2]'> Cookie Use</a>.</p>
                    <p className='px-5'>Already have an account?<span className='text-[#1DA1F2] cursor-pointer' onClick={()=>navigate("./login")}> Log in</span> </p>
                </div>
            </div>
        </div>
        <footer>
          <a href="">About</a><a href="">Help Center</a><a href="">Terms of Service</a><a href="">Privacy Policy</a><a href="">Cookie Policy</a><a href="">Ads Info</a><a href="">Blog</a><a href="">Status</a><a href="">Carrers</a><a href="">Brand Resources</a><a href="">Advertising</a><a href="">Marketing</a><a href="">Twitter for Bussiness</a><a href="">Developers</a><a href="">Directory</a><a href="">Settings</a><a href="">@2021 Twitter Inc</a>
        </footer>
    </div>
  )
}

export default LandingPage