function convCelsius() {
    var tempCelsius = parseFloat(document.getElementById("celsius").value);
  
    if (isNaN(tempCelsius) == false) {
      var tempFarenheit = (tempCelsius * 1.8 + 32).toFixed(1);
      var tempKelvin = (tempCelsius + 273).toFixed(1);
  
      var valorConvertido =
        "&nbsp;&nbsp;O resultado em graus Farenheit é " +
        tempFarenheit +
        "°F, e em Kelvin é de " +
        tempKelvin +
        "K";
      convUm.innerHTML = valorConvertido;
    } else {
      var valorErro = "&nbsp;&nbsp;Esta não é uma temperatura válida. <br>&nbsp;&nbsp;Por favor, insira um número inteiro ou com até três casas decimais.<br><br>";
      convUm.innerHTML = valorErro;
    }
  }
  
  function convKelvin() {
    var tKelvin = parseFloat(document.getElementById("kelvin").value);
  
    if (isNaN(tKelvin) == false) {
      var tCelsius = (tKelvin - 273).toFixed(1);
      var tFarenheit = ((tKelvin - 273) * 1.8 + 32).toFixed(1);
  
      var valorConvertido =
        "&nbsp;&nbsp;O resultado em graus Celsius é " +
        tCelsius +
        "°C, e em graus Farenheit é de " +
        tFarenheit +
        "°F";
      convDois.innerHTML = valorConvertido;
    } else {
      var valorErro = "&nbsp;&nbsp;Esta não é uma temperatura válida.<br> &nbsp;&nbsp;Por favor, insira um número inteiro ou com até três casas decimais.<br><br>";
      convDois.innerHTML = valorErro;
    }
  }
  
  function convFaren() {
    var teFaren = parseFloat(document.getElementById("farenheit").value);
    if (isNaN(teFaren) == false) {
      var teCelsius = ((teFaren - 32) / 1.8).toFixed(1);
      var teKelvin = ((teFaren - 32) / 1.8 + 273).toFixed(1);
  
      var valorConvertido =
        "&nbsp;&nbsp;O resultado em graus Celsius é " +
        teCelsius +
        "°C, e em Kelvin é de " +
        teKelvin +
        "K";
      convTres.innerHTML = valorConvertido;
    } else {
      var valorErro = "&nbsp;&nbsp;Esta não é uma temperatura válida.<br>&nbsp;&nbsp; Por favor, insira um número inteiro ou com até três casas decimais.<br><br>";
      convTres.innerHTML = valorErro;
    }
  }
  