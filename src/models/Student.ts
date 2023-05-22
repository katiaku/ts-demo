import { Subject } from "./Subject";

export class Student {

    firstname: string;
    lastname?: string;
    subjects: Subject[];

    private ID: string = "123456";

    constructor(firstname: string, subjects: Subject[], lastname?: string) {
        this.firstname = firstname;
        if(lastname) {
            this.lastname = lastname;
        }
        this.subjects = subjects;
    }

    get hoursStudied(): number {
        let hoursStudied = 0;
        this.subjects.forEach((subject: Subject) => {
            hoursStudied += subject.hours;
        })
        return hoursStudied;
    }

    set studentID(id: string) {
        this.ID = id
    }
}
