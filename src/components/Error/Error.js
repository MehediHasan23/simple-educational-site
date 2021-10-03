import React from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import './Error.css'

const Error = () => {
  return (
    <div>
      <Menubar></Menubar>
      <h1 className='text-center bg-warning text-white fs-2 fw-bold'>ERROR 404 NOT FOUND</h1>
      <Footer></Footer>
    </div>
  );
};

export default Error;