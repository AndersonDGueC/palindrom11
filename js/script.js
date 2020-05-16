/**
 * @fileoverview Verficador de palabras que son igulaes al leerese normalmente e invertidas.
 * @version 1.0
 * @autor  Anderson Danilo Guerrero Calpa <adguerreroc@unal.edu.co>
 * @copyright Academia Geek
 * 
 * @param {string} myStr 
 * @returns{boolean}
 */

/**
 * 
 * funcion palindromo generada con ES6 recibe un string y genera un booleano 
 */
let palindromo = (myStr)=>{
let origin_str=myStr.replace(/[\W]/g,"").toLowerCase(); 
/*reemplaza todos los caracteres con la 
expresion regular \W por medio del rango [] y con la bandera g por ausencia de espacios y 
es convertido a minuscalas 
*/
let rever_str=myStr.replace(/[\W_]/g,"").toLowerCase().split("").reverse().join("");
/*
igualmente pero se transforma arreglo para aplicar la funcion de inverso y luego se vuelve a cadena
de caracteres
*/
return rever_str===origin_str;
/*
se retorna el booleano.
*/
}
//se llama el evento boton del index para aplicar la funcion
document.getElementById("send_word").addEventListener('click',(e)=>{
    let str=document.getElementById("add_word").value;
    let resultado=palindromo(str);
    document.getElementById("result").innerHTML="El resultado es: "+resultado;
})

