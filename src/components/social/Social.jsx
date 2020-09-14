import React from 'react'

import WhiteTwitterImg from '../../img/social/twitter_w.png'
import WhiteFacebookImg from '../../img/social/facebook_w.png'
import './social.scss'
export default function Social() {

 return (
  <div>
   <img className='social-icons' style={{ maxWidth: '31px' }} src={WhiteTwitterImg} alt='twitter social icon' />
   <img className='social-icons' style={{ maxWidth: '31px' }} src={WhiteFacebookImg} alt='facebook social icon' />
  </div>
 )
}
