import React, { useCallback } from "react"


interface QantityBoxProps {
    max: number |undefined
    setQte:React.Dispatch<React.SetStateAction<number>>
     qte:number
}

export default function QantityBox({ max = 0,setQte, qte}: QantityBoxProps) {

    const incrementQte = useCallback(()=>{setQte((oldQte)=>oldQte < max ? oldQte+1 : max)},[max])
    const decrementQte = useCallback(()=>{setQte((oldQte)=>oldQte >1 ? oldQte-1 : 1)},[max])
    return (
        <div style={{marginTop:"30px"}}>
            <div className="quantity_title">
                Quantité :
            </div>
            <div className="input-group" style={{ width: "120px",    marginTop: "20px" }}>
                <button className="btn btn-success btn-number" type="button" id="button-addon1" style={{ background: "#7EC855" }} onClick={  incrementQte}>+</button>
                <input readOnly  value={qte} min="1" max={max} style={{ width: "50px",textAlign:"center" }} type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <button className="btn btn-danger btn-number btn-minus " type="button" id="button-addon1" onClick={ decrementQte}>-</button>
            </div>
             
        </div>
    )
}
