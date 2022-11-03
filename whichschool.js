//create function to determine a school based on age arguement

const whichSchool = function(age){
  if (age < 13) {
    return "Elementary School";
    //if age is under 13, return value elementary school
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
    //if age is 13-18, return value secondary school
  } else if (age > 18) {
    return "Lighthouse Labs";
    //if age is over 18, return value lighthouse labs
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));