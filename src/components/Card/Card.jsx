import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './card.scss'
const Card = (props) => {
 const name = props.item.name
 const id = props.item.id
 const date = props.item.attribute_values[1].value.date
 const description = props.item.attribute_values[3].value.text
 const image = props.item.digital_assets[0].large_thumbnail
 return (
  <Link to={`/story/${id}`} exact>
   <div className='card'>
    <div className="card-contents">
     <img src={image} alt={name} />
    </div>
    <div className="card-contents text text-title">
     <p>{name}</p>
    </div>
    <div className="card-contents text">
     <p>{date}</p>
    </div>
    <div className="card-contents text-details">
     <p>{description.substring(0, 200)}</p>
    </div>
   </div>
  </Link>

 )
}
export default withRouter(Card);