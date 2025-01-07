import React from "react";
import UseIncrement from "./UseIncrement";
import UseFetch from "./UseFetch";

    /**
     * 
     * @param {boolean} initial 
     */
   /* function Toggle(initial = false){
        const [state,setState] = React.useState(initial)

        const changeToggle = ()=>{
            setState(prevState=>!prevState)
        }

        return [state,changeToggle]
    }*/


export default function UseToggle(){


    //const [check,setChek] = Toggle
    //const [count,inc,dec] = UseIncrement(0,1)
    const {loading,data,errors} = UseFetch("https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=9000")
    let myLis = []
    return(
        <div>
            {loading && <div className="alert alert-primary my-3 mx-3">loading...</div>}
            {errors && <div className="alert alert-danger my-3 mx-3">{errors.toString()}</div>}
            {data && data.map((post)=>{
                        myLis.push(<li key= {post.id}> {post.title}</li>)
                    })
            }
            {myLis.length>0 && myLis}
        </div>
       /* <div>
            Compteur :{count}
            <button onClick={inc}>
                Increment
            </button>
            <button onClick={dec}>
                Decrement
            </button>
        </div>*/

    )
}