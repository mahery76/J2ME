import React from 'react'

function Temperature() {
    return (
        <div className="fen temperature">
            <div className="titre">
            </div>
            
            <div className="valeurs">
                {/* premier valeur  */}
                <div className="valeur">
                    <div className="values"> <input type="number" /> </div>
                    <div className="unit" />
                </div>

                {/* signe egale  */}
                <div className="egale"> = </div>

                {/* deuxieme valeur  */}
                <div className="valeur">
                    <div className="values" />
                    <div className="unit" />
                </div>

            </div>
            <div className="button">
                <button>Convertir</button>
            </div>
        </div>
    )
}

export default Temperature