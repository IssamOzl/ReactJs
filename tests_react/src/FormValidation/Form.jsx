import React, { useContext, useRef, useState } from "react";
import { isChecked, isEMailValid, isEmpty } from "./FormVerifications";
import { DarkModeContext } from "../UseContext/DarkMode";
 

export default function Form(){

    const name = useRef("")
    const email = useRef("")
    const message= useRef("")
    const checkConditions = useRef(false)

    const [errors,setErrors] = useState([])
    const [submited,setSubmited] = useState(false)
    const  {mode,toggleMode} = useContext(DarkModeContext)

   console.log(mode)
    
    
  

    function clearForm(){
       
         name.current.value = ''
         email.current.value=''
         message.current.value=''
         checkConditions.current.checked=false
    }
    function checkSubmited(){

        if(submited){
            clearForm()
            return <div className="alert alert-success">Form sent</div>
        } 
    }
    function mapErrors(){
        let lis;
        let retDom;
         
            lis = errors.map((err,indice)=><li key={err.field}>{err.field} : {err.message}</li>)
            retDom = (
                <div className="alert alert-danger">
                    <ul>
                        {lis}
                    </ul>
                </div>
            )
           
        return retDom
    }

    function handleClick(e){
        e.preventDefault()
        
        setErrors([])
        // Name Verification
        if(isEmpty(name.current.value)){
            setErrors(prevState=>[...prevState,{field:name.current.name,message:"could not be empty"}])
        } 
        // Email Verification
        if(isEmpty(email.current.value)){
            setErrors(prevState=>[...prevState,{field:email.current.name,message:"could not be empty"}])
        } else if( !isEMailValid(email.current.value)){
            setErrors(prevState=>[...prevState,{field:"Email Validation",message:"email invalide"}])

        // message Verification
        if(isEmpty(message.current.value)){
            setErrors(prevState=>[...prevState,{field:message.current.name,message:"could not be empty"}])
        } 
        }
        if(!isChecked(checkConditions.current.checked)){
            setErrors(prevState=>[...prevState,{field:checkConditions.current.name,message:"could not be unchecked"}])

        }
        
        if(errors.length === 0) setSubmited(true)
    }
    
    
    return(
        
            
        <div className="container">
             <button onClick={toggleMode}>{mode}</button>
            {errors.length>0 ? mapErrors() :  checkSubmited() } 
            <form>
            <h2>Form Validation</h2>
            <hr/>
            
            <div className="form-group">
              <label htmlFor="txtName">Name</label>
              <input type="text" name="Name" ref={name} id="txtName" className="form-control" />
            </div>

            
            <div className="form-group">
              <label htmlFor="txtName">Email</label>
              <input type="text" name="Email" ref={email}  id="txtEmail" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="txtMessage">Message</label>
              <textarea name="Message" id="txtMessage" ref={message} className="form-control" />
            </div>
            
            <div className="form-check my-3">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" ref={checkConditions} name="checkConditions" id="checkConditions"/>
                Accept all conditions
              </label>
            </div> 
            <button className="btn btn-primary w-100 " onClick={handleClick}>
                Submit
            </button>
            </form>
        </div>
     
        
    )
}