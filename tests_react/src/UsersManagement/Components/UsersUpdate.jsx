import React, { createRef, useReducer,useContext, useState, useEffect } from "react";
import { ReducerTraitement } from "../Hooks/usersTableReducer";
import { UsersTableContext } from "../Hooks/UsersTableContext";
import { AlertBox } from "./Public/AlertBox";
import { useParams } from "react-router-dom";

export default function UsersUpdate(){
const defUser =  {"ID": 0, "FULLNAME": "FULLNAME", "COUNTRY": {"NAME": "COUNTRY", "ID": 0}}
 
  // FORM REFS
  const lbtIdRef =  createRef()
  const inputFullnameRef =  createRef()
  const inputCountryRef =  createRef()

  // The id passed as param
  const {id} = useParams()

  // cal the context state and dispatcher shared via context
  const {usersListe,putUsersList} = React.useContext(UsersTableContext)
 
  const [addState,setAddState] = useState({
    "updated":false,
    "error":false
  })

  // Function to get the list of countries in the shared users object
  function getCountries(){
    let onlyCountries; 

    // array with countries only 
    onlyCountries = usersListe.usersListe.map((user)=>{
      return(
        user.COUNTRY
      )
    })
    const uniqueCountries = onlyCountries.filter((value, index, self) =>
      index === self.findIndex((t) => t.NAME === value.NAME)
    ); 

    const countriesList = uniqueCountries.map((country)=>{
      
      return <option key={country.ID} value={country.ID}>{country.NAME}</option>
       
    })
    return countriesList
  }


  const [currentUser,setCurrentUser] = useState({user:defUser})
  console.log("currentUser",currentUser.user.ID)

  useEffect(()=>{
    console.log(usersListe.usersListe)
    const user = usersListe.usersListe.filter(us=> us.ID == id)
   
    setCurrentUser(prevState=>{
      if(user.length > 0){
        return({
          ...prevState,
          user:user[0]
        })
      }else{
        return(prevState)
      }
      
    })
  },[])

  useEffect(()=>{setFormVals()},[currentUser])

  function setFormVals(){
    console.log("setFormVals")
    if(currentUser.user.ID >0){

      lbtIdRef.current.value=currentUser.user.ID
      inputFullnameRef.current.value=currentUser.user.FULLNAME
      inputCountryRef.current.value=currentUser.user.COUNTRY.ID
    }

  }

  // HANDLE FORM SUBMIT
  function handleSubmit(e){
    e.preventDefault()
    if( 
      inputFullnameRef.current.value.trim() == ""
      ||
      inputCountryRef.current.selectedIndex == 0
    ){
      setAddState(prevState=>{
        return(
          {"updated":false,"error":true}
        )
      })
    }else{
      // UPDATE USER
      const updatedUser = 
    {
      "ID": lbtIdRef.current.value,
      "FULLNAME": inputFullnameRef.current.value,
      "COUNTRY": 
        {
          "NAME": inputCountryRef.current[inputCountryRef.current.selectedIndex].text, 
          "ID": inputCountryRef.current.value
        }
    }
    console.log("updatedUser",updatedUser)
     // call the dispatcher
    putUsersList({type:"UPDATE_USER",payload:{updatedUser}})
       
        setAddState(prevState=>{
          return(
            {"updated":true,"error": false }
          )
        })
    }
  }

    
    function clearFormAfterSubmit(){
      inputFullnameRef.current.value=""
      inputCountryRef.current.selectedIndex = 0
     
    }
  
    return(
       <div className="container">
        <h1>UPDATE user</h1>
        <hr/>
        {
        currentUser.user.ID <=0
        &&
        <AlertBox 
        message="User not found"
        err={true}/> }

        {
        addState.error && 
        <AlertBox 
          message="Error in form"
          err={true}/> 
        }
        {
        addState.updated && 
        <AlertBox 
          message="Updated succefully"
          err={false}/> 
        }
        {
          currentUser.user.ID > 0
          &&
          <form style={currentUser.user.ID <=0 ? {display:"none"} : {}}>
          <div className="form-group">
            <label htmlFor="lbtId">ID</label>
           
            <input type="text" id="lbtId" ref={lbtIdRef} className="form-control" disabled/>
          </div>
          <div className="form-group">
            <label htmlFor="inputFullname">Full name</label>
            <input type="text" className="form-control" id="inputFullname" ref={inputFullnameRef}/>
          </div>
            <div className="form-group">
              <label htmlFor="inputCountry">Country</label>
              <select id="inputCountry" className="form-control" ref={inputCountryRef}>
              <option defaultValue="0">Choose...</option>
                { getCountries()}
              </select>
            </div>
            
            <button className="my-3 btn btn-success btn-lg btn-block" onClick={handleSubmit}>Update</button>
        
                    </form>
        }
            </div>
    )
}