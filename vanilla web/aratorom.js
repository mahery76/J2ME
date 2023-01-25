export function araTorom(nombre) {
    let roman = []
    const numerotation = [
        { 1: "I" },
        { 4: "IV" },
        { 5: "V" },
        { 9: "IX" },
        { 10: "X" },
        { 40: "XL" },
        { 50: "L" },
        { 100: "C" },
        { 400: "CD" },
        { 500: "D" },
        { 900: "CM" },
        { 1000: "M" }
    ]
    // affichage des cles des object dans la variable numerotation
    // for (let i of numerotation) console.log(parseInt(Object.keys(i)) + 1)    
    for (let i = numerotation.length - 1; i >= 0; i--) {
        // console.log(parseInt(Object.keys(numerotation[i])))
        while (nombre >= parseInt(Object.keys(numerotation[i]))) {
            nombre = nombre - parseInt(Object.keys(numerotation[i]))
            roman.push(Object.values(numerotation[i]))
        }
    }
    roman = roman.join('')
    console.log(roman)
}

