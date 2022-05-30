function converter() {
    var x = document.getElementById("myInput").value;
    document.getElementById("myVal").innerHTML = x;
    document.getElementById("myVal2").innerHTML = x;
    document.getElementById("myVal3").innerHTML = x;
    document.getElementById("myVal4").innerHTML = x;
    document.getElementById("myVal5").innerHTML = x;
    document.getElementById("myVal6").innerHTML = x;
    document.getElementById("resultMeter").innerHTML = lengthFeet(x).toFixed(3);
    document.getElementById("resultFeet").innerHTML = feetLenght(x).toFixed(3);
    document.getElementById("resultLiter").innerHTML = literGallon(x).toFixed(3);
    document.getElementById("resultGallon").innerHTML = gallonLiter(x).toFixed(3);
    document.getElementById("resultKilo").innerHTML = kiloPound(x).toFixed(3);
    document.getElementById("resultPound").innerHTML = poundKilo(x).toFixed(3);

  }


function lengthFeet(valNum) {
    return m = valNum*3.28;
  }
  function feetLenght(valNum) {
    return f = valNum/3.28;
  }
  function literGallon(valNum) {
    return l = valNum*0.264;
  }
  function gallonLiter(valNum) {
    return g = valNum/0.264;
  }
  function kiloPound(valNum) {
    return k= valNum*2.2046;
  }
  function poundKilo(valNum) {
    return p = valNum/2.2046;
  }
 
  