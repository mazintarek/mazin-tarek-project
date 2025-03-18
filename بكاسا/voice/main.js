let dataName ;
if (localStorage.Name !=null) {
  dataName = JSON.parse(localStorage.Name)
} else {
  dataName=[];
}
function ShowData() {
  let table ='';
  for (let i = 0; i < dataName.length; i++) {
    table+=`
     <button id="btn">${dataName[i].name}</button>`
  }
  document.getElementById('btn-voice').innerHTML=table;
}

ShowData()
let btn = document.querySelectorAll('#btn')
let btn2 = document.getElementById('btn2')
btn2.onclick = function () {
   location.href = '../voice2/voice2.html'
}
var prag = document.getElementById('prag')
let i = 0;
let x = 0;

window.onload = function () {
 
  prag.innerHTML = `${dataName[i].name} اختار شخص عايز تسأله لو لسه شاكك او دوسوا علي التالي لو جاهزين`
  
  btn.forEach(btns =>{
    if (btn.item(i).innerHTML=== dataName[i].name)
    {
      btn.item(i).style.display = 'none'
      btn.item(i).classList.add('false')
    
    btns.addEventListener('click',function(){
      btn2.classList.remove('hide')
        i++
        prag.innerHTML = `${dataName[i].name} اختار شخص عايز تسأله لو لسه شاكك او دوسوا علي التالي لو جاهزين`
        
       
       
       if (btn.item(i).innerHTML=== dataName[i].name){
         
      btn.item(i).style.display = 'none'
      btn.item(i).classList.add('false')
      let btnChange = document.querySelectorAll('.false')
        btnChange.item(x).style.display ='block'
        x++
        
        
    }
    
       
       
    })
    
     

  
  }
})
}