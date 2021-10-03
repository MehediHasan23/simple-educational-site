import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar/Menubar';
import { BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/ContactUs/Contact';

function App() {
  return (
    <div>
     <Router>
       <Switch>

       <Route exact path= '/'>
       <Home></Home>
       </Route>

       <Route exact path= '/home'>
       <Home></Home>
       </Route>

       <Route path ='/services'>
         <Services></Services>
       </Route>

       <Route path='/about'>
         <AboutUs></AboutUs>
       </Route>

       <Route path='/contact'>
         <Contact></Contact>
       </Route>
       
       <Route path='*'>
         <Error></Error>
       </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
