import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './subnav.scss'
export default function SubNav(props) {

 const [storyCount, setStoryCount] = useState('')


 useEffect(() => {
  const num = props.info.details.length;
  setStoryCount(num)
 }, [props.info.details.length])


 return (
  <Fragment>
   <div className='subNav'>
    <div className="subNav-text">
     <h1 className='subNav-h1'>Collection Name</h1>
     <h4 className='subNav-h4'>Box Name - Folder Name</h4>
    </div>
    <div className="results-container">
     <h5>{storyCount} results</h5>
    </div>
   </div>
   <div className="project-details">
    <div className='span-spacing'></div>
    <Link className='subNav-links'>Title</Link>
    <Link className='subNav-links'>Year</Link>
    <Link className='subNav-links'>Description</Link>

   </div>

  </Fragment>

 )
}
