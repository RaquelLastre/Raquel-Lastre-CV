import React, { useState } from 'react'

export const BotonIdioma = () => {
    const [idioma, setIdioma] = useState("es");
  return (
    <button onClick={()=>setIdioma(idioma=="es"?"en":"es")}>{!idioma}</button>
  )
}
