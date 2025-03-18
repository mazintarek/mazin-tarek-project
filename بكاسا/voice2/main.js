let dataName ;
let yesName = [];
if (localStorage.Name !=null) {
  dataName = JSON.parse(localStorage.Name)
} else {
  dataName=[];
}
let changeName;
if (localStorage.ChangeName != null) {
  changeName = JSON.parse(localStorage.ChangeName)
} else {
  changeName=[];
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
var prag = document.getElementById('prag');
let i = 0;
let x = 0;
let btn = document.querySelectorAll('#btn');
window.onload = function () {
 
  prag.innerHTML = `${dataName[i].name} اختار شخص انتا شاكك فيه`
  
  btn.forEach(btns =>{
    if (btn.item(i).innerHTML=== dataName[i].name)
    {
      btn.item(i).style.display = 'none'
      btn.item(i).classList.add('false')
    
    btns.addEventListener('click',function(){
      function goToPage() {
      if (i == dataName.length-1) {
        location.href='../Hakeka/hakeka.html'
       }
      }
      goToPage()
      function PlasChangeName() {
        if (changeName === btns.innerHTML) {
          
          let isname ={ 
            name : dataName[i].name
            
          }
          yesName.push(isname)
          localStorage.setItem('plasName',JSON.stringify(yesName))
          
          
        }
      }
      PlasChangeName()
      
        i++
        prag.innerHTML = `${dataName[i].name} اختار شخص انتا شاكك فيه `
        
       
       
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