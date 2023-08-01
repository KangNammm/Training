function temperatureConverter(valNum){
    valNum = parseFloat(valNum);
    document.getElementById("outoutCelsius").innerHTML = (valNum-32)/1.8;
}