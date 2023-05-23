export enum Level {
    "Info",
    "Urgent",
    "Blocking"
}

export interface ITask {
    title: string,
    description?: string,
    completed: boolean,
    urgency?: Level,
    summary: () => string
}
