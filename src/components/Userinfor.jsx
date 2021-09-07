
import React, { useState, useEffect } from 'react'

import { Router } from 'react-router';
import './Stylling.css';
import data from './mock-data.json';
import {useParams} from 'react-router-dom'


const Userinfor = ({d,handleDeleteClick}) => {
    // const [fullname, setfullname] = useState("")
const  id = useParams();






    return ( 
        <div className="app-container">
            <div className="usersbox">
            {/* {JSON.stringify(id)} */}
            
            
          
            <p>Hi {d.fullName} your surname is {d.address}<br/>
            and your location is {d.phonenumber} with email {d.email}</p>
     
                   
        <button type="button" onClick={()=>handleDeleteClick(d.id)} className="buttondelete">Delete</button>
        </div>
        </div>
     );
}
 
export default Userinfor;