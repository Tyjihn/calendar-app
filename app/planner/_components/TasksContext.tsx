"use client";

import { createContext, useState, ReactNode, useContext } from "react";
import { Task } from "./types";

type TasksContextType = {
    tasks: Task[],
    addTask: (task: Task) => void,
};

const TasksContext = createContext<TasksContextType | undefined>(undefined); 

export function TasksProvider({ children }: { children: ReactNode }) {
    const [tasks, setTasks] = useState<Task[]>([]);
    function addTask(task: Task) { setTasks((prev) => [...prev, task]); };
    
    return (
        <TasksContext.Provider value={{ tasks, addTask }}>
            {children}
        </TasksContext.Provider>
    );
}

export function useTasks() {
    const ctx = useContext(TasksContext);
    if (!ctx) throw new Error("useTasks must be used inside <TasksProvider>");
    return ctx;
}