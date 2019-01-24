//The click event occurs when the user clicks on an element
document.addEventListener("click", changeText);
function changeText() {  
  document.getElementById("changeP").innerHTML = "Ooops! Detour ->->";
}

//The over event occurs when the pointer is moved onto an element, or onto one of its children
//The out event occurs when a user moves the mouse pointer out of an element, or out of one of its children
document.addEventListener("mouseover", mOver);
document.addEventListener("mouseout", mOut);
function mOver() {
  document.getElementById("moverP").innerHTML = "Hello World!";  
}
function mOut() {
  document.getElementById("moverP").innerHTML = "Mouse Over Me";
}

//The up event occurs when a user releases a mouse button over an element
//The down event occurs when the user presses a mouse button over an element
document.addEventListener("mouseup", mUp);
document.addEventListener("mousedown", mDown);
function mUp() {
  document.getElementById("mP").style.backgroundColor = "blue";
  document.getElementById("mP").innerHTML = "Thank You!";  
}
function mDown() {
  document.getElementById("mP").style.backgroundColor = "yellow";
  document.getElementById("mP").innerHTML = "Release Me";
}

//The double event occurs when the user double-clicks on an element
document.addEventListener("dblclick", dbclickText);
function dbclickText() { 
  document.getElementById("dbP").style.color = "blue"; 
  document.getElementById("dbP").innerHTML = "I was double-clicked!";
}

//The onresize event occurs when the browser window has been resized
window.addEventListener("resize", disSize);
function disSize() { 
   var w = window.innerWidth;
   var h = window.innerHeight;
   document.getElementById("sizeP").innerHTML = "Width: " + w + "<br>Height: " + h;
}
