console.log("Hello TypeScript");

// Variable Declaration
var name: string = "John";
let email = "johndoe@group.com";

console.log("Hello, " + name);
console.log("How are you, ", name, "?");
console.log(`How are you, ${name} ?`);
console.log(`The email of ${name} is ${email}`);

const PI: number = 3.1416;

// var lastname: any = "Doe";
// lastname = 3;

var error: boolean = false;

// Multiple Variable Declaration
let a: string, b:boolean, c:number;
a = "TypeScript";
b = true;
c = 8.9;

// BuiltIn Types: number, string, boolean, void, null, undefined

// Complex Types
let taskList: string[] = ["Task 1", "Task 2"];

let values: (string | number | boolean)[] = [false, "Hello", true, 56];

enum State {
    "Completed" = "C",
    "Not Completed" = "NC",
    "Pending" = "P"
}

enum Position {
    "First" = 1,
    "Second",
    "Third"
}

let taskState: State = State.Completed;
let marathonResult = Position.Second;

// Interfaces
interface Task {
    name: string,
    state: State,
    urgency: number
}

let task1: Task = {
    name: "Task 1",
    state: State.Pending,
    urgency: 10
}

console.log(`Task: ${task1.name}`);

// Multiple Variable Assignation
let myTask = {
    title: "My Task",
    state: State.Completed,
    urgency: 1
}

// 1 by 1
let myTitle = myTask.title;
let myState = myTask.state;
let myUrgency = myTask.urgency;

// Spread
// Variable Assignation
let {title, state, urgency} = myTask;

// In Lists
let shoppingListMonday: string[] = ["Milk", "Potatoes"];
let shoppingListTuesday: string[] = [...shoppingListMonday, "Bread", "Eggs"];
let shoppingListWednesday: string[] = ["Meat", "Fish"];
let shoppingListWeek = [...shoppingListMonday, ...shoppingListWednesday];

// In Objects
let stateApp = {
    user: "admin",
    session: 3,
    jwt: "Bearer123456788738"
}

let newState = {
    ...stateApp,
    session: 4
}

// Types
type Product = {
    price: number,
    name: string,
    year: number
}

let car: Product = {
    price: 45000,
    name: "Audi",
    year: 2010
}

// Conditionals
// Ternary Operator
console.log(car.year < 2010 ? `Car: ${car.name} (old)` : `Car: ${car.name} (new)`);

// If - else
if(error) {
    console.log("There is an error");
} else {
    console.log("There is no error");
}

if(car.year < 2010) {
    console.log(`Car: ${car.name} (old)`);
} else if(car.year === 2010) {
    console.log(`Car: ${car.name} (2010)`);
} else {
    console.log(`Car: ${car.name} (new)`);
}

// Switch
switch (task1.state) {
    case State.Completed:
        console.log("The task is completed")
        break;
    case State["Not Completed"]:
        console.log("The task is not completed")
        break;
    case State.Pending:
        console.log("The task is pending")
        break;
    default:
        break;
}

// Loops
let newTaskList: Task[] = [
    {
        name: "Task 1",
        state: State.Completed,
        urgency: 2
    },
    {
        name: "Task 2",
        state: State.Pending,
        urgency: 0
    },
    {
        name: "Task 3",
        state: State.Completed,
        urgency: 15
    }
];

// For
for (let index = 0; index < newTaskList.length; index++) {
    const task = newTaskList[index];
    console.log(`${index} - ${task.name}`);
};

// .forEach()
newTaskList.forEach(
    (task: Task, index: number) => {
        console.log(`${index} - ${task.name}`);
    }
);

// While
while (task1.state !== State.Completed) {
    if(task1.urgency == 20) {
        task1.state = State.Completed;
        break;
    } else {
        task1.urgency++;
    }
}

// Do While
do {
    task1.urgency++;
    task1.state = State.Completed;
} while (task1.state !== State.Completed);
