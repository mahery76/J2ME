
function chiffre_convertir() {
  let unit = document.querySelector("#chiffre_firstUnit").value;
  let firstValue = document.querySelector("#chiffre_firstValue").value;
  if (unit == "arabe") {
    let secondValue = aratorom(firstValue);
    document.querySelector("#chiffre_secondValue").innerHTML = secondValue;
  } else {
    let secondValue = romtoara(firstValue);
    document.querySelector("#chiffre_secondValue").innerHTML = secondValue;
  }
}

function chiffre_handleChange() {
  let unit = document.querySelector("#chiffre_firstUnit").value;
  document.querySelector("#chiffre_secondValue").innerHTML = "";

  if (unit == "arabe") {
    document.querySelector("#chiffre_secondUnit").innerHTML = "Romain";
    document.querySelector("#chiffre_firstValue").type = "number";
  } else {
    document.querySelector("#chiffre_secondUnit").innerHTML = "Arabe";
    document.querySelector("#chiffre_firstValue").type = "text";
  }
}
function chiffre_Effacer() {
  document.querySelector("#chiffre_firstUnit").value = "Arabe";
  document.querySelector("#chiffre_firstValue").value = "";
  document.querySelector("#chiffre_secondValue").value = "";
}
