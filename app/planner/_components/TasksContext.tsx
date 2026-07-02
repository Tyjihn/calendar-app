"use client";

import { createContext, useState, ReactNode, useContext } from "react";
import { Subtask, Task } from "./types";

type TasksContextType = {
    tasks: Task[],
    addTask: (task: Task) => void,
    updateSubtask: (subtaskId: string, patch: Partial<Subtask>) => void;
};

const TasksContext = createContext<TasksContextType | undefined>(undefined); 

export function TasksProvider({ children }: { children: ReactNode }) {
    const [tasks, setTasks] = useState<Task[]>([]);
    function addTask(task: Task) { setTasks((prev) => [...prev, task]); };
    function updateSubtask(subtaskId: string, patch: Partial<Subtask>) {
        setTasks((prev) => (
            prev.map((task) => (
                { ...task, subtasks: task.subtasks.map((subtask) =>
                    ( subtaskId === subtask.id ? { ...subtask, ...patch } : subtask )
                )}
            ))
        ))
    };
    
    return (
        <TasksContext.Provider value={{ tasks, addTask, updateSubtask }}>
            {children}
        </TasksContext.Provider>
    );
}

export function useTasks() {
    const ctx = useContext(TasksContext);
    if (!ctx) throw new Error("useTasks must be used inside <TasksProvider>");
    return ctx;
}