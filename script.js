var addCount=document.getElementById("right-btn");
var lowerCount=document.getElementById("left-btn");
var display=document.getElementById("screen");
var counter=0; 

addCount.addEventListener("click", function () {
    counter++;
    updateDisplay();
})

lowerCount.addEventListener("click", function () {
    counter--;
    updateDisplay();
})
function updateDisplay() {
   display.innerText=counter;

}
