"use strict"


let input1=document.querySelector(".input .input1")
let input2=document.querySelector(".input .input2")
let input3=document.querySelector(".input3")




let topla=document.querySelector(".button .topla")
let cixma=document.querySelector(".button .cixma")
let vurma=document.querySelector(".button .vurma")
let bolme=document.querySelector(".button .bolme")






topla.addEventListener("click",function(){

    input3.value=(Number)(input1.value) + (Number)(input2.value)
    
})

cixma.addEventListener("click",function(){

    input3.value=input1.value - input2.value
})

vurma.addEventListener("click",function(){

    input3.value=input1.value * input2.value
})

bolme.addEventListener("click",function(){

    input3.value=input1.value / input2.value
})

