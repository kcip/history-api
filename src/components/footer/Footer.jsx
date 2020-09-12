import React from 'react'
import { Link } from 'react-router-dom'
import Social from '../social/Social'
import './footer.scss'
export default function Footer() {
 return (
  <footer>
   <div className="footer-nav">
    <div className="navLinks">
     <Link to='/'>Home</Link>&nbsp;|&nbsp;
     <Link className="mid-link" to='about'>About us</Link>&nbsp;|&nbsp;
     <Link to='contact'>Contact</Link>

    </div>
    <span className="line-span"></span>
    <div className="social-container">
     <Social />
    </div>
   </div>
  </footer>
 )
}
