// Console Log
console.log("Hello");

let list = ["One", "Two", "Three"];
list.forEach(() => console.log);

let personName = "John";
console.log(`Hello, ${personName}`);

// Console Clear
console.clear();

// Console Assert
var a: number = 100;
console.assert(a === 1000, "Message", `Another message: ${a}`);

// Console Count
function counter(text: string) {
    console.count(text);
}

counter("Hello!"); // 1
counter("Bye!"); // 1

counter("Hello!"); // 2

console.countReset();

// Console Info, Warn, Error
console.info("Information");
console.warn("Warning");
console.error("Error");

// Console Trace
function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.trace(); // Trace the route to get here
}

one(); // Sarts the trace in console

// Console DIR

let car = {
    name: "Audi",
    regNum: "816273",
    details: [
        {
            engine: "v12",
            power: "300CV"
        }
    ]
}

console.dir(car);

//Console Table
console.table(car);

// Console Time

function wait() {
    for (let index = 0; index < 1000; index++) {
        // ...
    }
}

console.time("Test"); // starts the timer
wait();
console.timeEnd("Test"); // finish and count time passed

// Groupings
console.group();
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.groupEnd();
