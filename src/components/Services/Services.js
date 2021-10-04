import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
  const [services, setServices] = useState([])
  useEffect(()=>{
    fetch('./services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return (
    <div className='services-field'>
      <Menubar/>
      <div className="container ">
      <h1 className='text-center mt-5 '>OUR <span className='text-danger'>COURSES</span></h1>
      {
        services.map(service => <Service key={service.courseID} service = {service}></Service>)
      }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Services;