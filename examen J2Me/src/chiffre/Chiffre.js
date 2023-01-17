import React, { useState, useRef } from 'react'
// import { arabicToRoman, romanToArabic } from './convert'
import aratorom from './aratorom'
import romtoara from './romtoara'

function Chiffre() {
  const inputRef = useRef(null)
  const [inputType, setInputType] = useState("number")


  const [secondUnit, setSecondUnit] = useState("chiffre romain")
  const [secondValue, setSecondValue] = useState("")

  function handleChange(event) {
    if (event.target.value === "CA") {
      setSecondUnit("chiffre romain")
      setInputType("number")
    }
    else {
      setSecondUnit("chiffre arabe")
      setInputType("text")

    }
  }
  function handleClick(event) {
    event.preventDefault()
    console.log('mande ny boutton ')
    if (secondUnit === "chiffre romain") {
      setSecondValue(aratorom(inputRef.current.value))
    }
    else {
      setSecondValue(romtoara(inputRef.current.value))
    }
  }
  return (
    <div className='fen chiffre'>
      <br />
      <br />
      <br />
      <div className="titre"></div>
      <div className="valeurs">

        {/* premier valeur  */}
        <div className="values"><input type={inputType} ref={inputRef} /> </div>
        <select name="" id="firstUnit" onChange={handleChange} defaultValue="CA" >
          <option value="CA">chiffre arabe</option>
          <option value="CR">chiffre romain</option>
        </select>

        {/* signe egale  */}
        <div className="egale"> = </div>

        {/* deuxieme valeur  */}
        <div className="valeur">
          <div className="secondValue">{secondValue}</div>
          <div className="secondUnit">
            {secondUnit}
          </div>
        </div>

      </div>

      <div className="boutton">
        <button onClick={handleClick}>Convertir</button>
      </div>

    </div>
  )
}

export default Chiffre