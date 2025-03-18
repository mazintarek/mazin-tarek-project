let home = document.getElementById('home')
let font = document.getElementById('font')
home.onclick = function() {
  location.href = '../Home/index.html'
}
font.onclick = function() {
  location.href = '../front.html'
}
let changeName;
if (localStorage.ChangeName != null) {
  changeName = JSON.parse(localStorage.ChangeName)
} else {
  changeName;
}
let plasName;
if (localStorage.plasName != null) {
  plasName = JSON.parse(localStorage.plasName)
} else {
  plasName = [];
}
let plas100;
if (localStorage.plas100 != null) {
  plas100 = JSON.parse(localStorage.plas100)
} else {
  plas100;
}
let name;
if (localStorage.Name != null) {
  name = JSON.parse(localStorage.Name)
} else {
  name = [];
}

let tmp = 0; 
function mat() {
    let table = '';
    for (let y = 0; y < plasName.length; y++) {
      if (tmp <= plasName.length) {
        tmp++
        
      }
      table += `<div id="div">
         <p>${plasName[y].name}</p>
         <p id='ppp'>100</p>
        </div>`

      
    
  }
  return table
        
      }



function ShowData() {
  let table = '';
  let x = 0;
  for (let i = 0; i < name.length;i++) {
      
     if(name[i].name === plasName[x].name){
        if(x < plasName.length-1){
          table += `<div id="hide">
             <p>${name[x].name}</p>
             <p id='ppp'>0</p>
         </div>`
         
           x++
           console.log(x)
        } else if (x === plasName.length) {
          
        }
        }
       else {
          if (name[i].name != changeName){ 
              table += `
              <div id="div">
                <p>${name[i].name}</p>
                <p id='ppp'>0</p>
              </div>`

     } 
    }
  }
  x++
 return table 
 

}

document.getElementById('tbody').innerHTML = `<div id="div">
        <p>${changeName}</p>
        <p>${plas100}</p>
      </div>`
document.getElementById('tbody').innerHTML += ShowData();
document.getElementById('tbody').innerHTML += mat()