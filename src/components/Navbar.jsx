import React from 'react'
import resume from '../assets/Rajani panchal Resume.png'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-transparent">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><span class="r">R</span><span>ajani Portfolio.</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span class="navbar-toggler-icon"></span> */}
      <i class="bi bi-grid-fill"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#About">AboutMe</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={resume}target='_blank'>Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Contect">ContactMe</a>
          </li>
         
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Navbar