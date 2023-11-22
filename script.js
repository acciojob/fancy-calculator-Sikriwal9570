//your JS code here. If required.
// Take input for the first variable and multiply it by 2
let firstInput = prompt("Enter the first positive integer:");
firstInput = parseInt(firstInput);

// Check if the input is a positive integer
if (isNaN(firstInput) || firstInput <= 0) {
  alert("Please enter a valid positive integer for the first input.");
} else {
  let multipliedResult = firstInput * 2;

  // Take input for the second variable
  let secondInput = prompt("Enter the second positive integer:");
  secondInput = parseInt(secondInput);

  // Check if the input is a positive integer
  if (isNaN(secondInput) || secondInput <= 0) {
    alert("Please enter a valid positive integer for the second input.");
  } else {
    // Add the second input to the result of the first input multiplied by 2
    let finalResult = multipliedResult + secondInput;

    // Display the final result using alert()
    alert("The final result is: " + finalResult);
  }
}

