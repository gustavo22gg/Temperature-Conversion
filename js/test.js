const textbox = document.getElementById("textbox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const result = document.getElementById("result");
let temp;


function convert(){

    if(toF.checked){
        result.textContent = 'You selected to Farenheit';
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) +  '°F';

    }
    else if(toC.checked){
        result.textContent = 'You selected to Celcius';
        temp = Number(textbox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) +  '°F'

    }
    else{
        result.textContent = " Please select a unit first!!";
    }
    
}