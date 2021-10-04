import React from 'react';
import './Service.css';

const Service = (props) => {
  const {Institution, img, Language, Level, Price, Subject, VideoTranscript, aboutCourse, aboutLearning, duration, programBadge }= props.service
  return (
    <div className="service-container " >
      <div className="row d-flex align-items-center ">
        <div className="col-5 service-img ">
        <img className="w-80" src={img} alt="" />
        </div>
        <div className="col-7 text-center">
        <h3 >{Institution}</h3>
        <h6>Subject: {Subject}</h6>
        <h6>Level: {Level}</h6>
        <h6>Price: {Price}</h6>
        <h6>Badge: {programBadge}</h6>
        <h6>Duration: {duration}</h6>
        <p>What you learn: {aboutLearning}</p>
        <p>About Course: {aboutCourse}</p>
        </div>
      </div>
      
      
    </div>
  );
};

export default Service;