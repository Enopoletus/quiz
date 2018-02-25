window.addEventListener("click", function nine(){
x1 = document.querySelector('input[name="question1"]:checked').value;
x2 = document.querySelector('input[name="question2"]:checked').value;
x3 = document.querySelector('input[name="question3"]:checked').value;
x4 = document.querySelector('input[name="question3"]:checked').value;
document.getElementById("grade").innerHTML = (x1+x2+x3+x4);}
);
