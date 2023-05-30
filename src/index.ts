import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils';
import { Subject } from './models/Subject';
import { Student } from './models/Student';
import { LIST_SUBJECTS } from './mock/subjects.mock';
import { Director, TeamMember } from './models/Person';
import { ITask, Level } from './models/interfaces/ITask';
import { Program } from './models/Program';

console.log("Hello TypeScript");

// 1. Variable Declaration
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

// - Multiple Variable Declaration
let a: string, b:boolean, c:number;
a = "TypeScript";
b = true;
c = 8.9;

// - BuiltIn Types: number, string, boolean, void, null, undefined

// - Complex Types
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

// - Interfaces
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

// - Multiple Variable Assignation
let myTask = {
    title: "My Task",
    state: State.Completed,
    urgency: 1
}

// - 1 by 1
let myTitle = myTask.title;
let myState = myTask.state;
let myUrgency = myTask.urgency;

// Spread
// - Variable Assignation
let {title, state, urgency} = myTask;

// - In Lists
let shoppingListMonday: string[] = ["Milk", "Potatoes"];
let shoppingListTuesday: string[] = [...shoppingListMonday, "Bread", "Eggs"];
let shoppingListWednesday: string[] = ["Meat", "Fish"];
let shoppingListWeek = [...shoppingListMonday, ...shoppingListWednesday];

// - In Objects
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

// Union Types
type cardNumber = {
    cardNum: number
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

// Tuples
// const person: (string | number)[] = [1, "hc"];
let tPerson: [string, number, boolean];
tPerson = ["hc", 1223, true];

let rgb: [number, number, number] = [255, 123, 112];

// Enums
enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
    FOURTH
}

const hcSeat = SeatChoice.AISLE;

// 2. Conditionals
// - Ternary Operator
console.log(car.year < 2010 ? `Car: ${car.name} (old)` : `Car: ${car.name} (new)`);

// - If - else
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

// - Switch
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

// - Loops
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

// - For
for (let index = 0; index < newTaskList.length; index++) {
    const task = newTaskList[index];
    console.log(`${index} - ${task.name}`);
};

// - .forEach()
newTaskList.forEach(
    (task: Task, index: number) => {
        console.log(`${index} - ${task.name}`);
    }
);

// - While
while (task1.state !== State.Completed) {
    if(task1.urgency == 20) {
        task1.state = State.Completed;
        break;
    } else {
        task1.urgency++;
    }
}

// - Do While
do {
    task1.urgency++;
    task1.state = State.Completed;
} while (task1.state !== State.Completed);

// 3. Functions

/**
 * Function that shows a personal greeting in the console
 */
function hello() {
    let name = "Ann";
    console.log(`Hello, ${name}!`);
}

hello();

/**
 * Function that shows a personal greeting in the console
 * @param name Person's name
 */
function hello2(name: string) {
    console.log(`Hello, ${name}!`);
}

hello2("Kate");

/**
 * Function that shows a personal farewell
 * @param name 
 */
function bye(name: string = "Pete") {
    console.log(`Bye, ${name}!`);
}

bye(); // Bye, Pete!
bye("Joe"); // Bye, Joe!

/**
 * Function that shows a personal farewell
 * @param name (Optional)
 */
function byeOptional(name?: string) { // name: string | undefined
    if(name) {
        console.log(`Bye, ${name}!`);
    } else {
        console.log("Bye!");
    }
}

byeOptional(); // "Bye!"
byeOptional("Sam"); // "Bye, Sam!"

function variousParams(firstname: string, lastname?: string, age: number = 19) {
    if(lastname) {
        console.log(`${firstname} ${lastname} is ${age} years old.`);
    } else {
        console.log(`${firstname} is ${age} years old.`);
    }

    variousParams("John"); // John is 18 years old.
    variousParams("John", "Doe"); // John Doe is 18 years old.
    variousParams("John", undefined, 30) // John is 18 years old.
    variousParams("John", "Doe", 30) // John Doe is 30 years old.
}

function differentTypes(a: string | number) {
    if(typeof(a) === 'string') {
        console.log("A is a string")
    } else if(typeof(a) === 'number') {
        console.log("A is a number")
    } else {
        console.log("A is not a string nor a number");
        throw Error("A is not a string nor a number")
    }
}

differentTypes("Hello");
differentTypes(3);

/**
 * 
 * @param firstname Firstname
 * @param lastname Lastname
 * @returns Fullname
 */
function returnExample(firstname: string, lastname: string): string {
    return `${firstname} ${lastname}`;
}

const fullname = returnExample("John", "Doe");

console.log(fullname);
console.log(returnExample("Ann", "Doe"));

/**
 * 
 * @param firstnames is a list of strings
 */
/* function multiparams(...firstnames: string[]): void {
    firstnames.forEach((firstname) = {
        console.log(firstname)
    });
}

multiparams("John");
multiparams("John", "Ann", "Sam", "Joe");

const list = ["Nick", "Jane"];
multiparams(...list);

function paramsList(...firstnames: string[]){
    firstnames.forEach((firstname) = {
        console.log(firstname)
    });
} */

// paramsList(list);

// - Arrow Functions
type Employee = {
    firstname: string,
    lastname: string,
    age: number
}

let employee: Employee = {
    firstname: "Jill",
    lastname: "Brown",
    age: 30
}

const showEmployee = (employee: Employee): string => `${employee.firstname} has ${employee.age} years`

showEmployee(employee);

const employeeData = (employee: Employee): string => {
    if(employee.age > 70) {
        return `The employee ${employee.firstname} is going to retire`
    } else {
        return `The employee ${employee.firstname} is not going to retire yet`
    }
}

const getSalary = (employee: Employee, getMoney: () => void) => {
    if(employee.age > 70) {
        return
    } else {
        getMoney() // callback
    }
}

const payEmployee = (employee: Employee) => {
    console.log(`The employee\'s receives the salary`);
}

getSalary(employee, () => 'Pay the employee');

// - Async Functions
/* function asyncExample(): Promise<string> {
    await console.log("Task to complete before following the list of instructions")
    console.log("The task is completed")
    return "Completed"
}

asyncExample().then((response) => {
    console.log("Response", response);
}).catch((error) => {
    console.log("Error", error)
}).finally(() => "Finished"); */

// - Generators
function* generatorExample() {
    // yield -> to create values
    let index = 0;
    while(index < 5) {
        yield index++;
    }
}

let generator = generatorExample();
console.log(generator.next().value)

// - Worker
function* watcher(value: number) {
    yield value;
    yield* worker(value);
    yield value + 4;
}

function* worker(value: number) {
    yield value + 1;
    yield value + 2;
    yield value + 3;
}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value); // 0 (watcher)
console.log(generatorSaga.next().value); // 1 (worker)
console.log(generatorSaga.next().value); // 2 (worker)
console.log(generatorSaga.next().value); // 3 (worker)
console.log(generatorSaga.next().value); // 4 (watcher)

// Function Overloading
function showError(error: string | number): void {
    console.log("There is an error: ", error);
}

// function showError(errorNumber: number): void {
//     console.log("There is an error: ", errorNumber);
// }

// 4. Data Persistence
// - LocalStorage, SessionStorage
// function set(): void {
//     localStorage.set("nombre", "John");
// }

// function get(): void {
//     let nombre = localStorage.get("nombre");
// }

// - Cookies
const cookieOptions = {
    name: "user", // string,
    value: "John", // string,
    expires: new Date(2099, 10, 1), // optional Date,
    path: "/", // optional string,
};

setCookie(cookieOptions);

let cookieData = getCookieValue("user");

deleteCookie("user");

deleteAllCookies();

// 5. Events
class Timer {
    public finish?: (time: number) => void;
    public start(): void {
        setTimeout(() => {
            if(!this.finish) return;
            this.finish(Date.now());
        }, 10000)
    }
}

const myTimer: Timer = new Timer();

myTimer.finish = (time: number) => {
    console.log("The event is finished: ", time)
}

myTimer.start();

// setInterval(() => console.log("Tic"), 1000);

delete myTimer.finish;

// 6. Classes
// const typeScript: Subject = new Subject("TypeScript", 15);
// const javaScript: Subject = new Subject("TypeScript", 20);
// const listSubjects: Subject[] = [];
// listSubjects.push(typeScript, javaScript);

// MOCK
const listSubjects: Subject[] = LIST_SUBJECTS;

const john: Student = new Student("John", listSubjects, "Doe");

console.log(`${john.firstname} studies: `);
john.subjects.forEach((subject: Subject) => {
    console.log(`- ${subject.name} (${subject.hours} hours)`);
})

const angular: Subject = new Subject("Angular", 40);

john.subjects.push(angular);

john.hoursStudied;

// TypeOf, InstanceOf
let birthDate = new Date(1991, 10, 10);

if(birthDate instanceof Date) {
    console.log("This is a Date instance")
}

if(john instanceof Student) {
    console.log("John is a student")
}

// 7. Inheritance and Polymorphism
let teamMember1 = new TeamMember("John", "Doe", 30, 2000);
let teamMember2 = new TeamMember("Sam", "Smith", 42, 2400);
let teamMember3 = new TeamMember("Ann", "Cole", 28, 2100);

let director = new Director("Paul", "Green", 50);

director.teamMembers.push(teamMember1, teamMember2, teamMember3);

director.teamMembers.forEach((TeamMember: TeamMember) => {
    console.log(TeamMember.firstname);
});

teamMember1.greet();
director.greet();

director.teamMembers.forEach((TeamMember: TeamMember) => {
    TeamMember.greet();
});

// 8. Interfaces
// - Object
let program: ITask = {
    title: 'Program in TypeScript',
    description: 'Practice Katas to learn TypeScript',
    completed: false,
    urgency: Level.Urgent,
    summary: function (): string {
        return `${title} - ${this.completed} - Level: ${this.urgency}`;
    }
}

console.log(program.summary());

// - Class
let programTS = new Program("TypeScript", "TypeScript Task", false, Level.Blocking);

console.log(programTS.summary());

/* 9. Decorators
// - Class
// - Params
// - Methods
// - Properties

function Override(label: string) {
    return function(target: any, key: string) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        })
    }
}

class DecoratorExample {
    @Override("Example")
    name: string = "John"
}

let example = new DecoratorExample();

console.log(example.name) // always returns "Example"

function ReadOnly(target: any, key: string) {
    Object.defineProperty(target, key, {
        writable: false
    })
}

class ReadOnlyExample {
    @ReadOnly
    name: string = '';
}

let example2 = new ReadOnlyExample();

example2.name = "John";

console.log(example2.name); // Undefined (the value is read only)

function showPosition(target: any, propertyKey: string, parameterIndex: number){
    console.log("Position", parameterIndex);
}

class DecoratorMethodTest {
    test(a: string, @showPosition b: boolean) {
        console.log(b);
    }
}

new DecoratorMethodTest().test('hello', false);

// Creational Design Patterns
const myFirstSingleton = Singleton.getInstance();
const mySecondSingleton = Singleton.getInstance();

if(myFirstSingleton === mySecondSingleton) {
    console.log("Correct, variables contain the same instance");
    myFirstSingleton.showInConsole();
    mySecondSingleton.showInConsole();
} else {
    console.log("Failed, variables contain different instances")
}
*/
