const sayHello = function (name) {
  console.log("Hasta la vista, " + name);
}

sayHello("Arnie");
sayHello("JCVD");
sayHello("Stallone");

const returnSayHello = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello("Kurt Russell");
console.log(greeting);