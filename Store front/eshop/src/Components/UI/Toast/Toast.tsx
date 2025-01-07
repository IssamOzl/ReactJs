import React from 'react'
import { toast } from 'react-toastify';

 

export default function Toast() {
    const notify = (message : string) => toast.info(message, {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })

  return {notify}
}
