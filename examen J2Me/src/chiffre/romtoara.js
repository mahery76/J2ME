function romtoara(roman) {
    let tab = []
    let arabic = 0;
    const numerotation = [
        { 1: "I" },
        { 5: "V" },
        { 10: "X" },
        { 50: "L" },
        { 100: "C" },
        { 500: "D" },
        { 1000: "M" }
    ]
    roman = roman.split('')
    // construction du tableau a partir d'une comparaison avec le tableau roman

    for (let i = 0; i < roman.length; i++) {
        console.log(roman[i])
        let identique = numerotation.filter(function(objet){
            return Object.values(objet) == roman[i]
        })
        // let identique = numerotation.filter(object => Object.values(objet) == roman[i])
        let keys = identique.map(function(object){
            return Object.keys(object)
        })
        // let keys = identique.map(object => Object.keys(object))
        tab.push(parseInt(keys))
    }
    console.log(tab)

    // reduction du tableau afin de pouvoir retourner le résultat

    for (let i = 0; i < tab.length; i++) {
        console.log("ito ilay", i)
        if(i == tab.length - 1){
            arabic = arabic + tab[i]
            break;
        }
        if(tab[i] >= tab[i + 1]){
            arabic = arabic + tab[i]
        }
        if(tab[i] < tab[i+1]){
            arabic = arabic - tab[i]
        }
    }
    return arabic
}
export default romtoara;