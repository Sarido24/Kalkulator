let monitor = document.getElementById("monitor");
let operation = '';
let angka1 = 0;
let angka2 = 0;
let isSamadengan = false;
// function addNum1(){
//     if(monitor.innerHTML === "0"){
//         monitor.innerText = "1"
//     }else{
//         monitor.innerText += "1"
//     }
// }
// function addNum2(){
//     if(monitor.innerHTML === "0"){
//         monitor.innerText = "2"
//     }else{
//         monitor.innerText += "2"
//     }
// }
// function addNum3(){
//     if(monitor.innerHTML === "0"){
//         monitor.innerText = "3"
//     }else{
//         monitor.innerText += "3"
//     }
// }
// function addNum4(){
//     if(monitor.innerHTML === "0"){
//         monitor.innerText = "4"
//     }else{
//         monitor.innerText += "4"
//     }
// }
// function addNum5(){
//     if(monitor.innerHTML === "0"){
//         monitor.innerText = "5"
//     }else{
//         monitor.innerText += "5"
//     }
// }
// function addNum6(){
//     if(monitor.innerHTML === "0"){
//         monitor.innerText = "6"
//     }else{
//         monitor.innerText += "6"
//     }
// }
// function addNum7(){
//    if(monitor.innerHTML === "0"){
//         monitor.innerText = "7"
//     }else{
//         monitor.innerText += "7"
//     }
// }
// function addNum8(){
//     if(monitor.innerHTML === "0"){
//         monitor.innerText = "8"
//     }else{
//         monitor.innerText += "8"
//     }
// }
// function addNum9(){
//     if(monitor.innerHTML === "0"){
//         monitor.innerText = "9"
//     }else{
//         monitor.innerText += "9"
//     }
// }
// function addNum0(){
//     if(monitor.innerHTML !== "0"){
//         monitor.innerHTML += "0"
//     }else{
//         return
//     }
// }
// function addDecimal(){
//     monitor.innerHTML += "."
// }

function allClear() {
        monitor.innerHTML = "0"
        angka1 = 0;
        angka2 = 0;
}

// function addPlus(){
//     if(monitor.innerHTML.includes('+')){
//         monitor.innerHTML= eval(monitor.innerHTML)
//         monitor.innerHTML += '+'
//     }else{
//         monitor.innerHTML += '+'
//     }

// }
// function addMinus(){
//     monitor.innerHTML += "-"
// }
// function addMultiple(){
//     monitor.innerHTML += "*" 
// }
// function addDivide(){
//     monitor.innerHTML += "/"
// }

// function getResult(){
//     monitor.innerHTML = eval(monitor.innerHTML)
// }

function evenOperation(operator){
    // console.log(operator);
    // console.log(angka1);
    // console.log(operation.length);
    if(angka1 !== 0 && operation.length === 0){
        // let operatorElement = document.getElementById('operator');
        operation = operator;
        console.log("INI OPERATION    " + operation);
    }else{
        return
    }
    operation = operator
    
}
function evenTouch(number){
    // console.log(operation.length);
    if(!operation.length && angka1 === 0) {
        monitor.innerHTML = number;
        angka1 = number
    }else if(!operation.length && angka1 !== 0) {
        monitor.innerHTML += number;
        angka1 = angka1.toString().concat(number.toString())
        console.log("INI AngkaPertama" + "  " + angka1);
    }else if(operation.length && angka2 === 0){
        monitor.innerHTML = number
        angka2 = number
    }else if(operation.length && angka2 !== 0){
        monitor.innerHTML += number
        angka2 = angka2.toString().concat(number.toString())
        console.log("ini angkaKedua" +"  "+ angka2);
    } 
        
}


function calculate(){
    let result ;
    if(operation === '+' ){
        result = Number(angka1) + Number(angka2);
        // console.log(result);
        angka1 = result
        angka2 = 0
        operation = ''
    }else if(operation === '-'){
        result = Number(angka1) - Number(angka2);
        // console.log(result);
        angka1 = result
        angka2 = 0
        operation = ''
    }else if(operation === 'x'){
        result = Number(angka1) * Number(angka2);
        // console.log(result);
        angka1 = result
        angka2 = 0
        operation = ''
    }else if(operation === '÷ '){
        result = Number(angka1) / Number(angka2);
        // console.log(result);
        angka1 = result
        angka2 = 0
        operation = ''

    }
    monitor.innerHTML = `${result}`

    console.log("INI OPERATION    " + operation);
}

// function addNum(number){
//     console.log(number);
//     if(operation === '' || angka1 === 0){
//         monitor.innerHTML = number
//     }
// }

function deleteNum(){
    console.log("INI JALAN DELETE");
    // console.log(angka1.toString().length);
    if(angka1.toString().length === 1 && !operation.length){
        angka1 = 0
        monitor.innerHTML = angka1
    }else if(angka1.toString().length > 1 && !operation.length){
        angka1 = angka1.slice(0, -1)
        monitor.innerHTML = angka1
    }else if(operation.length && angka2.toString().length === 1){
        angka2 = 0
        monitor.innerHTML = angka2
    }else if(operation.length && angka2.toString().length > 1){
        angka2 = angka2.slice(0, -1)
        monitor.innerHTML = angka2

    }
}
