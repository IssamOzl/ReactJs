import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Thanks() {
  const [count, setCount] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    // If the count is greater than 0, start the countdown
    if (count > 0) {
      const timer: NodeJS.Timeout = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000); // Decrease the count every second

      // Cleanup the interval when the countdown finishes
      return () => clearInterval(timer);
    }else{
     navigate("/",{ replace: true })
    }
  }, [count]); // This effect runs whenever the count changes

  // useEffect(() => {
  //   // If the count is greater than 0, start the countdown
  //   if (count > 0) {
  //     const timer = setInterval(() => {
  //       setCount(prevCount => prevCount - 1);
  //     }, 1000); // Decrease the count every second

  //     // Cleanup the interval when the countdown finishes
  //    // return () => clearInterval(timer);
  //   }
  // }, [count]); // This effect runs whenever the count changes

  return (
    <div className="container">
      <div className="card">
        <div className="container-fliud">
          <div className="col-md-12">
            <div className="lx-cart-thanks">
              <p>
                <i className="fa fa-check-circle"></i><br />
                Votre commande a été enregistrée avec succès <br />
                Nous vous contacterons dans moins de 24 heures pour confirmer votre commande
                <br />
                Merci pour votre confiance !  <br /><br />
                Vous serez redirigé vers la page d'accueil après
                <strong className="countdown"> {count} </strong> secondes.
              </p>
              <div className="lx-cart-thanks-btns">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
} 