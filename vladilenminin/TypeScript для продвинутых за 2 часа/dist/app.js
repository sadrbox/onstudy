"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
const max = new Person("Maxim");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    console.log("Button clicked!");
});
//# sourceMappingURL=app.js.map