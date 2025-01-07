import "bootstrap/dist/css/bootstrap.min.css"
import Data from "./Data"
import React,{useState} from "react";
import ReactDOM from 'react-dom';
import Input from "./Input";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";


export default function ProductTable(){
    let lastCat = null
   // const [myProds,setMyProds] = useState(Data)
    const [formInput,setFormInput] = useState({
        onlyInStock:false,
        searchKey:""
    })
    console.log("Rerender")
    const prods = Data.filter((prod)=>{
        if(formInput.onlyInStock)
        {
            if(prod.stock>0  && prod.name.includes(formInput.searchKey)) return prod
        } else{
            if( prod.name.includes(formInput.searchKey)) return prod

        }
    })
    function handleForm(e){
        // search key
        let val;
        if(e.target.type === "text"){
            val = e.target.value
        }else{
            val = e.target.checked
        } 
        setFormInput((prevState)=>{  
            return {...prevState,[e.target.id]:val}
            
        }) 
    }

     

    let rows = [];
    prods.map((fruit)=>{
        if(fruit.category != lastCat){
            rows.push(<ProductCategoryRow key={fruit.category} val={fruit.category}/>)
        }
        lastCat = fruit.category 
        rows.push(<ProductRow key={fruit.name} prod={fruit} />)
    })

    return(
        <div className="container">
            <Input data={formInput} handler={handleForm}/>
            <table className="table">
                <thead>
                    <tr>
                        <th >Nom</th>
                        <th >Prix</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                
            </table>
        </div>
    )
}