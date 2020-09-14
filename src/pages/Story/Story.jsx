import React, { useState, useEffect } from 'react'
import './story.scss'
export default function Story(props) {
 const [story, setStory] = useState({})
 //const [loading, setLoading] = useState(false);

 let storyInfo = []

 const pageLoad = () => {
  let ids = props.moreDetails.match.params.id;
  let storyDetails = props.details;
  storyInfo = storyDetails.find(st => parseInt(st.id) === parseInt(ids))

 }

 useEffect(() => {
  pageLoad()
  setStory(storyInfo);

 }, [story])


 // const getObjValues = async () => {
 //  await story && story.forEach((item, index) => {
 //   text = item.attribute_values[3].attribute_type
 //   image = item.digital_assets[0].large_thumbnail
 //  })
 // }


 if (!story) {
  return <p>Loading</p>
 } else {
  return (

   <div className="storyDetails-container">
    <p>{story.name}</p>
    <p>{story.id}</p>



   </div>
  )
 }
}
