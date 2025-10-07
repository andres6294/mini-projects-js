// Mini-project 6: Even and Odd Counter in an Array

// Defina an array with sample numbers
let numbers = [2,5,1,6,8,3,9,14,22,11,16];

// Initialize counters
let evenCount = 0;
let oddCount = 0;
let evenNumbers = [];
let oddNumbers = [];

// Loop through the array
for (let i = 0; i < numbers.length; i++){
    // Validate that the element is a number
    if (isNaN(numbers[i])){
        console.log(`Skipping invalid value: ${numbers[i]}`);
        continue;
    }

    // Check if the number is even or odd 
    if (numbers[i] % 2 === 0) {
        evenCount ++;
        evenNumbers.push(numbers[i]);
    }else {
        oddCount++;
        oddNumbers.push(numbers[i]);
    }
}

// Display results
console.log(`Numbers: ${numbers}`);
console.log(`Even numbers ${evenCount}: ${evenNumbers.join(", ")}`);
console.log(`Odd numbers ${oddCount}: ${oddNumbers.join(", ")}`);