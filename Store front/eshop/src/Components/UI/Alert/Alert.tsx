export enum alertType
{
    primary = "primary",
    secondary ="secondary" ,
    success ="success" ,
    danger = "danger",
    warning ="warning" ,
    info = "info",
    light = "light",
    dark = "dark"
}

type alertProps = {
    text:string,
    type:alertType
}
export default function Alert({text,type}:alertProps) {
  return (

    <div className={`alert alert-${alertType[type]} alert-error`} role="alert">
        {text}
    </div>
  )
}
