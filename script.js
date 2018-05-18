const myapp={};
window.addEventListener("load", definitions);
function definitions(){
if (myapp.score1==undefined){myapp.score1=50};
if (myapp.score2==undefined){myapp.score2=50};
if (myapp.name==undefined){myapp.name=="You"};
};
window.addEventListener("click", n8ne);
function n8ne(){
const arr8y = [];
const exl = document.getElementsByClassName('answ');
for(let i of exl) {
if (i.checked){
arr8y.push(parseFloat(i.value));}};
const arrsum = arr8y.reduce((a, b) => a + b, 0);
myapp.score1=100*String((arrsum)/(arr8y.length))
document.getElementById("grade").innerHTML =myapp.score1;
var numTabs=document.getElementById("form1").getElementsByTagName("P").length;
document.getElementById("c0unt").innerHTML = (String(arr8y.length));
document.getElementById("c00unt").innerHTML = (String(numTabs));
const arr6y = [];
const exl2 = document.getElementsByClassName('answ2');
for(let i of exl2) {
if (i.checked){
arr6y.push(parseFloat(i.value));}};
const arrsum2 = arr6y.reduce((a, b) => a + b, 0);
myapp.score2=100*String((arrsum2)/(arr6y.length))
document.getElementById("grade2").innerHTML = myapp.score2;
var numTabs2=document.getElementById("form2").getElementsByTagName("P").length;
document.getElementById("c0unt2").innerHTML = (String(arr6y.length));
document.getElementById("c00unt2").innerHTML = (String(numTabs2));
};
window.addEventListener("keyup", tixit);
function tixt(){
myapp.name=document.getElementsByName("name1")[0].value;
};
window.addEventListener("load", handler);
function handler() {
const w = (screen.width)/2;
const h = (screen.width)/2;
const svg = d3.select("#ten10")
            .append('svg')
            .attr('width', (w+50))
            .attr('height', h)
            .style("fill", "lightyellow");
const yscale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, (h*.8)])
const xscale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, (w*.8)])
const x_axis = d3.axisTop()
            .scale(xscale)
const y_axis = d3.axisLeft()
            .scale(yscale)
svg.append("g")
       .attr("transform", "translate(55, 50)")
       .call(x_axis)
       .style("fill", "lightyellow");
svg.append("g")
       .attr("transform", "translate(55, 50)")
       .call(y_axis)
       .style("fill", "lightyellow");
d3.selectAll("text").style("fill","lightyellow"); 
svg.append('circle')
    .attr("transform", "translate(55, 50)")
    .attr('r', 10)
    .attr('cx', xscale(50))
    .attr('cy', yscale(50))
    .style("fill", "lightgreen");
svg.append("text")
      .attr("y", 0)
      .attr("x",0 + (w/2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Percent Right-Wing"); 
svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - svg.left)
      .attr("x",0 - (h/2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Percent Anti-Imperialist");
svg.append("text")
      .attr("id", "fifty")
      .attr("transform", "translate(55, 50)")
      .attr("y", yscale(50))
      .attr("x", xscale(50))
      .style("text-anchor", "middle")
      .text(" ");
svg.append("text")
      .attr("id", "fifty1")
      .attr("transform", "translate(55, 50)")
      .attr("y", yscale(55))
      .attr("x", xscale(55))
      .style("text-anchor", "middle")
      .text(" ")
window.addEventListener("click", frame);
window.addEventListener("keyup", frame);
function frame(){
svg.select('circle')                
    .transition()
    .duration(400)
    .attr('cx', yscale(myapp.score2))
    .attr('cy', xscale(myapp.score1));
svg.select("#fifty")
     .transition()
     .duration(400)
     .attr("y", yscale(myapp.score1-2.5))
     .attr("x", xscale(myapp.score2))
     .style('fill', 'red')
     .style('font-weight', 'bold')
     .text(String(myapp.name));
svg.select("#fifty1")
     .transition()
     .duration(400)
     .attr("y", yscale(myapp.score1+7))
     .attr("x", xscale(myapp.score2))
     .style('fill', 'yellow')
     .style('font-weight', 'bold')
     .text("("+String(myapp.score2)+","+String(myapp.score1)+")");
                };
};

