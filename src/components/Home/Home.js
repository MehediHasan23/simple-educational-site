import React, { useEffect, useState } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menubar from '../Menubar/Menubar';
import './Home.css';

const Home = () => {
  const [courses, setCourses] = useState([])
  useEffect(()=>{
    fetch('./home.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  },[])
  return (
    <div className='home-section'>
      <Menubar></Menubar>
      <Header></Header>
      
      <div>
        <h1 className='title text-center mt-5'><span className='text-danger'>OUR LATEST</span> COURSE</h1>
      </div>
      <div className="courses">
        <div className="row">
          {courses?.map((course)=> 
          <div key={course.id} className="col-md-3">
            
          <div className="cart bg-light home-cart ">
            <div className="img-details">
              <img className='img-fluid' src={course.img} alt="" />
            </div>
            <div className="text-area">
              <h4 className='text-center'>{course.name}</h4>
              <p className='text-center'>Course-Quantity: {course.courseQuantity}</p>
              <p className='fw-bold text-center'>Price: {course.price}</p>
              <div className='d-flex justify-content-around'>
              <button className='btn btn-outline-success'>Details</button>
              <button className='btn btn-outline-success'>Enroll</button>
              </div>
              
            </div>
          </div>
        </div>
          )

          }
        </div>
      </div>
      
      

      <Footer></Footer>
    </div>
  );
};

export default Home;