import React from 'react'
import cake from '../assets/CakeStore.png'
import {IoLogoVercel} from 'react-icons/io5'
import adventure from '../assets/adventure.png'
import intirior from '../assets/intirior.png'

function Portfolio() {
  return (
   <div id='Portfolio'>
     <div className='portfolio pt-5'>
      <h1 className='text-center text-light'> Portfolio</h1>
      <p className='text-center'>Let,s See My Minor Projects</p>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="card rounded-0">
              <img src={adventure} class="card-img-top" style={{ padding: "10px", borderRadius: "10px" }} alt="..." />
              <div class="card-body d-flex justify-content-between py-1" style={{height  :"13vh"}}> 
                <h5 class="card-title">Explore The World Website</h5>
                <div className="icons d-flex">
                  <a href="" className='mx-3'>
                  
                  </a>
                  <a href="https://adventure-nature.vercel.app" target='_blank'>
                    <IoLogoVercel />
                  </a>
                </div>
              </div>
              <p class="card-text text-light px-3" >Explore The World Website created by using HTML, CSS, BOOTSTRAP.  </p>

            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="card rounded-0">
              <img src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg&ga=GA1.2.382230313.1682342914&semt=ais" class="card-img-top" style={{ padding: "10px", borderRadius: "10px" }} alt="..." />
              <div class="card-body d-flex justify-content-between py-1" style={{height  :"13vh"}}>
                <h5 class="card-title">Americana Resturant Clone Website </h5>
                <div className="icons d-flex">
                  <a href="" className='mx-3'>
                  
                  </a>
                  <a href="https://americanaresturant.vercel.app" target='_blank'>
                    <IoLogoVercel/>
                  </a>
                </div>
              </div>
              <p class="card-text text-light px-3" >Americana Resturant Website created by using HTML, CSS, BOOTSTRAP.  </p>

            </div>
          </div>
   
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="card rounded-0">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0WhW3TXHykqVk4VLAdkfs7qKlNyGNKj4gsw&usqp=CAU" class="card-img-top" style={{ padding: "10px", borderRadius: "10px" }} alt="..." />
              <div class="card-body d-flex justify-content-between py-1" style={{height  :"13vh"}}>
                <h5 class="card-title">Weather App</h5>
                <div className="icons d-flex">
                {/* <p className='arrow'>Tap Here</p><i class="bi bi-arrow-right"></i> */}
                  <a href="https://weatherapp-drab-xi.vercel.app" target='_blank'>
                    <IoLogoVercel  />
                  </a>
                </div>
              </div>
              <p class="card-text text-light px-3" >Weather App created by using HTML, CSS, JAVASCRIPT.  </p>

            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="card rounded-0">
              <img src="https://meticulousbplans.com/wp-content/uploads/2019/12/dos-and-donts-when-exhibiting339199172-1024x621.jpg" class="card-img-top" style={{ padding: "10px", borderRadius: "10px" }} alt="..." />
              <div class="card-body d-flex justify-content-between py-1" style={{height  :"13vh"}}>
                <h5 class="card-title">To-Do List</h5>
                <div className="icons d-flex">
                  <a href="" target='_blank' className='mx-3'>
                  
                  </a>
                  <a href="https://todolist-eight-pi.vercel.app" target='_blank'>
                    <IoLogoVercel  />
                  </a>
                </div>
              </div>
              <p class="card-text text-light px-3" >To-Do LIst created by using HTML, CSS, BOOTSTRAP, REACTJS, CONTEXT.  </p>

            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="card rounded-0">
              <img src={intirior} class="card-img-top" style={{ padding: "10px", borderRadius: "10px" }} alt="..." />
              <div class="card-body d-flex justify-content-between py-1" style={{height  :"13vh"}}>
                <h5 class="card-title">SiteDesign+Studio Clone Website</h5>
                <div className="icons d-flex">
                  <a href="/" className='mx-3'>
                  
                  </a>
                  <a href="https://sitedesignstudio.vercel.app" target='_blank'>
                    <IoLogoVercel  />
                  </a>
                </div>
              </div>
              <p class="card-text text-light px-3" >SiteDesign+Studio is created by using HTML, CSS, BOOTSTRAP, REACTJS, ROUTER.  </p>

            </div>
          </div>
         
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="card rounded-0">
              <img src={cake} class="card-img-top" style={{ padding: "10px", borderRadius: "10px" }} alt="..." />
              <div class="card-body d-flex justify-content-between py-1" style={{height  :"13vh"}}>
                <h5 class="card-title">Cake Store Website</h5>
                <div className="icons d-flex">
                  <a href="/" className='mx-3'>
                  
                  </a>
                  <a href="https://cake-store.vercel.app" target='_blank'>
                    <IoLogoVercel  />
                  </a>
                </div>
              </div>
              <p class="card-text text-light px-3" >Cake Store App created by using HTML, CSS, BOOTSTRAP, REACTJS, REDUX.  </p>

            </div>
          </div>
    
          

        </div>

      </div>

    </div>
   </div>

  )
}

export default Portfolio