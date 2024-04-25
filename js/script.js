//Ini File JS

let isReverse = true;

function reverse() {
    let cTof = document.getElementById('Celcius-to-F');
    let fToc = document.getElementById('F-to-Celcius');

    if (isReverse) {
        console.log(isReverse);
        fToc.style.display = "block";
        cTof.style.display = "none";
        isReverse = false;
    } else {
        // Ini Tampilan Default
        console.log(isReverse);
        cTof.style.display = "block";
        fToc.style.display = "none";
        isReverse = true;
    }
}

function convert() {
    let celcius = document.getElementById("Celcius-to-F-input").value;
    if (isNaN(celcius)) {
        alert("Tolong Input Nomor Saja!!");
    }
    console.log(celcius);
}

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
  }
  
document.getElementById("button-convert").addEventListener('click', () => convert());

function reset() {
    document.getElementById("button-reset").value = "newResetButtonValue";
  }

//membuat objek element
var hasil = document.getElementById("output-kalkulasi");
// menampilkan output ke element kalkulasi
hasil.innerHTML = "S<sub>(&deg;F)</sub> = (S<sub>(&deg;C)</sub>x 1.8)+32";

