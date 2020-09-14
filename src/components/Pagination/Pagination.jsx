import React from 'react'
import './paginate.scss'
//import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
export default function Pagination({ storyPerPage, totalStories, paginate }) {

 const pageNumbers = []

 for (let i = 1; i <= Math.ceil(totalStories / storyPerPage); i++) {
  pageNumbers.push(i)
 }

 return (
  <div className="pagination">
   <FontAwesomeIcon icon={faCaretLeft} />
   {pageNumbers.map(number => (
    <li key={number} className='page-item'>
     <div onClick={() => paginate(number)} className='page-link'>
      {number}
     </div>
    </li>
   ))}
   <FontAwesomeIcon icon={faCaretRight} />
  </div>
 )
}
