function convertir() {
  let unit = document.querySelector("#firstUnit").value;
  let firstValue = document.querySelector("#firstValue").value;
  if (unit == "DC") {
    let secondValue = (firstValue * 9) / 5 + 32;
    document.querySelector("#secondValue").innerHTML = secondValue;
  } else {
    let secondValue = ((firstValue - 32) * 5) / 9;
    document.querySelector("#secondValue").innerHTML = secondValue;
  }
}

function handleChange() {
  let unit = document.querySelector("#firstUnit").value;
  document.querySelector("#secondValue").innerHTML = "";

  if (unit == "DC") {
    document.querySelector("#secondUnit").innerHTML = "Degré Fahrenheit";
  } else {
    document.querySelector("#secondUnit").innerHTML = "Degré Celsius";
  }
}

function Effacer() {
  document.querySelector("#firstUnit").value = "DC";
  document.querySelector("#firstValue").value = 0;
  convertir();
}

window.onload = Effacer;
