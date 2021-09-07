import React from "react";

const Editable = ({editFormData,handleEditFormChane,handleCancelClick}) => {
    return ( 
        <tr>
            <td>
                <input type="text" required="required" 
                placeholder="Enter your name" 
                name="fullName"
                value={editFormData.fullName}
                onChange={handleEditFormChane}></input>
            </td>
            <td>
                <input type="text" required="required" 
                placeholder="Enter your Surname" 
                name="address" value={editFormData.address}
                onChange={handleEditFormChane}></input>
            </td>
            <td>
                <input type="text" required="required" 
                placeholder="Enter your Location" 
                name="phonenumber" value={editFormData.phonenumber}
                onChange={handleEditFormChane}></input>
            </td>
            <td>
                <input type="email" required="required" 
                placeholder="Enter your email" 
                name="email" value={editFormData.email}
                onChange={handleEditFormChane}></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
     );
}
 
export default Editable;