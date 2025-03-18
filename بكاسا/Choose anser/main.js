let change1;
if (localStorage.change2 != null) {
  change1 = JSON.parse(localStorage.change2)
} else {
  change1 = [];
}
let change2;
if (localStorage.answer != null) {
  change2 = JSON.parse(localStorage.answer)
} else {
  change2;
}
function ShowData() {
  let table ='';
  for (let i = 0; i < change1.length; i++) {
    if (change1[i]!= null && change1[i] != change2) {
      
    
    table+=`
     <button id="btn">${change1[i]}</button>`
  
  document.getElementById('btn-voice').innerHTML=table;
  }
  }
  document.getElementById('btn-voice').innerHTML+=`<button class="btn2" id="btn">${change2}</button>`
}
ShowData();

let btn = document.querySelectorAll('#btn')

btn.forEach(btns =>{
  btns.addEventListener('click',function (){
    let btn2 =document.querySelector('.btn2')
    if (btns.innerHTML === change2) {
      btns.style.background = 'green'
      localStorage.setItem('plas100',100)
    } else {
      btns.style.background = 'red'
      btn2.style.background = 'green'
      localStorage.plas100 = 0;
    }
     setTimeout(function(){
      
      window.location.href = '../results/results.html'
     }, 1000)
  })
} )