import React, { useState, useEffect, Fragment } from 'react';
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'
export default function Details(props) {

 const [pages, setPages] = useState([])
 const [loading, setLoading] = useState(false)
 const [currentPage, setCurrentPage] = useState(1)
 const [storyPerPage] = useState(5)

 useEffect(() => {
  const propsDetails = props.details
  setLoading(true);
  setPages(propsDetails)
  setLoading(false)
  console.log(pages)
 }, [pages])

 //get story #'s
 const indexOfLastStory = currentPage * storyPerPage;
 const indexOfFirstStory = indexOfLastStory - storyPerPage;
 const currentStory = pages.slice(indexOfFirstStory, indexOfLastStory)
 const paginiate = pageNumber => setCurrentPage(pageNumber)

 return (
  <Fragment>
   <div className="card-container">
    {
     currentStory
      // props.details && props.details
      .filter((item, idx) => idx < storyPerPage)
      .map((item) => (
       <Card key={item.id} item={item} />
      ))
    }

   </div>
   <Pagination
    storyPerPage={storyPerPage}
    totalStories={pages.length}
    paginate={paginiate}

   />
  </Fragment>




 )
}


