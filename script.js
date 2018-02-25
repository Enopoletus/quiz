window.addEventListener("click", function nine(){
x1 = parseInt((document.querySelector('input[name="question1"]:checked').value), 10);
x2 = parseInt((document.querySelector('input[name="question2"]:checked').value), 10);
x3 = parseInt((document.querySelector('input[name="question3"]:checked').value), 10);
x4 = parseInt((document.querySelector('input[name="question4"]:checked').value), 10);
document.getElementById("grade").innerHTML = String(x1+x2+x3+x4);}
);
