import React, { ComponentProps } from "react";

type PropsType = {
  style:React.CSSProperties,
  onCLick:()=>void,
  children : React.ReactNode
  //text:string
};


//type PropsType = React.ComponentProps<"button">

export default function Btn ({style,onCLick,children} : PropsType) {
  return (
    <button onClick={onCLick} type="button" style={style}>{children}</button>
  )
  ;
}