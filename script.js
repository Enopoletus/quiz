const myapp={};
window.addEventListener("click", n8ne);
window.addEventListener("keyup", n8ne);
function n8ne(){
const arr8y = [];
const exl = document.getElementsByClassName('answ');
for(let i=0; i<exl.length; i++) {
if (exl[i].checked){
arr8y.push(parseFloat(exl[i].value));}};
const arrsum = arr8y.reduce((a, b) => a + b, 0);
myapp.score1=(100*String((arrsum)/(arr8y.length))).toFixed(3)
document.getElementById("grade").innerHTML =myapp.score1;
const numTabs=document.getElementById("form1").getElementsByTagName("P").length;
document.getElementById("c0unt").innerHTML = (String(arr8y.length));
document.getElementById("c00unt").innerHTML = (String(numTabs));
const arr6y = [];
const exl2 = document.getElementsByClassName('answ2');
for(let i=0; i<exl2.length; i++) {
if (exl2[i].checked){
arr6y.push(parseFloat(exl2[i].value));}};
const arrsum2 = arr6y.reduce((a, b) => a + b, 0);
myapp.score2=(100*String((arrsum2)/(arr6y.length))).toFixed(3)
document.getElementById("grade2").innerHTML = myapp.score2;
const numTabs2=document.getElementById("form2").getElementsByTagName("P").length;
document.getElementById("c0unt2").innerHTML = (String(arr6y.length));
document.getElementById("c00unt2").innerHTML = (String(numTabs2));
if (isNaN(myapp.score1)==true){myapp.score1=50};
if (isNaN(myapp.score2)==true){myapp.score2=50};
if (myapp.name==undefined){myapp.name="You"};
};
window.addEventListener("keyup", tixt);
function tixt(){
myapp.name=document.getElementsByName("name1")[0].value;
};
//handler function is for setting up d3
window.addEventListener("load", handler);
function handler() {
document.getElementById("csize").value=Math.min(window.innerHeight, window.innerWidth)
const h = Number(document.getElementById("csize").value);
const w = h;
document.getElementById("cdisp").value=w;
const svg = d3.select("#ten10")
            .append('svg')
            .attr('width', (w+50))
            .attr('height', h)
            .style("fill", "lightyellow");
const yscale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, (h*.8)]);
const xscale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, (w*.8)]);
const x_axis = d3.axisTop()
            .scale(xscale);
const y_axis = d3.axisLeft()
            .scale(yscale);
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
//here be the yellow rectangle
svg.append('rect')
    .attr("transform", "translate(55, 50)")
    .attr("x", xscale(26.8))
    .attr("y", yscale(36.4))
    .attr("width", xscale(56.35))
    .attr("height", yscale(42.05))
    .attr("stroke-width", 2)
    .attr("fill", d3.rgb(124,240,10,0))
    .attr("stroke", "yellow");
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
      .attr("x", xscale(50))
      .style("text-anchor", "middle")
      .text(" ");
d3.csv("https://enopoletus.github.io/quiz/forms.csv").then(function(data){
      data.forEach(function(d) {
      d.right = +d.right;
      d.anti = +d.anti;
//adds test takers' score circles
svg.append('circle')
    .attr("transform", "translate(55, 50)")
    .attr('r', 6)
    .attr('cx', xscale(d.right))
    .attr('cy', yscale(d.anti))
    .style("fill", d3.rgb(255, (d.ssc*255), (d.atlas*255)));
//adds test takers' names
const z0=.8*(1600/w)
svg.append("text")
      .attr("id", d.name)
      .attr("transform", "translate(55, 50)")
      .attr("y", yscale(d.anti-(z0*1)))
      .attr("x", xscale(d.right))
      .style("text-anchor", "middle")
      .style("font-size", `${14-(d.name.length/3)}px`)
      .style('fill', d3.rgb((d.right*2.55), 235, (d.anti*2.55)))
      .style('font-weight', 'bold')
      .text(d.name);
//adds test takers' scores
svg.append("text")
      .attr("id", String(d.name)+"2")
      .attr("transform", "translate(55, 50)")
      .attr("y", yscale(d.anti+(z0*2)))
      .attr("x", xscale(d.right))
      .style("text-anchor", "middle")
      .style("font-size", "10px")
      .style('font-weight', 'bold')
      .text("("+String(d.right)+","+String(d.anti)+")");
  });
});
//frame function actually moves the circle around
window.addEventListener("click", frame);
window.addEventListener("keyup", frame);
function frame(){
svg.select('circle')
const h = Number(document.getElementById("csize").value);
consnt w = h;
document.getElementById("cdisp").value=w;
d3.select("#ten10").select('svg')
    .attr('width', (w+50))
    .attr('height', h)
    .classed("svg-container", true)    
    .classed("svg-content-responsive", true); 
svg.select('circle')
    .transition()
    .duration(400)
    .attr('cx', yscale(myapp.score2))
    .attr('cy', xscale(myapp.score1));
svg.select("#fifty")
     .transition()
     .duration(400)
     .attr("y", yscale(myapp.score1-3))
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

