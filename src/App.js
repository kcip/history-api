import React, { Fragment, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.scss';
import SearchResults from './pages/SearchResults/SearchResults';
import backgroundIMG from '../src/img/bg2.jpg'
import Details from '../src/components/Details/Details'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import { array } from '../src/services/api'
import Story from '../src/pages/Story/Story'
function App() {
 const [info, setInfo] = useState([])

 useEffect(() => {
  setInfo(array.results)
 }, []);

 return (
  <div className="App background-img pattern" style={{ backgroundImage: `url(${backgroundIMG})` }}>
   <Header details={info} />
   <div className='sticky'>
    <Switch>

     <Route path='/' exact
      render={props =>
       <Fragment>
        <SearchResults details={info} />
        <Details details={info} />
       </Fragment>
      } />

     <Route path='/about' exact render={props =>
      <About />
     } />

     <Route path='/contact' exact render={props =>
      <Contact />
     } />


     <Route path='/story/:id' exact render={props =>
      <Story details={info} moreDetails={props} />
     } />
    </Switch>


   </div>

   <Footer />
  </div>
 );
}

export default App;
