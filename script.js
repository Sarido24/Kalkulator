let monitor = document.getElementById("monitor");
function addNum1(){
    if(monitor.innerHTML === "0"){
        monitor.innerText = "1"
    }else{
        monitor.innerText += "1"
    }
}
function addNum2(){
    if(monitor.innerHTML === "0"){
        monitor.innerText = "2"
    }else{
        monitor.innerText += "2"
    }
}
function addNum3(){
    if(monitor.innerHTML === "0"){
        monitor.innerText = "3"
    }else{
        monitor.innerText += "3"
    }
}
function addNum4(){
    if(monitor.innerHTML === "0"){
        monitor.innerText = "4"
    }else{
        monitor.innerText += "4"
    }
}
function addNum5(){
    if(monitor.innerHTML === "0"){
        monitor.innerText = "5"
    }else{
        monitor.innerText += "5"
    }
}
function addNum6(){
    if(monitor.innerHTML === "0"){
        monitor.innerText = "6"
    }else{
        monitor.innerText += "6"
    }
}
function addNum7(){
   if(monitor.innerHTML === "0"){
        monitor.innerText = "7"
    }else{
        monitor.innerText += "7"
    }
}
function addNum8(){
    if(monitor.innerHTML === "0"){
        monitor.innerText = "8"
    }else{
        monitor.innerText += "8"
    }
}
function addNum9(){
    if(monitor.innerHTML === "0"){
        monitor.innerText = "9"
    }else{
        monitor.innerText += "9"
    }
}
function addNum0(){
    if(monitor.innerHTML !== "0"){
        monitor.innerHTML += "0"
    }else{
        return
    }
}
function addDecimal(){
    monitor.innerHTML += "."
}

function allClear() {
        monitor.innerHTML = "0"
}

function addPlus(){
    monitor.innerHTML += "+"
}
function addMinus(){
    monitor.innerHTML += "-"
}
function addMultiple(){
    monitor.innerHTML += "*" 
}
function addDivide(){
    monitor.innerHTML += "/"
}

function getResult(){
    monitor.innerHTML = eval(monitor.innerHTML)
}