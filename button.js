let data = ["wanji","Wasi"]
let Btn = document.getElementById("btn")
let Input = document.getElementById("in")
let display = document.getElementById("ac")

//for(let i=0;i<data.length;i++)


Btn.addEventListener("click", function(){
    data.push(Input.value)
    display.textContent += data


})