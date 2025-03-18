let id = localStorage.idh;
let btn = document.getElementById('btn-2')
let text = document.getElementById('inp')

function b() {
     window.location.href= `questions/question${id}.html`}

  
let dataName ;
if (localStorage.Name !=null) {
  dataName = JSON.parse(localStorage.Name)
} else {
  dataName=[];
}
function checkInput() {
  

let btm = document.getElementById('btm')

if(dataName.length < 3){
   
     btm.innerHTML = ''
     
    
    }else{ 
     btm.innerHTML = ` <button class="btn" onclick="b()">يلا بينا </button>`
     
    }
  }
  window.onload = function () {
    checkInput()
  }
btn.onclick= function (){
  if(text.value.length <= 9){
  let newName={
    name:text.value
  }
  if (text.value !='') {
    dataName.push(newName)
  }
  localStorage.setItem('Name',JSON.stringify(dataName))
  text.value=''
  showData()
  checkInput()
  }else{
    alert('the name is tall')
    console.log(text.value.length)
  }
}


function showData() {
  let table ='';
  for (let i = 0; i < dataName.length; i++) {
    table+=`
     <button onclick='Delete(${i})'>${dataName[i].name}</button>
    `
  }
  document.getElementById('btn').innerHTML=table;
}
showData()

function Delete(i) {
  dataName.splice(i,1)
  localStorage.Name=JSON.stringify(dataName);
  showData()
  checkInput()
}
