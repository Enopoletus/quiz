window.addEventListener("click", function n8ne(){
let arr8y = [];
const exl = document.getElementsByClassName('answ');
for(let i = 0; i < exl.length; i++) {
if (exl[i].checked){
arr8y.push(parseFloat(exl[i].value));}};
const arrsum = arr8y.reduce((a, b) => a + b, 0);
document.getElementById("grade").innerHTML = 100*String((arrsum)/(arr8y.length));
var numTabs=document.getElementById("form1").getElementsByTagName("P").length;
document.getElementById("c0unt").innerHTML = (String(arr8y.length));
document.getElementById("c00unt").innerHTML = (String(numTabs));
let arr6y = [];
const exl2 = document.getElementsByClassName('answ2');
for(let i = 0; i < exl2.length; i++) {
if (exl2[i].checked){
arr6y.push(parseFloat(exl2[i].value));}};
const arrsum2 = arr6y.reduce((a, b) => a + b, 0);
document.getElementById("grade2").innerHTML = 100*String((arrsum2)/(arr6y.length));
var numTabs2=document.getElementById("form2").getElementsByTagName("P").length;
document.getElementById("c0unt2").innerHTML = (String(arr6y.length));
document.getElementById("c00unt2").innerHTML = (String(numTabs2));
const w = (screen.width)/3;
const h = (screen.width)/3;
var data = [10, 15, 20, 25, 30];
let svg = d3.select("#ten10")
            .append('svg')
            .attr('width', w)
            .attr('height', h);
var scale = d3.scaleLinear()
              .domain([d3.min(data), d3.max(data)])
              .range([height/2, 0]);
var y_axis = d3.axisLeft()
               .scale(scale);
svg.append("g")
       .attr("transform", "translate(50, 10)")
       .call(y_axis);

});
