import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'
export default function Nav() {
 return (
  <nav>
   <ul>
    <li>
     <NavLink to='/about'>
      about us
     </NavLink>
    </li>
    <li>
     <NavLink to='/contact'>
      contact
     </NavLink>
    </li>
   </ul>
  </nav>
 )
}
