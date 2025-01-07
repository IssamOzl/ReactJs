import React from "react"
import { createPortal } from "react-dom"
function Modal(){
    // pour la mettre a la reacine on va utiliser createPortal
    // return(
        // <div
        // style={{
        //     position:"absolute",
        //     top:"0",
        //     right:"0",
        //     padding:"10px",
        //     background:"#fff"
        // }}
        // >
        //     je suis modal
        // </div>
    // )
    return createPortal(
        <div
        style={{
            position:"absolute",
            top:"0",
            right:"0",
            padding:"10px",
            background:"#fff"
        }}
        >
            je suis modal
        </div>,
        document.body
    )
}
export default function Def(){
    return(
        <div
            style={
                {
                    background:"#EEE",
                    height:300,
                    overflowY:"scroll",
                    margin:20,
                    position:"relative"
                }
            }
        >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eaque dolores cum. Facilis totam tenetur, cupiditate eius excepturi dolor at aliquid eos neque iure illo, adipisci debitis atque deleniti saepe.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eaque dolores cum. Facilis totam tenetur, cupiditate eius excepturi dolor at aliquid eos neque iure illo, adipisci debitis atque deleniti saepe.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eaque dolores cum. Facilis totam tenetur, cupiditate eius excepturi dolor at aliquid eos neque iure illo, adipisci debitis atque deleniti saepe.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eaque dolores cum. Facilis totam tenetur, cupiditate eius excepturi dolor at aliquid eos neque iure illo, adipisci debitis atque deleniti saepe.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eaque dolores cum. Facilis totam tenetur, cupiditate eius excepturi dolor at aliquid eos neque iure illo, adipisci debitis atque deleniti saepe.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eaque dolores cum. Facilis totam tenetur, cupiditate eius excepturi dolor at aliquid eos neque iure illo, adipisci debitis atque deleniti saepe.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eaque dolores cum. Facilis totam tenetur, cupiditate eius excepturi dolor at aliquid eos neque iure illo, adipisci debitis atque deleniti saepe.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eaque dolores cum. Facilis totam tenetur, cupiditate eius excepturi dolor at aliquid eos neque iure illo, adipisci debitis atque deleniti saepe.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eaque dolores cum. Facilis totam tenetur, cupiditate eius excepturi dolor at aliquid eos neque iure illo, adipisci debitis atque deleniti saepe.</p>
        <Modal/>
        </div>
    )
}