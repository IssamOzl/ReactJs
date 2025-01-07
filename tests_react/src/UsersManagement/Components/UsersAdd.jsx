import React, { createRef, useReducer,useContext, useState } from "react";
import { ReducerTraitement } from "../Hooks/usersTableReducer";
import { UsersTableContext } from "../Hooks/UsersTableContext";
import { AlertBox } from "./Public/AlertBox";

export default function UsersAdd(){
  // FORM REFS
  const lbtIdRef =  createRef()
  const inputFullnameRef =  createRef()
  const inputCountryRef =  createRef()
  
  const [addState,setAddState] = useState({
    "added":false,
    "error":false
  })

  // cal the context state and dispatcher shared via context
  const {usersListe,putUsersList} = React.useContext(UsersTableContext)
 console.log("usersListe=>",usersListe)
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
          {"added":false,"error":true}
        )
      })
    }else{
      const userToAdd = 
    {
      "ID": lbtIdRef.current.value,
      "FULLNAME": inputFullnameRef.current.value,
      "COUNTRY": 
        {
          "NAME": inputCountryRef.current[inputCountryRef.current.selectedIndex].text, 
          "ID": inputCountryRef.current.value
        }
    }

    //CALL THE ADD ACTION ON REDUCER
    putUsersList({type:"ADD_USER",payload:{userToAdd}})
    clearFormAfterSubmit()
    setAddState(prevState=>{
      return(
        {"error":false,"added":true}
      )
    })
    }
    
    }
    
    function clearFormAfterSubmit(){
      inputFullnameRef.current.value=""
      inputCountryRef.current.selectedIndex = 0
     
    }
  console.log("add state",addState)
    return(
       <div className="container">
        <h1>ADD USER</h1>
        <hr/>
        {
        addState.added && 
        <AlertBox 
          message="User Added"
          err={false}/> 
        }
        {
        addState.error && 
        <AlertBox 
          message="Error in form"
          err={true}/> 
        }
            <form>
  <div className="form-group">
    <label htmlFor="lbtId">ID</label>
    <input type="text" value={usersListe.usersListe.length +1} id="lbtId" ref={lbtIdRef} className="form-control" disabled/>
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
    
    <button className="my-3 btn btn-primary btn-lg btn-block" onClick={handleSubmit}>Add user</button>

            </form>
            </div>
    )
}