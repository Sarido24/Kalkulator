let monitor = document.getElementById("monitor");
let operation = '';
let angka1 = 0;
let angka2 = 0;
let isSamadengan = false;


function allClear() {
        monitor.innerHTML = "0"
        angka1 = 0;
        angka2 = 0;
}


function evenOperation(operator){
    // console.log(operator);
    // console.log(angka1);
    // console.log(operation.length);
    if(angka1 !== 0 && operation.length === 0){
        // let operatorElement = document.getElementById('operator');
        operation = operator;
        console.log("INI OPERATION    " + operation);
    }else if(operation.length && angka2.toString().length){
        calculate()
    }else if(angka1 === 0 && !operation.length && operator === "-"){
        monitor.innerHTML = "-"
    }
    operation = operator
    
}
function evenTouch(number){
    // console.log(operation.length);
    // console.log(typeof(number));
    if(!operation.length && angka1 === 0) {
        if(typeof(number) === "string" ){
            console.log(typeof(number));
            monitor.innerHTML += number
            angka1 += number
        }else{
            monitor.innerHTML = number;
            angka1 = number
        }
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
    let result = 0;
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

}




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
