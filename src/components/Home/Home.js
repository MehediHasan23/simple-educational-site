import React from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Menubar></Menubar>
      <h1>hello home</h1>

      <Footer></Footer>
    </div>
  );
};

export default Home;