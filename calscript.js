const values = [];
let operation = null;
let num1 = null;
let num2 = null;
let memoryButtons = document.querySelectorAll(".memory-btn");
let numbersButtons = document.querySelectorAll(".number-btn");
let operatorButtons = document.querySelectorAll(".operator");
const displayOutput = document.getElementById("display");
console.log("displayed", displayOutput.value);

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(`clicked: ${clearButton.textContent}`);
  displayOutput.value = clearButton.textContent;
});

const equalButton = document.getElementById("equal");
equalButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(`clicked: ${equalButton.textContent}`);
  displayOutput.value = equalButton.textContent;
  const result = operation(...values);
  displayOutput.value = result;
});

memoryButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(`clicked: ${button.textContent}`);
    displayOutput.value = button.textContent;
  });
});

numbersButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(`clicked: ${button.textContent}`);
    displayOutput.value += button.textContent;
    values.push(Number.parseInt(button.textContent));
    if (operation !== null) {
      num2 = event.target.value;
      button.textContent = num2;
    } else {
      num1 = event.target.value;
      //   button.textContent = num1;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    operation = event.target.value;
    console.log(`clicked: ${button.textContent}`);
    displayOutput.value = button.textContent;
    if (button.textContent === "+") {
      operation = add;
    }
    if (button.textContent === "-") {
      operation = subtract;
    }
    if (button.textContent === "*") {
      operation = multiply;
    }
    if (button.textContent === "/") {
      operation = divide;
    }
  });
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

// / TEST CASE
// Description: Adding 1 + 2 = 3
// 1.) Click on the number one button
// EXPECTATION: Show 1 in the display
// ACTUAL: ???  DONE - THE NUMBER 1 APPEARS

// 2.) Click on the plus button
// EXPECTATION: Nothing. (Still showing 1 in the display)
// ACTUAL: ??? DONE - THE + SIGN APPEARS

// 3.) Click on the number two button
// EXPECTATION: Show 2 in the display
// ACTUAL: ??? DONE - THE NUMBER 2 APPEARS

// 4.) Click on the equals button
// EXPECTATION: Show 3 in the display
// ACTUAL: ??? need to display 3 = NO
// ** Need to create a variable number1 and number 2 assign value of the button click, where it will return the value in a number not a string -
// create or assign function that will execute this and add a operator and create an eventListener that upon clicking the equal button it will process the mathematical function and render the result on the screen.
// ===========================================
// // TEST CASE
// // Description: Adding 11 + 22 = 33  (use += to display 111111)

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
