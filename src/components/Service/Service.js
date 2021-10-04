import React from 'react';
import './Service.css';

const Service = (props) => {
  const {Institution, img, Language, Level, Price, Subject, VideoTranscript, aboutCourse, aboutLearning, duration, programBadge }= props.service
  return (
    
      <div className="service-container bg-light" >
      <div className="row d-flex align-items-center ">
        <div className="col-5 service-img ">
        <img className="w-80" src={img} alt="" />
        <div className='text-center mt-4'>
        <h3 className='text-warning' >{Institution}</h3>
        <h4>Subject: {Subject}</h4>
        <h6>Level: {Level}</h6>
        <h6>Price: {Price}</h6>
        </div>
        </div>
        <div className="col-7 text-center">
        
        <h2>{programBadge}</h2>
        <h6>Duration: {duration}</h6>
        <p><span className='fw-bold'>What you learn:</span> {aboutLearning}</p>
        <p><span className='fw-bold'>About Course:</span> {aboutCourse}</p>
        <button className="btn btn-success fw-bold">ENROLL NOW</button>
        </div>
      </div>
      
      
    </div>
   
  );
};

export default Service;