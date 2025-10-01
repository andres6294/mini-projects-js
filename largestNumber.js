// Mini-project: Find the largest of three numbers

// Assign values to evaluate
let num1 = 80;
let num2 = 96;
let num3 = 27;

// Validate that all are numbers
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Please enter only numeric values.");
} else {
    let largest;

    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }

    console.log(`The largest number is: ${largest}`);
}
