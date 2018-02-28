window.addEventListener("click", function n8ne(){
let arr8y = [];
let arr7y = [];
const exl = document.getElementsByClassName('answ');
for(let i = 0; i < exl.length; i++) {
if (exl[i].checked){
arr8y.push(parseFloat(exl[i].value));}};
for(let i = 0; i < exl.length; i++) {
arr7y.push(parseFloat(exl[i].value));}
const arrsum = arr8y.reduce((a, b) => a + b, 0);
document.getElementById("grade").innerHTML = 100*String((arrsum)/(arr7y.length));}
);
