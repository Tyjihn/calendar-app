export type TaskType = "assignment" | "exam" | "project";
export type Difficulty = "hard" | "medium" | "easy";

export type Task = {
    id: string;
    title: string;
    type: TaskType;
    dueDate: string;
    difficulty: Difficulty;
    subtasks: Subtask[];
    description?: string;
};

export type Subtask = {
    id: string;
    title: string;
    date: string;       // YYYY-MM-DD
    startTime: string;  // HH:MM
    duration: number;   // minutes
};