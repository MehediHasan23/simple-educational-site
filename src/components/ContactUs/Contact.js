import React from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-section'>
      <Menubar/>
      <h1 className='text-center mt-5'><span className='text-danger'>CONTACT </span>WITH US</h1>
      <div className="row d-flex justify-content-around    align-items-center contact-container bg-light ">
        <div className="col-7 text-center details">
        <h1><span className='text-warning title-word'>Build the</span> <br />  workforce of <br /> tomorrow<span className='text-warning' >,</span> <span className='text-warning'>today</span></h1>
          <p className='mt-5'>Create essential skills pathways with verifiable and stackable credentials to upskill and train every employee with the highest quality elearning experiences, in today's most job-relevant subject areas. Unlock the potential of your organization with edX For Business.</p>
        </div>

        <div className="col-4 ">
         
          <div>
                  <form className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4"/>
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4"/>
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
          </div>
          <div className="col-12">
            <label for="inputAddress2" className="form-label">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity"/>
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label for="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip"/>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck"/>
              <label className="form-check-label" for="gridCheck"/>
                Check me out
              
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-warning w-25">Sign in</button>
          </div>
        </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;