import React from 'react'
import { useState,  } from 'react'

interface HelloWordProps {
    name: string
    
}

export default function HelloWord({name} : HelloWordProps) {
    const [helloWord, setHelloWord] = useState('Hello World')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHelloWord(event.target.value)
      }
  return (
      <div>
          <h1>Primer Component { name}</h1>

          <input
        type="text"
         // Vincular el valor del input con el estado
        onChange={handleInputChange} // Llamar a la función handleInputChange en cada cambio del input
      />
          <p>{helloWord}
                </p>          
    </div>
  )
}
