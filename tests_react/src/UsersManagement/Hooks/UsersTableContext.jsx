import {  createContext } from "react";
import { Users } from "../Data/Users";
import React, { useContext, useState,useReducer } from "react"
 
// Reducer traitement
function ReducerTraitement(state,action){ 
    console.log("state",state)
    console.log("action",action)
    switch (action.type) {
        case "ADD_USER":
            //action.payload.putUsersList([...state.usersListe,action.payload.userToAdd])
            return (
                {
                    ...state,
                    usersListe:[...state.usersListe,action.payload.userToAdd]
                }
            )
        case "UPDATE_USER":
            // UPDATE USER
            const {updatedUser} = action.payload
            const usersListe = state.usersListe
             
            usersListe.map((user,index)=>{
                if(user.ID == updatedUser.ID) {
                    usersListe[index] = updatedUser
                }
            }) 
            return (
                {...state,usersListe:usersListe}
                )
    
        case "DELETE_USER":
            const {id} = action.payload
             const users = state.usersListe.filter(user=> user.ID  != id)
            return (
                {...state,
                    usersListe:   users
                }
                )
                default:
                    return (
                        {...state}
                        )
    }
}


//  ***** CONTEXT *****
// Context creation
export const UsersTableContext = createContext({
    usersListe:[],
    putUsersList:()=>{}
})

export function UsersTableContextProvider ({children}){
    // init Reducer
    console.log("*******UsersTableContextProvider")
    const [usersListe,dispatch] = useReducer(ReducerTraitement,{"usersListe":Users})

    // Share the reducer within the context
    return(
        <UsersTableContext.Provider value={{usersListe,"putUsersList":dispatch}}>
            {children}
         </UsersTableContext.Provider>
    )
 
}

