// variables
let prag = document.getElementById('prag')
let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')
let frame2 = document.getElementById('frame2')
let frame = document.getElementById('frame')
let dataName ;
let i = 0;

// localStorage
if (localStorage.Name !=null) {
  dataName = JSON.parse(localStorage.Name)
} else {
  dataName=[];
}





//function add and remove
 btn2.onclick = function () {
   frame2.classList.add('hidden')
   frame.classList.remove('hidden')
   prag.innerHTML = `
  ${dataName[i].name} هيسأل ${dataName[i+1].name}  ويحاول يعرف الاجابه`
  i++
 }
 
 
 // question 
 
btn.onclick = function () {
  if (i === dataName.length-1) {
    
    window.location.href = '../voice/voice.html'
   }else{
      prag.innerHTML = `
      ${dataName[i].name} هيسأل ${dataName[i+1].name}  ويحاول يعرف الاجابه`
      
       
     }
  i++
  
}