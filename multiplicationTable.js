// Mini-project 5: Multiplication Table

// Define the number for the multiplication table
let number = 5; 

// Validate that the input is a valid number
if (isNaN(number) || number <= 0){
    console.log('Please enter a valid positive number.');
} else {
    console.log(`Multiplication table of ${number}:`);

    // Generate and display the table using a for loop
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}