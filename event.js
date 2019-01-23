function changeText(obj) {
 	 obj.innerHTML = "Ooops! Detour ->->";
}

function mOver(obj) {
 	 obj.innerHTML = "Hello World!";  
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}

function mUp(obj) {
  	obj.style.backgroundColor = "blue";
  	obj.innerHTML = "Thank You!";  
}

function mDown(obj) {
  	obj.style.backgroundColor="yellow";
  	obj.innerHTML = "Release Me";  
}

function upperCase() {
  var x = document.getElementById("ucaseP");
  x.addEventListener("onkeyup", upperCase);
  x.value = x.value.toUpperCase();
}

function myFunction() {
  document.getElementById("alertP").addEventListener("click", function() {
	 	alert("You clicked the white element!");
  }, false);
  	
  document.getElementById("alertDiv").addEventListener("click", function() {
  		alert("You clicked the lightblue element!");
  }, false);

}