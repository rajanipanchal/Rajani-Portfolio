import React from 'react'
import myimage from '../assets/WhatsApp Image 2023-04-22 at 5.32.15 PM.jpeg'
import { Check } from 'react-bootstrap-icons'


function About() {

  return (
<div id='About'>
<div className='about-section pt-5'>
      <div className='container'>
        <div className='aboutme d-flex w-100'>
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="about-images text-center">
                <img src={myimage} style={{ "width": "70%" }} alt="" />
              </div>
            </div>


            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className='about-skill d-block '>
                <div class="aboutMe">
                  <h1 class="text-light">About Me</h1>
                  <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore neque qui sed aliquam  et repudiandae vel excepturi,  laudantium a voluptate nostrum  quos possimus autem fugit cupiditate?  Laudantium eaque architecto eos.</p>
                  <div class="tab-items d-flex ">
                    <div className='education w-50'>
                      <h5 className='text-transparent'>Education</h5>
                      <ul>
                        <li className='vercel'><Check />Bsc. in (INFORMATION TECHNOLOGY) from Malwa Institute of Science & Technology.</li>
                        <li className='vercel'><Check />Higher Secondary Education passed from MP Board in 2017.</li>
                      </ul>
                    </div>
                    <div className='skills'>
                      <h5 className='text-transparent'>Skills</h5>
                      <ul className='skills-item'>
                        <li className='vercel'><Check />Frontend Developer.</li>
                        <li className='vercel'><Check />Web Designer.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div>
          <section id="skills" className="skills-section">
            <div className="container-xl">
              <div className="section_title text-center">
                <h1>My Skills</h1>
              </div>
              <div className="skill-items">
                <h6 className=' text-center pt-3'>Frontend Development</h6>
                <div className="container" id='skill-container'>
                  <div className="row">

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="lang">
                        <div className="html d-flex">
                          <i class="fa-brands fa-html5"></i>
                          <p>HTML</p>
                        </div>
                        <div class="progress" style={{ height: "2vh" }}>
                          <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%", height: "" }}>90%</div>
                        </div>
                      </div>
                      <div className="lang">
                        <div className="html d-flex">
                          <i class="fa-brands fa-css3-alt"></i>
                          <p>CSS</p>
                        </div>
                        <div class="progress" style={{ height: "2vh" }}>
                          <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%", height: "" }}>85%</div>
                        </div>
                      </div>
                      <div className="lang">
                        <div className="html d-flex">
                          <i class="fa-brands fa-bootstrap"></i>
                          <p>Bootstrap</p>
                        </div>
                        <div class="progress" style={{ height: "2vh" }}>
                          <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%", height: "" }}>75%</div>
                        </div>
                      </div>
                      <div className="lang">
                        <div className="html d-flex">
                          <i class="fa-brands fa-square-js"></i>
                          <p>Javascript</p>
                        </div>
                        <div class="progress" style={{ height: "2vh" }}>
                          <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%", height: "" }}>60%</div>
                        </div>
                      </div>
                      <div className="lang">
                        <div className="html d-flex">
                          <i class="fa-brands fa-react"></i>
                          <p>React</p>
                        </div>
                        <div class="progress" style={{ height: "2vh" }}>
                          <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%", height: "" }}>50%</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <img src="https://s3.envato.com/files/436425068/ya_114833.JPG" style={{ width: "100%" ,marginTop  :"12px"  , borderRadius : "5px"}} alt="" />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>


      </div>
      <div className='borderline pt-5'>
        <div className="line"></div>
      </div>
    </div>

</div>
   
  )

}
export default About