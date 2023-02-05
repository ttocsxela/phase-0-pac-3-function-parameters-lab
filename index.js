function logTwoValues(value1,value2) {
    console.log('The two values are ${value1} and ${value2}.');
}

function introductionWithLanguage(name, language) {
    console.log('Hi, my name is ${name} and I am learning to program in {language}.');
}
function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
  }
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log('Hi, my name is ${name} and I am learning to program in {language}.');
}