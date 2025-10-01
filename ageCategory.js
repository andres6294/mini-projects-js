// Mini-project 4: Age Category

// Define the age
let age = 67;

if(isNaN(age) || age < 0){
    console.log(`Please enter a valid age.`);
} else if(age >= 0 && age <= 12){
    console.log(`The person is ${age} years old - Category: Child.`);
} else if(age >= 13 && age <= 17){
    console.log(`The person is ${age} years old - Category: Teenager.`);
} else if(age >= 18 && age <= 64){
    console.log(`The person is ${age} years old - Category: Adult.`);
} else{
    console.log(`The person is ${age} years old - Category: Senior.`);
} 