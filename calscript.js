let memoryButtons = document.querySelectorAll(".memory-btn");
let numbersButtons = document.querySelectorAll(".number-btn");
let operatorButtons = document.querySelectorAll(".operator");
const displayOutput = document.getElementById("display");
console.log("displayed", displayOutput);

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked", clearButton);
});

const equalButton = document.getElementById("equal");
equalButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked", equalButton);
});

memoryButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("clicked", button);
  });
});

numbersButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("clicked", button);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("clicked", button);
  });
});

// / TEST CASE
//THIS IS WHERE I AM AT RENDERING - GC 9:57PM 12/03
// Description: Adding 1 + 2 = 3
// 1.) Click on the number one button
// EXPECTATION: Show 1 in the display
// ACTUAL: ???

// 2.) Click on the plus button
// EXPECTATION: Nothing. (Still showing 1 in the display)
// ACTUAL: ???

// 3.) Click on the number two button
// EXPECTATION: Show 2 in the display
// ACTUAL: ???

// 4.) Click on the equals button
// EXPECTATION: Show 3 in the display
// ACTUAL: ???
// ===========================================
// // TEST CASE
// // Description: Adding 11 + 22 = 33

// 1.) Click on the number one button
// EXPECTATION: Show 1 in the display
// ACTUAL: ???

// 2.) Click on the number one button
// EXPECTATION: Show 11 in the display
// ACTUAL: ???

// 3.) Click on the plus button
// EXPECTATION: Nothing. (Still showing 11 in the display)
// ACTUAL: ???

// 4.) Click on the number two button
// EXPECTATION: Show 2 in the display
// ACTUAL: ???

// 5.) Click on the number two button
// EXPECTATION: Show 22 in the display
// ACTUAL: ???

// 6.) Click on the equals button
// EXPECTATION: Show 33 in the display
// ACTUAL: ???
