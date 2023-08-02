// Дополнительные типы
// Any
var test = 123;
test = "14123";
test.game = "room";
test.fun = function () {
    console.log(test.game);
};
var fn = test.fun;
fn();
