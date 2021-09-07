import React,{useState,Fragment} from 'react';
import './Stylling.css';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import data from './mock-data.json';
import {nanoid} from 'nanoid';
import Userinfor from './Userinfor';
import { toast, ToastContainer } from 'react-toastify';
import Prop from './Prop';


const Users = () => {
    const [contacts,setContacts]=useState(data);
    const [newid,setNewid]=useState(null)
    const [addFormData,setAddFormData]=useState(
        {
            fullName:'',
            address:'',
            phonenumber:'', 
            email:'' 

        }
        
    )

    const handleAddFormChange=(e)=>{
        e.preventDefault();
        const fieldName =e.target.getAttribute("name");
        const fieldValue =e.target.value;

        const newformData={...addFormData}; 
        newformData[fieldName]=fieldValue;
        setAddFormData(newformData); 
        
    }

    
    const handleAddFormSubmit=(e)=>{
        e.preventDefault();
        
        const newContact={
            id:nanoid(),
            fullName:addFormData.fullName, 
            address:addFormData.address,
            phonenumber:addFormData.phonenumber,
            email:addFormData.email,
            
        };
        const newContacts=[...contacts,newContact];
    setContacts(newContacts);
    
    };

    

   const handleDeleteClick=(contactId)=>{
       const newContacts =[...contacts];

       const index=contacts.findIndex((contact)=>contact.id === contactId)
       newContacts.splice(index,1);

       setContacts(newContacts);
   } 
   
   const handleUser=(contactid)=>{
       setNewid(contactid);
   }
// const checkEmail = contacts.find((contact)=> contact.email ===  addFormData.email);
// if(checkEmail){
//     return toast.error("this email already exists")
// }
    return ( 
        <Router>
            <ToastContainer/>
        <div className="coverpage">
        <form onSubmit={handleAddFormSubmit} className="form1">
            <h2>Registration Form</h2>
            <table>
                <tr>
                    <td>Name</td>
                    <td>
                    <input type="text"
             name="fullName"
            
              required="required"
              placeholder="Enter a name.."
              onChange={handleAddFormChange}></input>
                    </td>
                </tr>
                <tr>
                    <td>Surname</td>
                    <td>
                    <input type="text"
             name="address"
              required="required"
              placeholder="Enter a Surname.."
              onChange={handleAddFormChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Location</td>
                    <td>
                    <input type="text"
             name="phonenumber"
              required="required"
              placeholder="Enter a Location.."
              onChange={handleAddFormChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>
                    <input type="email"
             name="email"
              required="required"
              placeholder="Enter a email.."
              onChange={handleAddFormChange}/>
              
                    </td>
                </tr>
                
                <tr><button type="submit">Add Users</button></tr>
            </table>
              
        </form>
        <div className="boxuser" >
       <h2>List of Users</h2>
            

        {contacts.length>0 ?(contacts.map((action) =>
            <Link to={"/UsersInfor/"+ action.id} >
            
            <p>{action.fullName}  {action.address}    
              </p></Link> )):(
                  <div>No Users.. </div>
              )
            }
            {/* {contacts.length>0 ?(contacts.map((action) =>
// to={"/UsersInfor/"+ action.id}
            <Link to="Prop" >
            
            <p>{action.fullName}  {action.address}    
              </p></Link> )):(
                  <div>No Users </div>
              )
            } */}
            </div>
            
            <Switch>
            <Route path="/UsersInfor/:id">
                
           {contacts.map((d)=>(
               <Fragment>
                   
                       <Userinfor  d={d}
                       handleDeleteClick={handleDeleteClick}
                       />
                  
                        </Fragment>
                        ))}
                    </Route>
                   
            </Switch>
            
        </div>
        </Router>
     );
}
 
export default Users;