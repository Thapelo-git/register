import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Stylling.css'

const Prop = ({props}) => {
   
    const [data,setData]=useState(props)
    // const  id = useParams();
    // const [newid,setNewid]=useState(null)
    const {id:id}=useParams();
    // const newContacts=[...data];
    // setData(newContacts);
    // const newContacts =[...data];

    // const index=data.findIndex((contact)=>contact.id === id)
    // newContacts.push(index,1);

    // setData(newContacts);
    return (
        <div className="containerprop">
             
            {data.length}
            {/* id{JSON.stringify(id)} */}
            {data.map(action=>
          
            <li>{action.id}{action.fullName}</li>
           
            )}
            
        </div>
    )
}

export default Prop
