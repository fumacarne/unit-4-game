var randomnum=document.querySelector('.random-number-container')
var diamond1= document.querySelector('.diamond1')
var diamond2= document.querySelector('.diamond2')
var diamond3= document.querySelector('.diamond3')
var diamond4= document.querySelector('.diamond4')
var sum=document.querySelector('.suma')
var winsi= document.querySelector('.winsi')
var lossesi=document.querySelector('.lossesi')
var wins= 0;
var losses=0;
var allDiamonds=[diamond1,diamond2,diamond3,diamond4]
var allCrystalRandom=[crystalRan1,crystalRan2,crystalRan3,crystalRan4]




function restartgame(){
    value = (getRndInteger(19,120));
    crystalRan1 = (getRndInteger(1,12));
     crystalRan2 = (getRndInteger(1,12));
     crystalRan3 = (getRndInteger(1,12));
     crystalRan4 = (getRndInteger(1,12));
     sumNum1 =0;
     console.log(sumNum1)
     console.log(value);
}


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
var arr =[]

// I KNOW I SHOULD LOOP THIS IS COMING, WITH DE DIAMONDS ARRAY IT WORKS BUT FOR TE CRYSTALRANDOM NUMBER I GOT PROBLEMS, THEY SET THE SAME RANDOM NUMBER POR ALL CRYSTALS.
//ANY SUGGESTION???

$(diamond1).click(function(){
    sumNum1+=crystalRan1
$(sum).html((sumNum1));
arr.push(sumNum1);
if (value===arr[arr.length-1]){
    alert('you won!');
    wins++;
    $(winsi).html('wins'+wins);
    restartgame();
    $(randomnum).html(value)
    $(sum).html((sumNum1));
}else if(value<arr[arr.length-1]){
    alert('you lose!');
    losses++;
    $(lossesi).html('losses'+losses);
    restartgame()
    $(randomnum).html(value)
    $(sum).html((sumNum1));
}
})
$(diamond4).click(function(){
     sumNum1+=crystalRan4
 $(sum).html((sumNum1));
 arr.push(sumNum1);
 if (value===arr[arr.length-1]){
     alert('you won!');
     wins++;
     $(winsi).html('wins'+wins);
     restartgame();
     $(randomnum).html(value)
     $(sum).html((sumNum1));
 }else if(value<arr[arr.length-1]){
     alert('you lose!');
     losses++;
     $(lossesi).html('losses'+losses);
     restartgame()
     $(randomnum).html(value)
     $(sum).html((sumNum1));
 }
 })
 $(diamond2).click(function(){
   
     sumNum1+=crystalRan2
 $(sum).html((sumNum1));
 arr.push(sumNum1);
 if (value===arr[arr.length-1]){
     alert('you won!');
     wins++;
     $(winsi).html('wins'+wins);
     restartgame();
     $(randomnum).html(value)
     $(sum).html((sumNum1));
 }else if(value<arr[arr.length-1]){
     alert('you lose!');
     losses++;
     $(lossesi).html('losses'+losses);
     restartgame()
     $(randomnum).html(value)
     $(sum).html((sumNum1));
 }
 })
 $(diamond3).click(function(){
    
     sumNum1+=crystalRan3
 $(sum).html((sumNum1));
 arr.push(sumNum1);
 if (value===arr[arr.length-1]){
     alert('you won!');
     wins++;
     $(winsi).html('wins'+wins);
     restartgame();
     $(randomnum).html(value)
     $(sum).html((sumNum1));
 }else if(value<arr[arr.length-1]){
     alert('you lose!');
     losses++;
     $(lossesi).html('losses'+losses);
     restartgame()
     $(randomnum).html(value)
     $(sum).html((sumNum1));
 }
 })
// $(diamond2).click(function(){
//     sumNum1+=(crystalRan2);
//  $(sum).html((sumNum1));
//  arr.push(sumNum1)
 
//  })

// $(diamond3).click(function(){
//     sumNum1+=(crystalRan3);
//  $(sum).html((sumNum1));
//  arr.push(sumNum1)
 
//  })

// $(diamond4).click(function(){
//     sumNum1+=(crystalRan4);
//  $(sum).html((sumNum1));
//  arr.push(sumNum1)
//  })
//   var arr=[]
//  if (value===arr[arr.length-1]){
//      alert('you won!');
//      wins++;
//      $(wins).text(''+wins);
//      restartgame();
//  }else if(value<=arr[arr.length-1]){
//      alert('you lose!');
//      losses++;
//      $(losses).text(''+losses);
//      restartgame()

//  }




// // let last = arr.push[arr.length-1]
// // console.log(arr)


