let result = document.getElementById("result");
let convert = document.getElementById("convert");
let cf = document.getElementById("celtofehr");
let fc = document.getElementById("fehrtocel");

function celToFehr(c){
    return c * 1.8 + 32;
}
function fehrToCel(f){
    return (f - 32) / 1.8;
}

convert.addEventListener('click', ()=>{
    let temperature = Number(document.getElementById("temperature").value);
    document.getElementById("temperature").value = "";
    if(cf.checked){
        result.innerText = `${temperature}°F = ${celToFehr(temperature)}°C`;
    }else if(fc.checked){
        result.innerText = `${temperature}°C = ${fehrToCel(temperature)}°F`;
    }else{
        result.innerText = "Please choose a conversion type!"
    }
})