export type TaskType = "assignment" | "exam" | "project";
export type Difficulty = "hard" | "medium" | "easy";

export type Task = {
    id: string;
    title: string;
    type: TaskType;
    dueDate: string;
    difficulty: Difficulty;
    subtasks: number;
    description?: string;
};