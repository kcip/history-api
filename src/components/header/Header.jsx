import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import Nav from '../nav/Nav'
import logo from '../../img/shape2.png'
import Social from '../social/Social'
import headerIMG from '../../img/bg1.jpg'
import './header.scss'
export default function Header() {
 return (
  <Fragment>
   <header style={{ backgroundImage: `url(${headerIMG})` }}>
    <div className="header-content-container">
     <Link to="/">
      <h1 className='headerText'>Sample Site</h1>
     </Link>

     <img className='logo' src={logo} alt='site logo' />
     <Social />
    </div>


   </header>
   <Nav />
  </Fragment>
 )
}
