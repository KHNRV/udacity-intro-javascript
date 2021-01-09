/*
 * Programming Quiz: Musical Groups (3-3)
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `musicians`, and include `if...else if...else` conditional statement
 * 2. Your code should produce the expected output, as mentioned above. Read each condition carefully. 
 */
 
// change the value of `musicians` to test your conditional statements
let musicians = 1;
let typeOfBand;

//evaluate the type of band and asign the type to the typeOfBand variable
if (musicians <= 0) {
  typeOfBand = "not a group";
} else if (musicians === 1) {
  typeOfBand = "solo";
} else if (musicians === 2) {
  typeOfBand = "duet";
} else if (musicians === 3) {
  typeOfBand = "trio";
} else if (musicians === 4) {
  typeOfBand = "quartet";
} else {
  typeOfBand = "this is a large group";
}

// print the type of band
console.log(typeOfBand);
// your code goes here
