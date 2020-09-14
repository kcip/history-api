import React from 'react'
import { Link } from 'react-router-dom'

import BlackTwitterImg from '../../img/social/twitter_b.png'
import BlackFacebookImg from '../../img/social/facebook_b.png'
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
     <img className='social-icons' style={{ maxWidth: '31px' }} src={BlackTwitterImg} alt='twitter social icon' />
     <img className='social-icons' style={{ maxWidth: '31px' }} src={BlackFacebookImg} alt='facebook social icon' />
    </div>
   </div>
  </footer>
 )
}
