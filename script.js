window.addEventListener("click", function n8ne(){
let arr8y = [];
const exl = document.getElementsByClassName('answ');
for(let i = 0; i < exl.length; i++) {
if (exl[i].checked){
arr8y.push(parseFloat(exl[i].value));}};
const arrsum = arr8y.reduce((a, b) => a + b, 0);
document.getElementById("grade").innerHTML = 100*String((arrsum)/(arr8y.length));
var divs = document.getElementById('form1').children;
var numTabs = 0;
for(let x = 0; x < divs.length; x++) {
	if (divs[x].getElementsByTagName("P") != -1)
		numTabs++;}
document.getElementById("c0unt").innerHTML = (String(arr8y.length));
document.getElementById("c00unt").innerHTML = (String(numTabs));
});
