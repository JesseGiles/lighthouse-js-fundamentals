function isOdd(num) {
  answer = num % 2 != 0;
  return answer;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log("40 is odd: " + isOdd(40));
console.log("111111 is odd: " + isOdd(111111));
console.log("133 is odd: " + isOdd(133));
console.log("140 is odd: " + isOdd(140));
console.log("10140 is odd: " + isOdd(10140));