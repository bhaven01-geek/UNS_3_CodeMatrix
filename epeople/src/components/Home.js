import React from 'react'
import './css/style.css'
import './css/bootstrap.min.css';
// import './css/owl.carousel.min.css';
import './css/animate.min.css';
import './css/jquery-ui.css';
import {
   
    Link
  } from "react-router-dom";
const Home = () => {
    return (
        <>
            {/* <div class="loader_bg">
    <div class="loader"><img src="images/loading.gif" alt="#" /></div>
  </div> */}
  <header>
    <div class="header-top">
      <div class="header">
        <div class="container">
          <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col logo_section">
              <div class="full">
                <div class="center-desk">
                  <div class="logo">
                    <a href="index.html"><img src="images/0c338b89cbde46389a33f41dd7b8cd15.png" alt="#" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-10 col-lg-10 col-md-10 col-sm-9">
              
               <div class="menu-area">
                <div class="limit-box">
                  <nav class="main-menu ">
                    <ul class="menu-area-main">
                      <li class="active"> <a href="index.html">Home</a> </li>
                  
                      <li> <a href="about.html">About</a> </li>
                      <li> <a href="concerts.html">Concerts </a> </li>
                      <li> <a href="gallery.html">Gallery</a> </li>
                      <li> <a href="contact.html">Contact</a> </li>
      
                        <li > <Link to = '/login'>Login</Link></li>
                      <li  > <a  class="last_manu" href="#"><img src="images/search_icon.png" alt="#" /></a> </li>
                      
                     </ul>
                   </nav>
                
               </div> 
             </div>
           </div>
         </div>
       </div>
     </div>
    
     <section class="slider_section">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">

            <div class="container">
              <div class="carousel-caption">
                <div class="row">
                  <div class="col-md-12">
                    <div class="text-bg">
                      <span>The Best</span>
                      <h1>WAY TO LEARN</h1>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                      <a href="#">JOIN as a Learner</a> <a href="#">JOIN as a Tutor</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">

            <div class="container ">
              <div class="carousel-caption">

                <div class="row">
                  <div class="col-md-12">
                    <div class="text-bg">
                        <span>The Best</span>
                      <h1>WAY TO LEARN</h1>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                      <a href="#">JOIN as a Learner</a><a href="#">JOIN as a Tutor</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>


          <div class="carousel-item">

            <div class="container">
              <div class="carousel-caption ">
                <div class="row">
                  <div class="col-md-12">
                    <div class="text-bg">
                        <span id="head-1" >The Best</span>
                      <h1>WAY TO LEARN</h1>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                      <a href="#">JOIN as a Learner</a> <a href="#">JOIN as a Tutor</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
     
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
      
    </a>
   </div>
    
  

</section>
</div>
</header>



<div id="about" class="about">
  <div class="container">
    <div class="row display_boxflex">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div class="about-box">
          <h2>About Us</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
          <a href="Javascript:void(0)">Read More</a>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div class="about-box">
          <figure><img src="images/oline1.jpg" alt="#" /></figure>
        </div>
      </div>
    </div>

  </div>
</div>



<div id="upcoming" class="upcoming">
  <div class="container-fluid padding_left3">
    <div class="row display_boxflex">
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
       <div class="box_text">
          <div class="titlepage">
            <h2>Upcoming Concerts</h2>
          </div>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it lookIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
          <a href="Javascript:void(0)">Read More</a>
        </div>
      </div> 
    
      <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 border_right">
         <div class="upcomimg">
           <figure><img src="images/ds.jpg" alt="#"/></figure>
        </div>
          </div>
  </div>
    </div>
</div>



<div id="gallery" class="Gallery">
  <div class="container"> 
    <div class="row display_boxflex">
      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 margi_bott">
            <div class="Gallery_img">
              <figure><img src="images/Gallery1.jpg" alt="#"/></figure>
            </div>
            <div class="hover_box">
             
              <ul class="icon_hu">
                 <h3>Music night</h3>
                <li><a href="#"><img src="icon/h.png" alt="#"/></a></li>
                 <li><a href="#"><img src="icon/h.png" alt="#"/></a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 margi_bott">
            <div class="Gallery_img">
              <figure><img src="images/Gallery2.jpg" alt="#"/></figure>
            </div>
            <div class="hover_box">
             
              <ul class="icon_hu">
                 <h3>Music night</h3>
                <li><a href="#"><img src="icon/h.png" alt="#"/></a></li>
                 <li><a href="#"><img src="icon/h.png" alt="#"/></a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 margi_bott1">
            <div class="Gallery_img">
              <figure><img src="images/Gallery3.jpg" alt="#"/></figure>
            </div>
            <div class="hover_box">
             
              <ul class="icon_hu">
                 <h3>Music night</h3>
                <li><a href="#"><img src="icon/h.png" alt="#"/></a></li>
                 <li><a href="#"><img src="icon/h.png" alt="#"/></a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="Gallery_img">
              <figure><img src="images/Gallery4.jpg" alt="#"/></figure>
            </div>
            <div class="hover_box">
             
              <ul class="icon_hu">
                 <h3>Music night</h3>
                <li><a href="#"><img src="icon/h.png" alt="#"/></a></li>
                 <li><a href="#"><img src="icon/h.png" alt="#"/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
        <div class="Gallery_text">
          <div class="titlepage">
            <h2>Gallery</h2>
          </div>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usin</p>
          <a href="Javascript:void(0)">Read More</a>
        </div>
      </div>
    </div>
  </div>
</div>

    <footr>
      <div class="footer ">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <form class="contact_bg">
            <div class="row">
              <div class="col-md-12">
                <div class="titlepage">
                  <h2>Contact us</h2>
                </div>
                <div class="col-md-12">
                  <input class="contactus" placeholder="Your Name" type="text" name="Your Name"/>
                </div>
                <div class="col-md-12">
                  <input class="contactus" placeholder="Your Email" type="text" name="Your Email"/>
                </div>
                <div class="col-md-12">
                  <input class="contactus" placeholder="Your Phone" type="text" name="Your Phone"/>
                </div>
                <div class="col-md-12">
                  <textarea class="textarea" placeholder="Message" type="text" name="Message"></textarea>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <button class="send">Send</button>
                </div>
              </div>
            </div>
            </form>

            </div>
            <div class="col-md-12 border_top">
              <form class="news">
               <h3>Newsletter</h3>
                <input class="newslatter" placeholder="ENTER YOUR MAIL" type="text" name=" ENTER YOUR MAIL" />
                <button class="submit">Subscribe</button>
              </form>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                  <div class="address">
                    <ul class="loca">
                      <li>
                        <a href="#"><img src="icon/loc.png" alt="#" /></a>Locations
                   </li>
                        <li>
                          
                            <a href="#"><img src="icon/call.png" alt="#" /></a>+12586954775 </li>
                          <li>
                            <a href="#"><img src="icon/email.png" alt="#" /></a>demo@gmail.com </li>
                          </ul>
                         

                        </div>
                      </div>
                       <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                           <ul class="social_link">
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                          </ul>
                       </div>
                    </div>
                  </div>

                </div>

              </div>
               <div class="container">
              <div class="copyright">
               
                  <p>Copyright 2019 All Right Reserved By <a href="https://html.design/">Free  html Templates</a></p>
                </div>
              </div>
            </div>
          </footr>
        
          <script src="js/jquery.min.js"></script>
          <script src="js/popper.min.js"></script>
          <script src="js/bootstrap.bundle.min.js"></script>
          <script src="js/jquery-3.0.0.min.js"></script>
          <script src="js/plugin.js"></script>
          {/* <!-- sidebar --> */}
          <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
          <script src="js/custom.js"></script>
          <script src="https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>


        </>
    )
}

export default Home
