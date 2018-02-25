window.addEventListener("click", function nine(){
x1 = parseFloat(document.querySelector('input[name="question1"]:checked').value);
x2 = parseFloat(document.querySelector('input[name="question2"]:checked').value);
x3 = parseFloat(document.querySelector('input[name="question3"]:checked').value);
x4 = parseFloat(document.querySelector('input[name="question4"]:checked').value);
x5 = parseFloat(document.querySelector('input[name="question5"]:checked').value);
document.getElementById("grade").innerHTML = String((x1+x2+x3+x4)/5);}
);
