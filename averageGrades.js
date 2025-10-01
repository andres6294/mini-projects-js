// Mini-project: Program to calculate the average of 3 grades

// Define the notes

let grade1 = 4.2;
let grade2 = 1.0;
let grade3 = 3.5;

// Validate that all grades are between 0 and 5
if(
    grade1 >= 0 && grade1 <= 5 &&
    grade2 >= 0 && grade2 <= 5 &&
    grade3 >= 0 && grade3 <= 5
){
    // If all are valid, the average is calculated
    let average = (grade1 + grade2 + grade3) / 3;
    let formattedAverage = average.toFixed(1);
    console.log(`The average is: ${formattedAverage}`);
    let roundedAverage = Math.round(average);
    console.log(`The rounded average is: ${roundedAverage}`);

    if(average >= 3.0){
        console.log(`You passed with an average grade: ${formattedAverage}`);
    }else{
        console.log(`With an average grade of ${formattedAverage} you fail`);
    }
}
else{
    // If any grade is invalid
    console.log("All grades must be between 0 and 5. Please check the values.");
}
