var randomnum=document.querySelector('.random-number-container')
var diamond1= document.querySelector('.diamond1')
var diamond2= document.querySelector('.diamond2')
var diamond3= document.querySelector('.diamond3')
var diamond4= document.querySelector('.diamond4')
var sum=document.querySelector('.suma')


function getRndInteger(min, max) {
randomnum    
return Math.floor(Math.random() * (max - min + 1) ) + min;
}
var value = (getRndInteger(19,120))

console.log(value)
$(randomnum).html(value)

var crystalRan1 = (getRndInteger(1,12))
var crystalRan2 = (getRndInteger(1,12))
var crystalRan3 = (getRndInteger(1,12))
var crystalRan4 = (getRndInteger(1,12))
var sumNum1 =0

$(diamond1).click(function(){
   sumNum1+=(crystalRan1);
$(sum).html((sumNum1));
arr.push(sumNum1)

})

$(diamond2).click(function(){
    sumNum1+=(crystalRan2);
 $(sum).html((sumNum1));
 arr.push(sumNum1)
 
 })

$(diamond3).click(function(){
    sumNum1+=(crystalRan3);
 $(sum).html((sumNum1));
 arr.push(sumNum1)
 
 })

$(diamond4).click(function(){
    sumNum1+=(crystalRan4);
 $(sum).html((sumNum1));
 arr.push(sumNum1)
 })



 

// let last = arr.push[arr.length-1]
// console.log(arr)


