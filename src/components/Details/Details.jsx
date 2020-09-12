import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { array } from '../../services/apiData.php'
export default function Details() {
 const [info, setInfo] = useState([])

 useEffect(() => {
  fetchData()
 });

 const fetchData = async () => {
  // let url = `../../services/api.php`;
  axios.get(array)
   .then(response => {
    console.log(response.data)
   })
   .catch(error => {
    console.log(error)
   })

 }

 return (
  <div>
   {console.log(array)}
  </div>
 )
}


