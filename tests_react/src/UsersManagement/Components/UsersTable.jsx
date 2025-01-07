import React, { useContext, useState } from "react"
import { UsersTableContext } from "../Hooks/UsersTableContext"
import { Link } from "react-router-dom"
import Popup from 'reactjs-popup';
import { ConfirmPopup } from 'primereact/confirmpopup'; // To use <ConfirmPopup> tag
import { confirmPopup } from 'primereact/confirmpopup'; // To use confirmPopup method
import  "./Public/Style.css"    
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function UsersTable(){
const {usersListe,putUsersList} = React.useContext(UsersTableContext)
const accept = ()=>{console.log("accept")}
const notify = () => toast("Deleted !");


const handleDelete = (id)=>{
    putUsersList({type:"DELETE_USER",payload:{id:id}})
    setDeleted(true)
}
    const [visible,setVisible] = useState(false)
    const [deleted,setDeleted] = useState(false)

     // Function to build table rows
     function TableRows({setDeleted}){
        const defaultVal = 
        <tr>
            <td colSpan={4} className="text-center">
               <b>NO DATA AVAILABLE</b> 
            </td>
        </tr>
        let usersBody = defaultVal

        if(usersListe.usersListe.length >0){
            usersBody = 
            usersListe.usersListe.map((user,index)=>{
                return(
                    <tr key={user.ID}>
                    <td>{user.ID}</td>
                    <td>{user.FULLNAME}</td>
                    <td>{user.COUNTRY.NAME}</td>
                    <td>
                        <Link  className="btn btn-primary mx-1"  to={`/users/update/${user.ID}`}>Update</Link>
                        <Popup trigger=
                        {<button className="btn btn-danger">Delete</button>}
                        position="right center">
                          <div className="container mdl">
                            <div>Are you sure ?</div>
                            <button className="btn btn-success"  onClick={()=>handleDelete(user.ID)}>Confirm</button>
                        </div>  
                        
                    </Popup>
                    </td>
                </tr> 
                )
                   
            })
        } 
        
       
        return usersBody
    }

    return(
        <div className="container">
            <h1>Users</h1>
            <hr/>
            {
                deleted
                &&
                <div>
                    {notify()}
                <ToastContainer />
            </div>
            }
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FULLNAME</th>
                        <th>COUNTRY</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {  <TableRows onChange={setDeleted}/>}
                </tbody>
            </table>
        </div>
    )
}