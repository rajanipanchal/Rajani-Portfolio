import React from 'react'
import { IoLogoVercel } from 'react-icons/io5'
import resume from '../assets/Rajani panchal Resume.png'
function Home() {
  return (
<div className='home'>

   <div class="main w-100">
      <div class="main-head text-center">
        <div class="social-media">
          {/* <a href="" className='netlify'><span className='vercel'><IoLogoVercel/></span></a>
          <i class="bi bi-linkedin"></i>
          <i class="bi bi-github"></i> */}
        </div>
        <h3 class="text-light">Hello, i'm <span class="rajani">Rajani</span></h3>
        <h2 class="text-light">FrontEnd Developer</h2>
        <p>I can use my extensive knowledge of programming languages and framework to <br /> develope efficient web application.</p>
        <div class="button-section">
          <button type="button" class="btn btn-transparent"><a  href={resume}>Get Resume</a></button>

        </div>
      </div>
      {/* <div class="image-section w-50 text-center">
        <div class="my-pic">
          <img src="https://cdn.pixabay.com/photo/2016/04/25/07/15/man-1351317_1280.png" alt=""/>
        </div>
      </div> */}
    </div>
   <div className='borderline'>
   <div className="line"></div>
   </div>
</div>
  )
}

export default Home