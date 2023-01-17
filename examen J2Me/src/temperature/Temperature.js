import React, { useState, useRef } from 'react'

function Temperature() {
    const inputRef = useRef(null)

    const [secondUnit, setSecondUnit] = useState("Degré Fahrenheit")
    const [secondValue, setSecondValue] = useState(0)

    function handleChange(event) {
        if (event.target.value == "DC") {
            setSecondUnit("Degré Fahrenheit")
        }
        else {
            setSecondUnit("Degré Celsius")
        }
    }

    function handleClick(event){
        if (secondUnit == "Degré Fahrenheit") {
            setSecondValue((inputRef.current.value * 9 / 5) + 32)
        }
        else {
            setSecondValue((inputRef.current.value - 32) * 5 / 9)
        }
    }

    return (
        <div className="fen temperature">
            <div className="titre">
            </div>

            <div className="valeurs">
                {/* premier valeur  */}
                <div className="valeur">
                    <div className="values"> <input type="number" ref={inputRef} /> </div>
                    <select id="firstUnit" onChange={handleChange} defaultValue="DC" >
                        <option value="DC">Degré Celsius</option>
                        <option value="DF">Degré Fahrenheit</option>
                    </select>
                </div>

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
                <button onClick = {handleClick}>Convertir</button>
            </div>
        </div>
    )
}

export default Temperature