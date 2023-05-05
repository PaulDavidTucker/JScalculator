var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = "Value is: " + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = "Value is: " + this.value;
} 