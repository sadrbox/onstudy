//Functions
var createPassword = function (name, age) {
    if (name === void 0) { name = "Max"; }
    if (age === void 0) { age = 20; }
    return "".concat(name).concat(age);
};
var result = createPassword("Jack", 31);
console.log(result);
var result2 = createPassword();
console.log(result2);
var result3 = createPassword("red");
console.log(result3);
console.log("first");
console.log("two");
console.log(null);
console.log(undefined);
console.log(undefined);
