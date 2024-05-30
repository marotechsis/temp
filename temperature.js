let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number (textBox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F";     

    }
    else if(toCelsius.checked){
       temp = Number (textBox.value);
       temp = (temp - 32) * 5/9 ;
       result.textContent = temp.toFixed(1) + "°c"; 

    }
    else if(toKelvin.checked){
        temp = Number (textBox.value);
        temp = temp  + 273 ;
        result.textContent = temp.toFixed(1) + "°c"; 
 
     }
    else{
        result.textContent = "select a unit";
    }



}