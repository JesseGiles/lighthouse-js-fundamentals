//function divides arguement by 2, returns boolean true if even, false if odd 
const isEven = function (num) {
  return num % 2 === 0;
}

//variable storing return of function isEven
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

//call variables to run the function
console.log(tenIsEven);
console.log(elevenIsEven);

//simply this by calling function directly with arguement
console.log(isEven(10));
console.log(isEven(11));

