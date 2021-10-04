import React from 'react';
import './Error.css'

const Error = () => {
  return (
    <div>
      
      <div className=" error  bg-danger p-5 rounded">
      <h1 className='text-center text-white fs-2 fw-bold my-5'>ERROR 404 NOT FOUND</h1>
      <h3 className='text-center text-light'>The server responsible for the website is not running or the connection is broken</h3>
      <div className='d-flex justify-content-around'>
      <button className='btn btn-outline-light w-25 rounder mt-5'>PREVIOUS</button>
      <button className='btn btn-outline-light w-25 rounder mt-5'>HOME</button>
      </div>
      </div>
      
    </div>
  );
};

export default Error;