
document.getElementById("btn0") .onclick = function () {document.getElementById("res").innerHTML += 0 }
document.getElementById("btn1") .onclick = function () {document.getElementById("res").innerHTML += 1 }

const sum = ()=>{
document.getElementById("res").innerHTML += "+"
}
const div = () => {
document.getElementById("res").innerHTML += "/"
}

const  sub = () =>{
  document.getElementById("res").innerHTML += "-"
}
const mult =() =>{
  document.getElementById("res").innerHTML += "*"
}

const Clear = ()=>{
  document.getElementById("res").innerHTML = ""
}
const result = (factor1,factor2,operador) =>{
  return eval(parseInt(factor1, 2) + operador + parseInt(factor2, 2));
}

const Eql=()=>{
const factors = document.getElementById("res").innerHTML
factor = factors.split(/\b/)
document.getElementById("res").innerHTML += " = "
document.getElementById("res").innerHTML +=  (result(factor[0],factor[2],factor[1]))
}
