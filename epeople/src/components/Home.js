import React from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
// import './css/owl.carousel.min.css';
import "./css/animate.min.css";
import "./css/jquery-ui.css";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
const Home = () => {
  return (
    <>
      {/* <div class="loader_bg">
    <div class="loader"><img src="images/loading.gif" alt="#" /></div>
  </div> */}
      <header>
        <div class='header-top'>
          <div class='header'>
            <div class='container'>
              <div class='row'>
                <div class='col-xl-2 col-lg-2 col-md-2 col-sm-3 col logo_section'>
                  <div class='full'>
                    <div class='center-desk'>
                      <div class='logo'>
                        <a href='index.html'>
                          <img src='images/logo.svg' alt='#' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-xl-10 col-lg-10 col-md-10 col-sm-9'>
                  <div class='menu-area'>
                    <div class='limit-box'>
                      <nav class='main-menu '>
                        <ul class='menu-area-main'>
                          <li class='active'>
                            {" "}
                            <a href='#'>Home</a>{" "}
                          </li>

                          <li>
                            {" "}
                            <a href='#about'>About</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href='#upcoming'>Pricings </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href='#gallery'>Top Tutor's</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href='#contact'>Contact</a>{" "}
                          </li>

                          <li>
                            {" "}
                            <Link to='/login'>Login</Link>
                          </li>
                          <li>
                            {" "}
                            <a class='last_manu' href='#'>
                              <img src='images/search_icon.png' alt='#' />
                            </a>{" "}
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id='about' class='about'>
        <div class='container'>
          <div class='row display_boxflex'>
            <div class='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
              <div className='sub1'>
                <img
                  src='images/sub-logo-final.png'
                  style={{ width: 50 }}
                  alt=''
                />
                <h4>Explore the hallways</h4>
                <div>
                  Discover different rooms, filled with fascinating and
                  unexpected conversations.
                </div>
              </div>
              <div className='sub2'>
                <img src='images/sub-logo2.png' style={{ width: 50 }} alt='' />
                <h4>Give the Feedback</h4>
                <div>Rate the tutor's session and give the feedback.</div>
              </div>
              <div className='sub3'>
                <img src='images/sub-logo3.png' style={{ width: 50 }} alt='' />
                <h4>Talk with amazing Tutor's</h4>
                <div>
                  Discover different rooms, filled with fascinating and
                  unexpected sessions.
                </div>
              </div>
              <div className='sub4'>
                <img src='images/sub-logo4.png' style={{ width: 50 }} alt='' />
                <h4>Explore the Group Session's</h4>
                <div>
                  Discover different rooms, also join the group session to learn
                  new things.
                </div>
              </div>
              <div className='sub5'>
                <img src='images/sub-logo3.png' style={{ width: 50 }} alt='' />
                <h4>Talk with amazing Tutor's</h4>
                <div>
                  Discover different rooms, filled with fascinating and
                  unexpected sessions.
                </div>
              </div>
            </div>
            <div class='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
              <div class='about-box'>
                <figure>
                  <img src='images/11.svg' alt='#' />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='upcoming' class='upcoming'>
        <div class='container-fluid padding_left3'>
          <div class='row display_boxflex'>
            <div class='col-xl-4 col-lg-5 col-md-5 col-sm-12 row123'>
              <div class='box_text'>
                <img src='images/12.svg' alt='' />
              </div>
            </div>

            <div class='col-xl-7 col-lg-7 col-md-7 col-sm-12 border_right'>
              <div class='upcomimg'>
                <div className='maincontainer'>
                  <section>
                    <div class='container py-5'>
                      <div class='row text-center align-items-end'>
                        <div class='col-lg-5 mb-5 mb-lg-0'>
                          <div class='bg-white p-5 rounded-lg shadow'>
                            <h1 class='h6 text-uppercase font-weight-bold mb-4'>
                              Basic
                            </h1>
                            <h2 class='h1 font-weight-bold'>
                              $0
                              <span class='text-small font-weight-normal ml-2'>
                                / month
                              </span>
                            </h2>
                            <div class='custom-separator my-4 mx-auto line-bar'></div>
                            <ul class='list-unstyled my-5 text-small text-left'>
                              <li class='mb-3'>
                                <i class='fa fa-check mr-2 text-primary check-box'></i>{" "}
                                Can join Group Meeting's.
                              </li>
                              <li class='mb-3'>
                                <i class='fa fa-check mr-2 text-primary check-box'></i>{" "}
                                1 Hour Time limit of the Meeting's.
                              </li>
                              <li class='mb-3'>
                                <i class='fa fa-check mr-2 text-primary check-box'></i>{" "}
                                Per day 3 Meeting's.
                              </li>
                              <li class='mb-3 text-muted'>
                                <i class='fa fa-times mr-2'></i>
                                <del>One to One Session's</del>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div class='col-lg-5 mb-5 mb-lg-0'>
                          <div class='bg-white p-5 rounded-lg shadow'>
                            <h1 class='h6 text-uppercase font-weight-bold mb-4'>
                              Premium
                            </h1>
                            <h2 class='h1 font-weight-bold'>
                              $49
                              <span class='text-small font-weight-normal ml-2'>
                                / month
                              </span>
                            </h2>
                            <div
                              id='seprator'
                              class='custom-separator my-4 mx-auto '
                            ></div>
                            <ul class='list-unstyled my-5 text-small text-left font-weight-normal'>
                              <li class='mb-3'>
                                <i class='fa fa-check mr-2 text-primary check-box'></i>{" "}
                                Can Join Group Meetings.
                              </li>
                              <li class='mb-3'>
                                <i class='fa fa-check mr-2 text-primary check-box'></i>{" "}
                                2 Hour Time limit of Meeting's.
                              </li>
                              <li class='mb-3'>
                                <i class='fa fa-check mr-2 text-primary check-box'></i>{" "}
                                Per day 10 Meeting's.
                              </li>
                              <li class='mb-3'>
                                <i class='fa fa-check mr-2 text-primary check-box'></i>{" "}
                                One to One Session's available.
                              </li>
                            </ul>
                            <a
                              href='#'
                              class='btn btn-primary btn-block p-2 shadow rounded-pill'
                            >
                              Subscribe
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='gallery' class='Gallery'>
        <div className='container1'>
          <h1>Top Tutor's of the Month.</h1>
          <div className='cards'>
            <MDBCard style={{ maxWidth: "22rem" }} className='card1'>
              <MDBCardImage
                src='https://mdbootstrap.com/img/new/standard/nature/184.webp'
                position='top'
                alt='...'
              />
              <MDBCardBody>
                <MDBCardTitle>Dr.Prasad Patil</MDBCardTitle>
                <MDBCardText>
                  I have been tutoring Physics for the last six years to
                  students studying in 11 and 12 and Science to students of
                  Grade 9 and 10. I started tutoring when I was pursuing an
                  engineering degree from Mumbai University.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ maxWidth: "22rem" }} className='card2'>
              <MDBCardImage
                src='https://mdbootstrap.com/img/new/standard/nature/184.webp'
                position='top'
                alt='...'
              />
              <MDBCardBody>
                <MDBCardTitle>Ronald Fernandes</MDBCardTitle>
                <MDBCardText>
                  I am a certified instructor for TOEFL, IELTS, and have done
                  M.A. in English from Hindu College, Delhi University. I have
                  practiced journalism and screenwriting for five years and then
                  moved to full-time teaching.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ maxWidth: "22rem" }} className='card3'>
              <MDBCardImage
                src='https://mdbootstrap.com/img/new/standard/nature/184.webp'
                position='top'
                alt='...'
              />
              <MDBCardBody>
                <MDBCardTitle>Rakesh Roshan</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.I am an experienced tax and
                  accounting tutor with 15 years of experience teaching students
                  and working professionals. I love teaching students who are
                  passionate to make or build a career in chartered accountancy
                  or wants to understand accounting at graduation or master’s
                  level.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </div>

      <footr id='contact'>
        <div class='footer '>
          <div class='container'>
            <div class='row'>
              <div class='col-md-12'>
                <form class='contact_bg'>
                  <div class='row'>
                    <div class='col-md-12'>
                      <div class='titlepage'>
                        <h2>Contact us</h2>
                      </div>
                      <div class='col-md-12'>
                        <input
                          class='contactus'
                          placeholder='Your Name'
                          type='text'
                          name='Your Name'
                        />
                      </div>
                      <div class='col-md-12'>
                        <input
                          class='contactus'
                          placeholder='Your Email'
                          type='text'
                          name='Your Email'
                        />
                      </div>
                      <div class='col-md-12'>
                        <input
                          class='contactus'
                          placeholder='Your Phone'
                          type='text'
                          name='Your Phone'
                        />
                      </div>
                      <div class='col-md-12'>
                        <textarea
                          class='textarea'
                          placeholder='Message'
                          type='text'
                          name='Message'
                        ></textarea>
                      </div>
                      <div class='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                        <button class='send'>Send</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class='col-md-12 border_top'>
                <form class='news'>
                  <h3>Newsletter</h3>
                  <input
                    class='newslatter'
                    placeholder='ENTER YOUR MAIL'
                    type='text'
                    name=' ENTER YOUR MAIL'
                  />
                  <button class='submit'>Subscribe</button>
                </form>
              </div>
              <div class='col-xl-12 col-lg-12 col-md-12 col-sm-12 '>
                <div class='row'>
                  <div class='col-xl-12 col-lg-12 col-md-12 col-sm-12 '>
                    <div class='address'>
                      <ul class='loca'>
                        <li>
                          <a href='#'>
                            <img src='icon/loc.png' alt='#' />
                          </a>
                          Locations
                        </li>
                        <li>
                          <a href='#'>
                            <img src='icon/call.png' alt='#' />
                          </a>
                          +12586954775{" "}
                        </li>
                        <li>
                          <a href='#'>
                            <img src='icon/email.png' alt='#' />
                          </a>
                          demo@gmail.com{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class='col-xl-12 col-lg-12 col-md-12 col-sm-12 '>
                    <ul class='social_link'>
                      <li>
                        <a href='#'>
                          <i class='fa fa-facebook' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-twitter' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i
                            class='fa fa-linkedin-square'
                            aria-hidden='true'
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-instagram' aria-hidden='true'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='container'>
            <div class='copyright'>
              <p>
                Copyright 2019 All Right Reserved By{" "}
                <a href='https://html.design/'>Free html Templates</a>
              </p>
            </div>
          </div>
        </div>
      </footr>

      <script src='js/jquery.min.js'></script>
      <script src='js/popper.min.js'></script>
      <script src='js/bootstrap.bundle.min.js'></script>
      <script src='js/jquery-3.0.0.min.js'></script>
      <script src='js/plugin.js'></script>
      {/* <!-- sidebar --> */}
      <script src='js/jquery.mCustomScrollbar.concat.min.js'></script>
      <script src='js/custom.js'></script>
      <script src='https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js'></script>
    </>
  );
};

export default Home;
