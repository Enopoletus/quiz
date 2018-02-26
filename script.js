window.addEventListener("click", function nine(){
let array = [];
const exl = document.getElementsByClassName('answ');
for(let i = 0; i < exl.length; i++) {
if (exl[i].checked){ 
let zed = exl[i];
array.push(parseFloat(zed.value));
var arrsum = array.reduce((a, b) => a + b, 0);
document.getElementById("grade").innerHTML = 100*String((arrsum)/(array.length));}}}
);
