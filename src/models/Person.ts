export class Person {
    firstname: string;
    lastname: string;
    age: number;

    constructor(firstname: string, lastname: string, age: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.firstname} ${this.lastname} and I'm ${this.age} years old.`);
    }
}

export class TeamMember extends Person {
    salary: number;

    constructor(firstname: string, lastname: string, age: number, salary: number) {
        super(firstname, lastname, age);
        this.salary = salary;
    }

    greet(): void {
        super.greet();
        console.log(`I earn ${this.salary}$`);
    }
}

export class Director extends Person {
    teamMembers: TeamMember[] = [];

    constructor(firstname: string, lastname: string, age: number) {
        super(firstname, lastname, age)
    }
}