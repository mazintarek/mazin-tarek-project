let i = 3;
let name ;
if (localStorage.ChangeName !=null) {
  name = JSON.parse(localStorage.ChangeName)
} else {
  name;
}

let title = document.getElementById('frame')
let btn = document.getElementById('btn2')
btn.onclick = function () {
  location.href='../Choose anser/choose anser.html'
}
window.onload = function () {
  setInterval(function () {
    if (i>= 1) {
    title.innerHTML=i;
    i--
    } else {
      title.style.fontSize = '100px'
      title.innerHTML=name;
    }
  },1000)
}