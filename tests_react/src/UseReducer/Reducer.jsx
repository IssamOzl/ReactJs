import React, { useReducer } from "react"

function Traitement(state,action){
    console.log('traitement',"render")
    console.log( {state,action})
    

    if(action.type === "REMOVE_TODO"){
        return{
            ...state,
            todos : state.todos.filter(todo=>todo.name !== action.payload.name)
        } 
    }
    if(action.type==="CHECK_TODO"){
        return{
            ...state,
            todos:state.todos.map(todo=>todo === action.payload ? {...todo,checked:!todo.checked} :todo )

        }
    } 
    if(action.type==="DELETE_TODOS"){
        return{
            ...state,
            todos:state.todos.filter(todo=>!todo.checked)
        }
    }
    return state
}

export default function Reducer(){
    console.log('Reducer',"render")
    const [state,dispatch] = useReducer(Traitement,{
        todos:[
            {
                name:"Task1",
                checked:false
            },
            {
                name:"Task2",
                checked:false
            },
            {
                name:"Task3",
                checked:false
            },
            {
                name:"Task4",
                checked:false
            },
        ]
    })

    return(
        <>
        <ul>
        {state.todos.map(todo=>(<li 
                                    key={todo.name}>
                                    {todo.name}
                                    <input 
                                        type="checkbox" 
                                        checked={todo.checked}
                                        onChange={()=>dispatch({type:"CHECK_TODO",payload:todo})}
                                        />
                                    <button
                                        onClick={()=>dispatch({type:"REMOVE_TODO",payload:todo})}
                                    >
                                        Supprimer
                                    </button>
                                </li>))}
        </ul>
        {state.todos.length >0 
        ? 
        <button
        onClick={()=>dispatch({type:"DELETE_TODOS",payload:null})}
        >
            Delete selection
        </button>
        :
        <p>State is empty</p>
        }
        </>
    )
}