import React from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className ='about-container bg-light'>
      <Menubar/>
      <h1 className='text-center mt-6 '><span className='text-danger '>ABOUT</span> US</h1>
      <div className='row mt-5 p-2 mx-3 about-section d-flex justify-content-around'>
      <div className="col-5 text-center">
          <h3 className='text-warning'>About our course</h3>
          <p>There are countless online education marketplaces on the internet.
        completion rate in the industry.</p>
        <p> And the reason is, we don’t give up. When a student commits to acourse, we commit to the student. We are not going to sugar coat
          it - we will make you complete, come what may. You  not have
          given much thought to what you are signing up for, but  believe
          you are signing up for knowledge that is useful   complete. We
          are ridiculously committed to our students. Be it constant
          reminders, relentless masters or 24 x 7 online support we will
          absolutely make sure that you run out of excuses to   complete
          the course.</p>
          <h5 className='text-warning'>Our Vision</h5>
          <p>
            To become the largest online learning ecosystem for continuing
          seducation, in partnership with corporates and academia.
        </p>
      </div>
      <div className="col-6 text-center">
      <div>
      <h3 className='text-warning'>Our Mission</h3>
       <p>
       To create an alternate platform for students who wish to continue
        and complete courses by attending live online courses, using a
        team of ridiculously committed educators who will stop at nothing
        to impart education, helped by a 24 x 7 support system. By
        deploying our world class team of industry experts, we aim to
        educate our learners with the skills they need to advance their
        professional life to the next level.
        </p>
        <h5 className='text-warning my-3'>Sign up for our monthly newsletter</h5>
        <p className='text-center'>Please Note: Learners who successfully complete this IBM course can earn a skill badge — a detailed, verifiable and digital credential that profiles the knowledge and skills you’ve acquired in this course. Enroll to learn more, complete the course and claim your badge!</p>
      </div>
      <div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label ">Email address</label>
          <input  type="email" className="form-control" id="exampleFormControlInput1" placeholder="enter your email"/>
        </div>
        
        <button className="btn btn-outline-secondary">SUBMIT</button>
        </div>
      </div>
      <div>
      </div>

      </div>
      

      <Footer></Footer>
    </div>
  );
};

export default AboutUs;