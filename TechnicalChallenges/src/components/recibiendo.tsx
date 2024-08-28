import React from 'react'


interface recibiendoProps {
    name: string
    yers: number,
    adress: string
}
export default function recibiendo({name, yers, adress} : recibiendoProps) {
 
  return (
      <div>
            <h1>Primer Component { name}</h1>
            <h2>Edad: {yers}</h2>
            <h3>Dirección: {adress}</h3>
      
    </div>
  )
}
