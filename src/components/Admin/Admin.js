
import { Add, Dashboard, Edit } from '@material-ui/icons';
import React, { useState } from 'react';
import AddFood from '../AddFood/AddFood';
import ManageFood from '../ManageFood/ManageFood';
import './Admin.css'

const Admin = () => {
  const [isManage,setIsManage] = useState(true)
  
  return (
    <div className='admin_panel'>
    <div className="header">
     <p onClick={()=>setIsManage(true)}><Dashboard/>  Manage Food item</p>
      <p onClick={()=>setIsManage(false)}><Add/>   Add food item</p>
      <p> <Edit/>   Edit food item</p>
    </div>
    <div className="body">
   <div className="addition">
   {isManage &&
      <ManageFood></ManageFood>
    }  
   </div>
   <div className="managing">
   {!isManage  &&
     <AddFood></AddFood>
    }
   </div>
     
    </div>
      
    </div>
  );
};

export default Admin;