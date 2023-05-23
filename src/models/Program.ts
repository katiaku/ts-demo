import { ITask, Level } from "./interfaces/ITask";

export class Program implements ITask {
    title: string;
    description?: string | undefined;
    completed: boolean;
    urgency?: Level | undefined;
    
    constructor(title: string, description: string, completed: boolean, urgency: Level) {
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.urgency = urgency;
    }

    summary = (): string => {
        return `Programming Task: ${this.title} - ${this.completed}`;
    }
}