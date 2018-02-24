window.addEventListener("load",
document.getElementById("form1").onsubmit=function() {
           q1 = parseInt(document.querySelector('input[name = "question"]:checked').value);
	   q2 = parseInt(document.querySelector('input[name = "question2"]:checked').value);
	   q3 = parseInt(document.querySelector('input[name = "question3"]:checked').value);
	   q4 = parseInt(document.querySelector('input[name = "question4"]:checked').value);
	   result = q1 + q2 + q3 + q4;
	document.getElementById("grade").innerHTML = result;
return false;
}
);
