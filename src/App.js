import React from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.scss';
import SearchResults from './pages/SearchResults/SearchResults';
import backgroundIMG from '../src/img/bg2.jpg'
import Details from '../src/components/Details/Details'



function App() {
 return (
  <div className="App background-img pattern" style={{ backgroundImage: `url(${backgroundIMG})` }}>
   <Header />
   <div className='sticky'>
    <SearchResults />
    <Details />
   </div>

   <Footer />
  </div>
 );
}

export default App;
